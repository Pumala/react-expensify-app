import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC29JAsAGZuNoDsU6DC819K84uoCuPG2yg",
    authDomain: "expensify-cca29.firebaseapp.com",
    databaseURL: "https://expensify-cca29.firebaseio.com",
    projectId: "expensify-cca29",
    storageBucket: "expensify-cca29.appspot.com",
    messagingSenderId: "178920366321"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Carolyn Lam',
    stressLevel: 6,
    age: 27,
    job: {
        title: 'Software Engineer',
        company: 'THD'
    },
    location: {
        city: 'Atlanta',
        country: 'USA'
    },
    hairColor: 'black'
}).then(() => {
    console.log("Data is saved!");
}).catch((err) => {
    console.log("Encountered error: ", err);
});

firebase.database().ref('attributes').set({
    height: '5\'4',
    weight: 115
}).then(() => {
    console.log("AWESOME WORK");
}).catch((err) => {
    console.log("BIG FAIL!");
});

firebase.database().ref().update({
    hairColor: 'red',
    'location/city': 'Athens'
});

firebase.database().ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});

firebase.database().ref('expenses').push({
    description: 'Rent',
    note: 'Month of May',
    amount: 1500,
    createdAt: 500
});

firebase.database().ref('expenses').push({
    description: 'Water Bill',
    note: 'Month of May',
    amount: 40,
    createdAt: 3600
});

firebase.database().ref('expenses').push({
    description: 'Groceries',
    note: 'First Week of May',
    amount: 80,
    createdAt: 5500
});

// firebase.database().ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log("Expenses::", expenses);
// });

firebase.database().ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log("Expenses::", expenses);
});

// child_removed
firebase.database().ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_changed
firebase.database().ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());    
});

// child_added
firebase.database().ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());    
});

// firebase.database().ref('notes').push({
//     title: 'To Do',
//     body: 'Go for a hike'
// });

// firebase.database().ref('notes/-LCou5WSe7Nkk8b9oPk6').update({
//     title: 'Find a Dog',
//     body: 'Choose something furry'
// });

// firebase.database().ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log("Value:: ", val);
//     }).catch((err) => {
//         console.log("Logging error: ", err);
//     });

// firebase.database().ref().on('value', (snapshot) => {
//     const user = snapshot.val();
//     console.log("Subscription is on.");
//     // console.log("Val:", user.name + " is a " + user.job.title + " at " + user.job.company + ".");
//     console.log(`${user.name} is a ${user.job.title} at ${user.job.company}.`);
// });

// setTimeout(() => {
//     firebase.database().ref('name').set('Maury');
// }, 2500);

// // subscribe to changes
// firebase.database().ref().on('value', (snapshot) => {
//     console.log("Updated: ", snapshot.val());
// })


// setTimeout(() => {
//     firebase.database().ref('age').set(28);
// }, 3500);    

// // unsubscribe to changes
// setTimeout(() => {
//     console.log("Turned off subscription...");
//     firebase.database().ref().off();
// }, 6000);

// setTimeout(() => {
//     firebase.database().ref('age').set(29);
// }, 7500);    


// firebase.database().ref('attributes/weight').set(null);

// use remove - instead of set because it's more clear
// firebase.database().ref('attributes/weight')
//     .remove()
//     .then(() => {
//         console.log("Removed successfully!");
//     }).catch((err) => {
//         console.log("Error removing entry: ", err);
//     }); 