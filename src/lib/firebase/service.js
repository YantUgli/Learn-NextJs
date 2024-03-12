import {collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore'
import app from './init'

const fireStore = getFirestore(app)

export async function retrieveData(collectionName) {
    const snapshot = await getDocs(collection(fireStore, collectionName))
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
            ...doc.data()
    }))

    return data
}

export async function retrieveDataById(collectionName, id) {
    const snapshot = await getDoc(doc(fireStore, collectionName, id))
    const data = snapshot.data()
    return data
}