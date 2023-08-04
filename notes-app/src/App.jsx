import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import Split from "react-split";
import { nanoid } from "nanoid";
import { onSnapshot, addDoc, doc, deleteDoc } from "@firebase/firestore";
import { notesCollection, db } from "./firebase";
import "./index.css";

export default function App() {
	// initialize state with the notes from localStorage if they exists, OR an empty array if it's falsy.

	/* 
		this is an example of a "lazy initializer" because we passed a function to useState
		only when state is first accessed, and not when the component is first rendered.
	*/
	const [notes, setNotes] = useState([]);

	const [currentNoteId, setCurrentNoteId] = useState(notes[0]?.id) || "";

	const currentNote =
		notes.find((note) => note.id === currentNoteId) || notes[0];

	async function createNewNote() {
		const newNote = {
			body: "# Type your markdown note's title here",
		};
		// add the newNote to the database by calling the addDoc function with two arguments, the first is the collection reference, and the second is the data object that we want to add to the collection.

		// addDoc returns a promise so we need to use await to wait for the promise to resolve and async the function to use await.
		const newNoteRef = await addDoc(notesCollection, newNote);
		setCurrentNoteId(newNoteRef.id);
	}

	useEffect(() => {
		// the onSnapshot takes two arguments, the first is the collection reference, and the second is a callback function whenever there's a change to the "notes" collection.

		// the snapshot holds the data of the collection whenever the collection is updated or changed. The onSnapshot() listener creates a websocket connection to the database to receive the data in real time. And we don't want to hang the listener when the component unmounts or whenever the tab close which causes memory leak when there's a listener listening in the background. So we need to return a function from the useEffect hook to clean up the listener.
		const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
			// Sync up local notes array with the snapshot data
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

	// localStorage.clear();

	function updateNote(text) {
		// trying to rearrange the most recently modified note to be at the top of the sidebar
		setNotes((oldNotes) => {
			// create a new empty array
			// Loop over the origin array
			// if the id matches
			// put the updated note at the beginning of the new array
			// else
			// push the old note to the end of the new array
			// return the new array
			if (oldNotes.length > 0) {
				const newArray = [];
				oldNotes.map((note) => {
					if (note.id === currentNoteId) {
						newArray.unshift({ ...note, body: text });
					} else {
						newArray.push(note);
					}
				});
				return newArray;
			}

			// imperative way of making the recent note at the top of the sidebar
			// for (let i = 0; i < oldNotes.length; i++) {
			// 	const oldNote = oldNotes[i];
			// 	if (oldNote.id === currentNoteId) {
			// 		newArray.unshift({ ...oldNote, body: text });
			// 	} else {
			// 		newArray.push(oldNote);
			// 	}
			// }
		});
	}

	/**
	 * Challenge: complete and implement the deleteNote function
	 *
	 * Hints:
	 * 1. What array method can be used to return a new
	 *    array that has filtered out an item based
	 *    on a condition?
	 * 2. Notice the parameters being based to the function
	 *    and think about how both of those parameters
	 *    can be passed in during the onClick event handler
	 */

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
						notes={notes}
						currentNote={currentNote}
						setCurrentNoteId={setCurrentNoteId}
						newNote={createNewNote}
						deleteNote={deleteNote}
					/>

					<Editor currentNote={currentNote} updateNote={updateNote} />
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
