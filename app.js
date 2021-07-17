

    // TODO: Replace the following with your app's Firebase project configuration
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    const firebaseConfig = {
	  apiKey: "AIzaSyDFdwCaVDhkYPd3B890cJyt7gPN8_BEuQc",
	  authDomain: "awesome-dbt.firebaseapp.com",
	  databaseURL: "https://awesome-dbt-default-rtdb.europe-west1.firebasedatabase.app",
	  projectId: "awesome-dbt",
	  storageBucket: "awesome-dbt.appspot.com",
	  messagingSenderId: "9633155502",
	  appId: "1:9633155502:web:33b68cb0e47e78251da03f"
	};

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var db = firebase.firestore();
    console.log('testing');

	// db.collection("users").add({
	//     first: "Ada",
	//     last: "Lovelace",
	//     born: 1815
	// })
	// .then((docRef) => {
	//     console.log("Document written with ID: ", docRef.id);
	// })
	// .catch((error) => {
	//     console.error("Error adding document: ", error);
	// });

console.log('added user 1');

// Add a second document with a generated ID.
// db.collection("users").add({
//     first: "Alanertertre",
//     middle: "Mathisonetreter",
//     last: "Turingertertret",
//     born: 1912
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });
// console.log('added user 2');

// userId: "198723",
//     fullName: "Bobby McDuff",
//     nickName: "Bob",
//     overallScore: 1287,
//     streaks: 4

// userId: "154765",
//     fullName: "Phillip Donald",
//     nickName: "Phil",
//     overallScore: 987,
//     streaks: 2

// DBT users
// db.collection("users").add({
// 	userId: "276574",
//     fullName: "Haru Kuu",
//     nickName: "Haru",
//     overallScore: 387,
//     streaks: 1
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });

let newUser1 = {
	userId: "276574",
    fullName: "Haru Kuusdsfsdf",
    nickName: "Harusfdsfdsfsdf",
    overallScore: 387,
    streaks: 1
}
addUser(newUser1)

//better way to add users
// And if you only want the id it can be grabbed using descructuring. Destructuring allows you to grab any key/value-pair in the response:
	// async function addCity(newCity) {
 //      const newCityAdded = await db.collection("cities").add(newCity)
 //      console.log("the new city:", newCityAdded)
 //      console.log("it's id:", newCityAdded.id)
 //    }

	async function addUser(newUser) {
      const newUserAdded = await db.collection("users").add(newUser)
      console.log("the new user:", newUserAdded)
      console.log("their id:", newUserAdded.id)
      // return id created!
      //do i need catch?
    }





//get all itesm out of collection 
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);

    });
});

// Uncaught TypeError: firebase.database is not a function
// const dbRef = firebase.database().ref();
// const usersRef = dbRef.child('users');

	// const firebase = require("firebase");
	// // Required for side-effects
	// require("firebase/firestore");

	//load theh db






	// exercises
// 	db.collection("exercises").add({
//     exerciseId: "12345"
//     exerciseType: "checkbox"
//     moduleName:"Basic Distress Tolerance Skills"
//     level: "Basic"
//     introText: “People struggling with overwhelming emotions often use very self-destructive unhealthy methods to attempt to deal with it. Unfortunately, these are often unsuccessful and only make the problem worse. Here are some common ones, select any ones you use.”
//     [
//     questionId: 1
//     questionText: "I spend a lot of time thinking over past errors and mistakes"
//     questionId: 2
//     questionText: "I use alcohol and drugs to numb myself"
//     questionId: 3
//     questionText: "I avoid dealing with the causes of my problems, like bad relationships"
//     questionId: 4
//     questionText: "I use food to punish myself, for example by either over or undereating"
//     questionId: 5
//     questionText: "I avoid nice things, because I don’t think I deserve to feel good"
//     ]

// //arrays or objs
//     [
//     question1Text: "I spend a lot of time thinking over past errors and mistakes",
//     question2Text: "I use alcohol and drugs to numb myself",
//     question3Text: "I avoid dealing with the causes of my problems, like bad relationships",
//     question4Text: "I use food to punish myself, for example by either over or undereating",
//     question5Text: "I avoid nice things, because I don’t think I deserve to feel good"
//     ]

//     points: 5
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });