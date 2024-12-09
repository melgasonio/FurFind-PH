import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBITpVQ17i36iGpxNxQ0UrLMGmU4h01d5A",
  authDomain: "furfind-ph.firebaseapp.com",
  projectId: "furfind-ph",
  storageBucket: "furfind-ph.firebasestorage.app",
  messagingSenderId: "202041981013",
  appId: "1:202041981013:web:34045fdb5b5cf4c7f9fcdc",
  measurementId: "G-6ZFYQ5WCRJ"
}

const app = initializeApp(firebaseConfig)

export { app }