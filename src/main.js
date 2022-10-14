import {createApp} from 'vue'
import App from './App.vue'
import VueRouter from "./router/index"; // 追加

import "bootstrap/dist/css/bootstrap.min.css" //　追加

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
// ここは自分のキーを入力してください
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app"); // 変更
