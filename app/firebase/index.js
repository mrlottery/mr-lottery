import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyC3rjusS353yoTTkqw_uspMTkJzSfTV9Fc",
    authDomain: "mrlottery-62b98.firebaseapp.com",
    databaseURL: "https://mrlottery-62b98.firebaseio.com",
    projectId: "mrlottery-62b98",
    storageBucket: "mrlottery-62b98.appspot.com",
    messagingSenderId: "1044126918879",
    appId: "1:1044126918879:web:96edc565343d3db6abe16a"
};

firebase.initializeApp(config);

export const database = firebase.database().ref('posts/');
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
