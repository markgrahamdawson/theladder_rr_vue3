import { getFirestore, getDocs, where, collection, query } from "firebase/firestore";

export const getProducts123 = async () => {
    const db = getFirestore();
    const productsRef = collection(db, "products");
    const productsQuery = query(productsRef, where("active", "==", true));
    const productsQuerySnap = await getDocs(productsQuery);

    productsQuerySnap.forEach(async (doc) => {
        const pricesRef = collection(db, "products", doc.id, "prices");
        const pricesQuerySnap = await getDocs(pricesRef);

        const products = []
        products.push({
            id: doc.id,
            ...doc.data(),
            prices: pricesQuerySnap.docs.map((price) => {
                return {
                    id: price.id,
                    ...price.data(),
                }
            })
        })
    })

}






