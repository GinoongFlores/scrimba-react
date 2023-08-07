import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import Split from "react-split";
import { nanoid } from "nanoid";
import {
	onSnapshot,
	addDoc,
	doc,
	deleteDoc,
	setDoc,
} from "@firebase/firestore";
import { notesCollection, db } from "./firebase";
import "./index.css";

export default function App() {
	const [notes, setNotes] = useState([]);

	const [currentNoteId, setCurrentNoteId] = useState("");

	const currentNote =
		notes.find((note) => note.id === currentNoteId) || notes[0];

	// sort the notes array by the updatedAt property in descending order.
	const sortedNotes = notes.sort((a, b) => b.updatedAt - a.updatedAt);

	// the tempNoteText is the text that we type in the editor.
	const [tempNoteText, setTempNoteText] = useState("");

	// create a new note and add it to the database.
	async function createNewNote() {
		const newNote = {
			createdAt: Date.now(),
			updatedAt: Date.now(),

			body: "# Type your markdown note's title here",
		};
		// add the newNote to the database by calling the addDoc function with two arguments, the first is the collection reference, and the second is the data object that we want to add to the collection.

		// addDoc returns a promise so we need to use await to wait for the promise to resolve and async the function to use await.
		const newNoteRef = await addDoc(notesCollection, newNote);
		setCurrentNoteId(newNoteRef.id);
	}

	useEffect(() => {
		currentNote && setTempNoteText(currentNote.body);
	}, [currentNote]);

	useEffect(() => {
		if (!currentNoteId) {
			setCurrentNoteId(notes[0]?.id);
		}
	}, [notes, currentNoteId]);

	/* 
	 - Create an effect that runs any time the `tempNoteText` changes
	 - Delay the sending of the request to firebase by 500s 
	 - uses setTimeout 
	 - use clear clearTimeout to cancel the previous setTimeout
	*/

	useEffect(() => {
		// the `setTimeout` function will execute after 500ms and call the `updateNote` function with the `tempNoteText` as the argument.
		const timeoutId = setTimeout(() => {
			if (tempNoteText !== currentNote.body) {
				updateNote(tempNoteText);
			}
		}, 500);

		// use clearTimeout() and call the timeoutId to cancel the previous setTimeout.
		return () => clearTimeout(timeoutId);
	}, [tempNoteText]); // useEffect will run every time the tempNoteText changes or on every key stroke.

	useEffect(() => {
		// the onSnapshot takes two arguments, the first is the collection reference, and the second is a callback function whenever there's a change to the "notes" collection.

		// the snapshot holds the data of the collection whenever the collection is updated or changed. The onSnapshot() listener creates a websocket connection to the database to receive the data in real time. And we don't want to hang the listener when the component unmounts or whenever the tab close which causes memory leak when there's a listener listening in the background. So we need to return a function from the useEffect hook to clean up the listener.
		const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
			// Sync up local notes array with the snapshot data by listening to the changes in the database.
			const noteArr = snapshot.docs.map((doc) => ({
				// return all the data object from the document.
				...doc.data(),

				// firestore doesn't store the id in the data object, the document has its own id property. So we need to add the id property to the data object.
				id: doc.id,
			}));
			// set the notes array to the noteArr where it contains all the data from the documents in the collection.
			setNotes(noteArr);
		});

		// return a function to clean up the listener. Because the unsubscribe is a function we can call it directly without creating a new function.
		return unsubscribe;
	}, []);

	async function updateNote(text) {
		const docRef = doc(db, "notes", currentNoteId);
		// since we only have one property we can make an inline object and merge it with the existing data object. The merge property will lessen the risk of overwriting the existing data object in the future when we add more properties to the data object.
		await setDoc(
			docRef,
			{ body: text, updatedAt: Date.now() },

			{ merge: true }
		);
	}

	// the doc() helps us to access a single document in the collection. The doc() takes two arguments, the first is the collection reference, and the second is the name of the collection that were trying to delete from the database. And the third argument is the id of the document that we want to delete.
	async function deleteNote(noteId) {
		const docRef = doc(db, "notes", noteId);
		await deleteDoc(docRef);
	}

	return (
		<main>
			{notes.length > 0 ? (
				<Split sizes={[30, 70]} direction="horizontal" className="split">
					<Sidebar
						notes={sortedNotes}
						currentNote={currentNote}
						setCurrentNoteId={setCurrentNoteId}
						newNote={createNewNote}
						deleteNote={deleteNote}
					/>

					<Editor
						tempNoteText={tempNoteText}
						setTempNoteText={setTempNoteText}
					/>
				</Split>
			) : (
				<div className="no-notes">
					<h1>You have no notes</h1>
					<button className="first-note" onClick={createNewNote}>
						Create one now
					</button>
				</div>
			)}
		</main>
	);
}
