// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

firebase.initializeApp({
  apiKey: '<API_KEY>',
  authDomain: '<AUTH_DOMAIN>',
  databaseURL: '<DATABASE_URL>',
});

const db = firebase.database();

export default db;