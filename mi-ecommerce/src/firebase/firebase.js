// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHjip2mjWr8O4uhw4fp5BQB8O0gI48r8g",
  authDomain: "perfumeria-olivia.firebaseapp.com",
  projectId: "perfumeria-olivia",
  storageBucket: "perfumeria-olivia.firebasestorage.app",
  messagingSenderId: "14568600013",
  appId: "1:14568600013:web:6d22b88b8eb5a8ee6a5484"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export async function getSingleProduct(id) {
    const documentRef = doc(db, 'products', id);
  
    try {
      const snapshot = await getDoc(documentRef);
      if (snapshot.exists()) {
        return snapshot.data();
      } else {
        console.log('El documento no existe!');
      }
    } catch (error) {
      console.error('Error al obtener el documento: ', error);
    }
  }




  export async function getProducts() {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      if (querySnapshot.size !== 0) {
        const productsList = querySnapshot.docs.map((document) => {
          return {
            id: document.id,
            ...document.data(),
          };
        });
        return productsList;
      } else {
        console.log('Coleccion vacía !');
      }
    } catch (error) {
      console.error('Error al obtener la coleccion: ', error);
    }
  }
  

  export async function filterProductsByCategory(category) {
    try {
      const filteredQuery = query(
        collection(db, 'products'),
        where('category', 'in', category)
      );
      const querySnapshot = await getDocs(filteredQuery);
      if (querySnapshot.size !== 0) {
        const productsList = querySnapshot.docs.map((document) => {
          return {
            id: document.id,
            ...document.data(),
          };
        });
        return productsList;
      } else {
        console.log('Coleccion vacía !');
      }
    } catch (error) {
        console.error('Error al obtener los productos por categorias: ', error);
      }
    }
    
    export async function sendOrder(order) {
        const ordersCollection = collection(db, 'orders');
        try {
          const docRef = await addDoc(ordersCollection, order);
          return docRef.id;
        } catch (error) {
          console.error('Error al agregar el documento nuevo ', error);
        }
      }