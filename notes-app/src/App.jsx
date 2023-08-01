import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import { data } from "./data";
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
		// setNotes
		// this code not rearrange the notes in the sidebar
		// setNotes((oldNotes) =>
		// 	oldNotes.map((oldNote) => {
		// 		return oldNote.id === currentNoteId
		// 			? { ...oldNote, body: text }
		// 			: oldNote;
		// 	})
		// );
	}

	function findCurrentNote() {
		return (
			notes.find((note) => {
				return note.id === currentNoteId;
			}) || notes[0]
		);
	}

	return (
		<main>
			{notes.length > 0 ? (
				<Split sizes={[30, 70]} direction="horizontal" className="split">
					<Sidebar
						notes={notes}
						currentNote={findCurrentNote()}
						setCurrentNoteId={setCurrentNoteId}
						newNote={createNewNote}
					/>
					{currentNoteId && notes.length > 0 && (
						<Editor currentNote={findCurrentNote()} updateNote={updateNote} />
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
