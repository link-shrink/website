import { useEffect, useState } from 'react'
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
