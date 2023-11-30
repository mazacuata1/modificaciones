/*  Initializa Firebase con la configuración del proyecto. Revisa la
 * configuración en tu servidor de Firebase.  */
// @ts-ignore
const firebaseConfig = {
  apiKey: "AIzaSyB7uP7odmlKLZoqkJlttP5Kbe7bnu2QksE",
  authDomain: "modificador-41f10.firebaseapp.com",
  projectId: "modificador-41f10",
  storageBucket: "modificador-41f10.appspot.com",
  messagingSenderId: "522920400477",
  appId: "1:522920400477:web:d45244eb92a96625bc5fb4",
  measurementId: "G-TEYPDQ7B50"
};


firebase.initializeApp(config)
  .then(() => {
    console.log("Firebase inicializado correctamente");
  })
  .catch((error) => {
    console.error("Error al inicializar Firebase:", error);
  });

  var db = firebase.firestore();