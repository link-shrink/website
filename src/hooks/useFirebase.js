import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { firestoreLinkshrink } from '../database/firebase.init'
import { getFromFirestore } from '../database/firebase.firestore'

export function useGetFirestore(path) {
  const [data, setData] = useState('loading')

  useEffect(() => {
    async function loadData() {
      const dbData = await getFromFirestore(path)
      setData(dbData)
    }

    loadData()
  }, [path])

  return [data]
}

export function useGetFirestoreRealTime(path) {
  const [data, setData] = useState('loading')

  useEffect(() => {
    const [pathCollection, pathDocument] = path.split('/')
    const docRef = doc(firestoreLinkshrink, pathCollection, pathDocument)

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) setData(docSnap.data())
      else setData('notfound')
    })

    return () => unsubscribe()
  }, [path])

  return [data]
}
