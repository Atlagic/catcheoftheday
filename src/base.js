import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCmzqIPnhSRMRzJYohuUyb093V3MTu5kBc",
    authDomain: "catch-of-the-day-atlagic.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-atlagic.firebaseio.com",
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp }

export default base;
