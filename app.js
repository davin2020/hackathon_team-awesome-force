
//hd to manually add db URL !
const firebaseConfig = {
  apiKey: "AIzaSyDFdwCaVDhkYPd3B890cJyt7gPN8_BEuQc",
  authDomain: "awesome-dbt.firebaseapp.com",
  databaseURL: "https://awesome-dbt-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "awesome-dbt",
  storageBucket: "awesome-dbt.appspot.com",
  messagingSenderId: "9633155502",
  appId: "1:9633155502:web:33b68cb0e47e78251da03f"
};

firebase.initializeApp(firebaseConfig);

const dbtApp = document.getElementById("dbtExercisesApp"); // overall div for app
const dbtForm = document.getElementById("dbtFormCh1"); //the dbt input form
const dbtInput_ch1_q1 = document.getElementById("ch1_q1_costsPastErrorsAndMistakes"); //the input element /text box for chapter 1 question 1 etc
const dbtBtn = document.getElementById("submitBtn"); //the Submit button

// ISSUE its unclear how much of htis firebase code needs to be in index.hmtl vs app.js

//to store data in the exercises folder by creating a reference in database 
const db = firebase.database();
const exercisesRef = db.ref("/exercises");

// should some of this be in index.htmml instead of here ?
// let name="";
// function init() {
//   name = prompt("Please enter your name");
// }
// //is abvoe { is right place ??
// document.addEventListener('DOMContentLoaded', init);

dbtForm.addEventListener('submit', saveExercise);


function saveExercise(e) {
	//stop form from being submitted if blank
	e.preventDefault();
	const text = dbtInput_ch1_q1.value; // mmaybe use answer_ch1_q1 etc as naming convention?

	if(!text.trim()) return alert('Please type a message'); //no msg submitted
    const userAnswer = {
        name: name,
        text: text
    };

    exercisesRef.push(userAnswer);
    //clear the users pre anser, might not need this for DBT?
    dbtInput_ch1_q1.value = "";
}
