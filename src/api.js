import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc, 
    getDoc, 
    query, 
    where
 } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAhW94VTO7tMmNmcXOjxrmo8u7NT8Rt32g",
  authDomain: "vanlife-e58e2.firebaseapp.com",
  projectId: "vanlife-e58e2",
  storageBucket: "vanlife-e58e2.firebasestorage.app",
  messagingSenderId: "291026055975",
  appId: "1:291026055975:web:6a0750e5550d2b3f262f02"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const vansCollectionRef = collection(db, "van")
const userCollectionRef = collection(db, "user")

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function getVan(id) {
    const docRef = doc(db, "van", id)
    const querySnapshot = await getDoc(docRef)
    const data = querySnapshot.data()
    return data
}

export async function getHostVans(hostId) {
    const q = query(vansCollectionRef, where("hostId", "==", hostId))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))

    return dataArr
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}