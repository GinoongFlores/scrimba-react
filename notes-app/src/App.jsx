import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import Split from "react-split";
import { nanoid } from "nanoid";
import "./index.css";

export default function App() {
	// initialize state with the notes from localStorage if they exists, OR an empty array if it's falsy.

	/* 
		this is an example of a "lazy initializer" because we passed a function to useState
		only when state is first accessed, and not when the component is first rendered.
	*/
	const [notes, setNotes] = useState(
		() => JSON.parse(localStorage.getItem("notes")) || []
	);
	const [currentNoteId, setCurrentNoteId] = useState(
		(notes[0] && notes[0].id) || ""
	);

	const currentNote = notes.find(
		(note) => note.id === currentNoteId || notes[0]
	);

	// sync notes with localStorage

	useEffect(() => {
		// turn the notes array into a stringified JSON object
		localStorage.setItem("notes", JSON.stringify(notes));
		// console.log("notes ", notes);
		// console.log(notes[0].body);
	}, [notes]); // every time notes changes, save it to localStorage

	// localStorage.clear();

	function createNewNote() {
		const newNote = {
			id: nanoid(),
			body: "# Type your markdown note's title here",
		};
		setNotes((prevNotes) => [newNote, ...prevNotes]);
		setCurrentNoteId(newNote.id);
	}

	function updateNote(text) {
		// trying to rearrange the most recently modified note to be at the top of the sidebar
		setNotes((OldNotes) => {
			// create a new empty array
			// Loop over the origin array
			// if the id matches
			// put the updated note at the beginning of the new array
			// else
			// push the old note to the end of the new array
			// return the new array
			if (OldNotes.length > 0) {
				const newArray = [];
				OldNotes.map((note) => {
					if (note.id === currentNoteId) {
						newArray.unshift({ ...note, body: text });
					} else {
						newArray.push(note);
					}
				});
				return newArray;
			}

			// imperative way of making the recent note at the top of the sidebar
			// for (let i = 0; i < OldNotes.length; i++) {
			// 	const oldNote = OldNotes[i];
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

	function deleteNote(event, noteId) {
		event.stopPropagation();

		/* 
			filter or look into notes array and if the note.id is not equal to the noteId or is not the note that we clicked on which results to true, then we want to keep it in the array. If note.id is equal to the noteId or is the note that we clicked on, then we want to remove it from the array.
		*/
		setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
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
					{currentNoteId && notes.length > 0 && (
						<Editor currentNote={currentNote} updateNote={updateNote} />
					)}
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
