import {
  getFromFirestoreWhere,
  saveToFirestore,
} from '../../database/firebase.firestore'
import { getUniqueID } from './getUniqueID'

export async function getShortLinkID(link) {
  const dataInDB = await getFromFirestoreWhere('links', 'original_link', link)
  if (dataInDB) {
    return { ok: true, data: dataInDB }
  }

  const linkIDData = await getUniqueID()
  if (!linkIDData.ok) {
    return linkIDData
  }

  const data = {
    link_id: linkIDData.link_id,
    original_link: link,
  }

  await saveToFirestore(`links/${linkIDData.link_id}`, data)
  return { ok: true, data }
}
