
import {
    collection, getDocs,
    getFirestore
} from "firebase/firestore";

export const getAllSchools=async()=> {
    const db = getFirestore();
    const schools = [];
    const schoolSnap = await getDocs(collection(db, "schools"));
    schoolSnap.forEach((doc) => {
      schools.push({ ...doc.data(), id: doc.id });
    //   console.log(doc.id, " => ", doc.data());
    });
    return schools;
  }