import { getFromFirestore } from '../../database/firebase.firestore'

function uniqueID(length = 6) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

export async function getUniqueID(length = 6, maxRetries = 10) {
  for (let i = 0; i < maxRetries; i++) {
    const randomId = uniqueID(length)
    const exists = await getFromFirestore(`links/${randomId}`)
    if (exists === 'notfound') {
      return { ok: true, link_id: randomId }
    }
  }

  return { ok: false, Error: "Couldn't generate short link, try again." }
}
