// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDASpfUNoQFdYVcourGmDDBFlywANgQJ6s",
    authDomain: "scrimba-react-notes-6819a.firebaseapp.com",
    projectId: "scrimba-react-notes-6819a",
    storageBucket: "scrimba-react-notes-6819a.appspot.com",
    messagingSenderId: "1048211763482",
    appId: "1:1048211763482:web:287cd032bd73e7bdd67ca3"
};

// Initialize Firebase
// the initializeApp() contains the firebaseConfig object 
const app = initializeApp(firebaseConfig);

// getFirestore() is a function that gets a reference to the firestore database
const db = getFirestore(app)

/* 

the collection() function gets a reference to the notes collection in the firestore database. 

The notesCollection variable is assigned a reference to the notes collection in the database, which can be used to read and write data to the collection.

In the context of Firestore, a collection is a group of documents that share a common structure. Each document in a collection represents a single record and contains a set of key-value pairs. Collections are used to organize related data and make it easier to query and manage.

In the provided code snippet, notesCollection is a reference to a collection of documents in the Firestore database. The collection() method is used to create a reference to the notes collection in the database.
*/
const notesCollection = collection(db, "notes") 