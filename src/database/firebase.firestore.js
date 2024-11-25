import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  setDoc,
} from 'firebase/firestore'
import { firestoreLinkshrink } from './firebase.init'

export async function saveToFirestore(path, data) {
  const pathCollection = path.split('/')[0]
  const pathDocument = path.split('/')[1]

  const docRef = doc(firestoreLinkshrink, pathCollection, pathDocument)
  await setDoc(docRef, data)

  return 'saved'
}

export async function getFromFirestore(path) {
  const pathCollection = path.split('/')[0]
  const pathDocument = path.split('/')[1]

  const docRef = doc(firestoreLinkshrink, pathCollection, pathDocument)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) return docSnap.data()
  else return 'notfound'
}

export async function getFromFirestoreWhere(col, key, value) {
  const q = query(collection(firestoreLinkshrink, col), where(key, '==', value))
  const querySnapshot = await getDocs(q)

  if (!querySnapshot.empty) {
    const doc = querySnapshot.docs[0]
    return doc.data()
  }

  return null
}
