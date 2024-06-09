"use server";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  getDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTXH3OW1EUbee8yXt04YkC7zvTWfCt1Ts",
  authDomain: "myblog-aee44.firebaseapp.com",
  databaseURL: "https://myblog-aee44-default-rtdb.firebaseio.com",
  projectId: "myblog-aee44",
  storageBucket: "myblog-aee44.appspot.com",
  messagingSenderId: "851291435958",
  appId: "1:851291435958:web:b7767c42b275579bf74717",
  measurementId: "G-D7D8PWJ936",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const LeftData = async (id) => {
  try {
    const querySnapshot = await getDocs(collection(db, "LeftData"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (id) {
      // If id is provided, filter the data array to find the item with the matching id
      return data.find((item) => item.id === id);
    } else {
      // If no id is provided, return the entire data array
      return data;
    }
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
