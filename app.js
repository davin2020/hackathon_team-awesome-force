// config for our cloud db - Firebase project configuration
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


	// DB ADD FUNCTIONS

	async function addUser(newUser) {
      const newUserAdded = await db.collection("users").add(newUser)
      console.log("the new user:", newUserAdded)
      console.log("their id:", newUserAdded.id)
    }

	async function addExercise(newExercise) {
      const newExerciseAdded = await db.collection("exercises").add(newExercise)
      console.log("the new exercise:", newExerciseAdded)
      console.log("its id:", newExerciseAdded.id)
    }


    // DB GET FUNCTIONS

    // TODO - replace all console.log with updateElement, like in getExercise(), but based off the relevant webpage fields/tags
    // get all users from db iterate over values 
    async function getUsers() {
    	const querySnapshot = await db.collection("users").get();
      	querySnapshot.forEach((doc) => {
      		//doc.id is unique refernce that firebase generates
          // console.log(doc.id);
          let tempUser = doc.data();
          console.log(tempUser.fullName);
          console.log(tempUser.nickName);
          console.log(tempUser.overallScore);
          console.log(tempUser.streaks);
          // stringUsers = tempUser.fullName + tempUser.overallScore;
      });
      //the later user over rides the first user
      // var listUserOutput2 = document.getElementById('listUsers2').innerHTML = stringUsers;
      // return stringUsers;
    };

    // TODO - replace all console.log with updateElement, like in getExercise(), but based off the relevant webpage fields/tags
    async function getUser(userID) {
    	var docUser = await db.collection("users").doc(userID).get();
    	if (docUser.exists) {
    		// console.log(" YAY " + docUser.data());
    		let tempUser = docUser.data();
    		console.log('....YAY found user with fullname ' + tempUser.fullName);
    		return docUser.data();
    	} 
    	throw new Error("No such user doc found");
    }

  	// TODO - replace all console.log with updateElement, like in getExercise(), but based off the relevant webpage fields/tags
    async function getExercises() {
    	const querySnapshot = await db.collection("exercises").get();
    	querySnapshot.forEach((doc) => {
          // console.log('INSIDE getExercises')
          console.log(doc.id);
          let currentExercise = doc.data();
          console.log('Num ' + currentExercise.exerciseNumber);
          console.log('Type ' + currentExercise.exerciseType);
          console.log('Level ' + currentExercise.level);
          console.log('Module ' + currentExercise.moduleName);
          console.log('Points ' + currentExercise.points);
          //TODO need to iterate over this array!
          console.log('Questions ' + currentExercise.questionArray);
      });
    	//return item as obj?
    }


	// IMPORTANT TEMPLATE CODE
	async function getExercise(exerciseID) {
	    var doc = await db.collection("exercises").doc(exerciseID).get();
    	if (doc.exists) {
    		// console.log(" YAY exercise2 " + doc.data());
    		let tempEx = doc.data();
    		console.log('....YAY found Exercise2 with exerciseType ' + tempEx.exerciseType);
    		//updte ALL the relevant html tags on teh relevant web page
    		updateElement("exerciseModule", tempEx.moduleName);
    		updateElement("exerciseIntro", tempEx.introText);
    		updateElement("exerciseLevel", "Level: "+ tempEx.level);
    		updateElement("exerciseNum", "Number: "+ tempEx.exerciseNumber);
    		updateElement("exercisePoints", "Points: "+ tempEx.points);
    		//TODO need to consider exerciseType, and 
    		if (tempEx.exerciseType = "checkbox") {
    			let result = arrayToCheckbox(tempEx.questionArray, tempEx.exerciseNumber);
    			updateElement("exerciseQuestions", result);
    		}
    		else {
    			//TODO create html textboxes
    		}
    		//fyi tried to use appendChild() option but couldnt get it working, so stuck with getElementById()
    		return doc.data(); //must returns obj
    	}
    	throw new Error("No such Exercise doc found");
	}



    // HTML HELPER FUNCTIONS

    //update any element with a string - 
    function updateElement(elementId, stringContents) {
    	document.getElementById(elementId).innerHTML = stringContents;
    }

    //convert an array of items into a string, then call updateElement() using the returned string
    function arrayToString(arrayItems) {
    	let arrayAsString = "";
    	arrayItems.forEach(item =>
    		arrayAsString += item + ". ")
    	return arrayAsString;
    }

    //convert an array of items into a html checkbox, then call updateElement() using the returned string
	//issue - not sure what to use for value field of htm checkbox?
    function arrayToCheckbox(arrayItems, exerciseId) {
    	let arrayAsCheckbox = "";
    	for(let i = 0; i < arrayItems.length; i++){
    		//this is 'exericse1 question1' or ex1q1 etc - may need to adjust for ohter array items??
    		let tempName = "ex"+ exerciseId +"q" + i;
    		// console.log(tempName);
    		arrayAsCheckbox += 
    		"<label>" + arrayItems[i] 
    		+ "<input type='checkbox' id='"+tempName
    		+"' name='"+ tempName 
    		+ "' value='"+tempName+"'>" 
    		+"</label><br>";
    	}
    	return arrayAsCheckbox;
    }


    // IGNORE STUFF BELOW HERE :)

    // CREATE DATA FOR DB

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


    // ADD Exercises
	let exercise1 = {
    	exerciseType: "checkbox",
    	moduleName:"Basic Distress Tolerance Skills",
    	level: "Basic",
    	introText: "People struggling with overwhelming emotions often use very self-destructive unhealthy methods to attempt to deal with it. Unfortunately, these are often unsuccessful and only make the problem worse. Here are some common ones, select any ones you use.",
    	points: 5,
    	//array will be simpler to access & do Q numbers really matter? - other option is array of objects
    	questionArray: [
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
	    questionArray: [
			    "Example - I spend a lot of time thinking over past errors and mistakes. Consequence are - You might miss good things in the present, and regret missing them as well, compounding the problem. You might end up having depression about the past. Can you think of other consequence?",
			    "Example - I use alcohol and drugs to numb myself. Consequences are - You might get addicted, lose a lot of money, have problems at work, problems with relationships. Drugs and alcohol can also have serious health consequences.Can you think of other consequence?",
			     "Example - I avoid dealing with the causes of my problems, like bad relationships. Consequences are - You might put up with destructive relationships, or get burned-out doing work for other people. This can often lead to not having your own needs met, and depression.",
			     "Example - I use food to punish myself, for example by either over or undereating. Consequences are - You might have medical issues caused by weight gain, or issues such as bulimia or anorexia. Other consequences include feeling shame or embarrassment.",
			    "Example - I avoid nice things, because I don’t think I deserve to feel good. Consequences are - This can lead to lack of enjoyment or lack of exercise, leading to depression, shame, or even depression."
			]
	}


    // CALL THE FUNCTIONS IF NEEDED

   	// addExercise(exercise1);
   	// addExercise(exercise2);