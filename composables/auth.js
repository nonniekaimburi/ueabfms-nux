import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

export const signIn = async () => {
  const auth = getAuth();
  const db = getFirestore();
  const cred = await signInWithPopup(auth, new GoogleAuthProvider());
  if (cred.user.email.endsWith("@ueab.ac.ke")) {
    
    const user = cred.user;
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(doc(db, "users", cred.user.uid), {
        admin: false,
        email: cred.user.email,
        isSuperAdmin: false,
        name: cred.user.displayName,
      });
    }
  }
  return cred
};
