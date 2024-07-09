// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARxgy62Ntca86Ah9imeJcBG7OZvSwKBZM",
  authDomain: "digital-products-75366.firebaseapp.com",
  projectId: "digital-products-75366",
  storageBucket: "digital-products-75366.appspot.com",
  messagingSenderId: "268786752870",
  appId: "1:268786752870:web:f86e82198fb7349412bca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);





const email = document.getElementById('name').value;
const password = document.getElementById('password').value;

//Submit button 

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event){
  event.preventDefault()
  alert(5)
})