import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { useFirebaseUser } from "./useState";

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

export const initUser=async()=>{
    const auth = getAuth();
    const firebaseUser=useFirebaseUser()
    firebaseUser.value=auth.currentUser
    onAuthStateChanged(auth,(user)=>{
        if(user){
            const uid=user.uid
            console.log('user state changed ',uid)
        }else{
          console.log('user state changed',user);
        }
        firebaseUser.value=user
    })
}
export const signOut=async()=>{
  const auth=getAuth()
 const result= await auth.signOut()

 return result
}