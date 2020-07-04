
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBFf_AYJQdMHhrjnrddNSHZeLiNmYGmzoA',
  authDomain: 'firern-2417e.firebaseapp.com',
  databaseURL: 'https://firern-2417e.firebaseio.com/',
  projectId: 'firern-2417e',
  storageBucket: 'firern-2417e.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: '1:327839796737:android:122958009f8bc7444c3a00',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };