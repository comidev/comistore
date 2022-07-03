import { initializeApp } from "firebase/app";
import { generate } from "short-uuid";
import { ref, getStorage, uploadBytesResumable } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyBdR6BueCppSKjXpqcuS7i6TnoLWQatGw0",
    authDomain: "comistore-a2082.firebaseapp.com",
    projectId: "comistore-a2082",
    storageBucket: "comistore-a2082.appspot.com",
    messagingSenderId: "614443906859",
    appId: "1:614443906859:web:25602849c55087b205776e",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// TODO: SUBE FILE A STORAGE DE FIREBASE
export const uploadFile = (file) => {
    const storageRef = ref(storage, `customers_photo/${generate()}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    return uploadTask;
};
