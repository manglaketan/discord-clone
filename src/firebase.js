import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDJ8Wt--wU1VGCBJLrSy2hXT1-j33_bA4o",
	authDomain: "discord-clone-86408.firebaseapp.com",
	databaseURL: "https://discord-clone-86408.firebaseio.com",
	projectId: "discord-clone-86408",
	storageBucket: "discord-clone-86408.appspot.com",
	messagingSenderId: "812085539726",
	appId: "1:812085539726:web:bbe6b6f3d2c2453471aadf",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
