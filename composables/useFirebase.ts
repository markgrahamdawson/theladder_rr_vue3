import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const createUser = async (email, password) => {
    const auth = getAuth();
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     // Signed in 
        //     const user = userCredential.user;
        //     // ...
        // })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    return credentials
}

export const signInUser = async (email, password) => {
    const auth = getAuth();
    const credentials = await signInWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     // Signed in 
        //     const user = userCredential.user;
        //     // ...
        // })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    return credentials
}

export const initUser = async () => {
    const auth = getAuth();
    const firebaseUser = useFirebaseUser();
    firebaseUser.value = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // console.log('Auth changed:', user)
        } else {
            // User is signed out
            // ...
            // console.log('Auth changed:', user)
        }
        firebaseUser.value = user;
    });
}

export const signOutUser = async () => {
    const auth = getAuth();
    const result = await auth.signOut();
    console.log('Sign out:', result)
}






