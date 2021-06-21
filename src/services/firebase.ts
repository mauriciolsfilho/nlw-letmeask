import firebase from "firebase";

import 'firebase/auth';
import 'firebase/database';

/**
 * Objeto de configuração e conexão com firebase
 * @var fbaseConfig
 */
const fbaseConfig = {
  appId: process.env.REACT_APP_APP_ID,
  apiKey: process.env.REACT_APP_API_KEY,
  projectId: process.env.REACT_APP_PROJECT_ID,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MES_SENDER_ID,
};

firebase.initializeApp(fbaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();