

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





	// ADD new user usig asyn await
// let newUser1 = {
// 	userId: "276574",
//     fullName: "Haru Kuusdsfsdf",
//     nickName: "Harusfdsfdsfsdf",
//     overallScore: 387,
//     streaks: 1
// }
// addUser(newUser1)




	// ADD exercises
	let exercise1 = {
    	exerciseType: "checkbox",
    	moduleName:"Basic Distress Tolerance Skills",
    	level: "Basic",
    	introText: "People struggling with overwhelming emotions often use very self-destructive unhealthy methods to attempt to deal with it. Unfortunately, these are often unsuccessful and only make the problem worse. Here are some common ones, select any ones you use.",
    	points: 5,
    	//will be simpler to access & do Q numbers really matter?
    	questionArray: 
    	[
		    "I spend a lot of time thinking over past errors and mistakes",
		    "I use alcohol and drugs to numb myself",
		    "I avoid dealing with the causes of my problems, like bad relationships",
		    "I use food to punish myself, for example by either over or undereating",
		    "I avoid nice things, because I don’t think I deserve to feel good"
		]
	}

let exercise2 = {
	exerciseType: "textbox",
    moduleName: "Basic Distress Tolerance Skills",
    exerciseNumber: 2,
    level: "Basic",
    introText: "All those strategies are simply pathways into deeper pain, offering only temporary relief. Note the strategies you use and their costs - and add any costs that you can think of on your own.",
        points: 10,
    questionArray: 
    	[
		    "Example - I spend a lot of time thinking over past errors and mistakes. Consequence are - You might miss good things in the present, and regret missing them as well, compounding the problem. You might end up having depression about the past. Can you think of other consequence?",
		    "Example - I use alcohol and drugs to numb myself. Consequences are - You might get addicted, lose a lot of money, have problems at work, problems with relationships. Drugs and alcohol can also have serious health consequences.Can you think of other consequence?",
		     "Example - I avoid dealing with the causes of my problems, like bad relationships. Consequences are - You might put up with destructive relationships, or get burned-out doing work for other people. This can often lead to not having your own needs met, and depression.",
		     "Example - I use food to punish myself, for example by either over or undereating. Consequences are - You might have medical issues caused by weight gain, or issues such as bulimia or anorexia. Other consequences include feeling shame or embarrassment.",
		    "Example - I avoid nice things, because I don’t think I deserve to feel good. Consequences are - This can lead to lack of enjoyment or lack of exercise, leading to depression, shame, or even depression."
		]
	}
	
    //array of objs?
    // questionId: 2
    // questionText: "I use alcohol and drugs to numb myself"


	// addExercise(exercise2);










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
      //do i need catch?
    }

	async function addExercise(newExercise) {
      const newExerciseAdded = await db.collection("exercises").add(newExercise)
      console.log("the new exercise:", newExerciseAdded)
      console.log("its id:", newExerciseAdded.id)
      //do i need catch?
    }

    

    async function getUser(userID) {
    	// var x = await db.collection("users").doc("userID");

    	// var y = x.get();
    	// console.log(y);
    	// console.log(y.data);

    	// var docRef = await db.collection("users").doc("userID").get();
    	// console.log("docRef:", docRef);
    	
    	// // let tempUser = docRef.get();
    	// let tempUser = docRef.data();
    	// console.log(" tempUser " + tempUser);

    	var zzz = await db.collection("users").doc(userID).get();
    	if (zzz.exists) {
    		console.log(" YAY " + zzz.data());
    		let tempUser = zzz.data();
    		//this works but how to get the user object out of this func and to the console?
    		console.log('....fullname ' + tempUser.fullName);
    		return zzz.data();
    	} 
    	throw new Error("no such doc");

    	// zzz.get("nickname")
	    // const querySnapshot = await db.collection("users").doc(userID).get();
	    // console.log("Document data:", doc.data());

	    
      // const newExerciseAdded = await db.collection("exercises").add(newExercise)
      // console.log("the new exercise:", newExerciseAdded)
      // console.log("its id:", newExerciseAdded.id)
      //do i need catch?
    }

async function getExercise(exerciseID) {
    var doc = await db.collection("exercises").doc(exerciseID).get();
    	if (doc.exists) {
    		console.log(" YAY exercise " + doc.data());
    		let tempEx = doc.data();
    		//this works but how to get the user object out of this func and to the console? - maybe construct an objs and pass that back ? check knowsys site!
    		console.log('....exerciseType ' + tempEx.exerciseType);
    		return doc.data();
    	} 
    	throw new Error("no such doc");
}


//get all itesm out of collection 
// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);

//     });
// });

// Uncaught TypeError: firebase.database is not a function
// const dbRef = firebase.database().ref();
// const usersRef = dbRef.child('users');

	// const firebase = require("firebase");
	// // Required for side-effects
	// require("firebase/firestore");

	//load theh db




