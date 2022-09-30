import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore, query, where
} from "firebase/firestore";

export const getAllSchools = async () => {
  const db = getFirestore();
  const schools = [];
  const schoolSnap = await getDocs(collection(db, "schools"));
  schoolSnap.forEach((doc) => {
    schools.push({ ...doc.data(), id: doc.id });
    //   console.log(doc.id, " => ", doc.data());
  });
  return schools;
};

export const getSingleSchool = async (id) => {
  const db = getFirestore();
  var school = null;

  const ref = doc(db, "schools", id);
  const schoolSnap = await getDoc(ref);
  if (schoolSnap.exists()) {
    school = schoolSnap.data();
  }
  return school;
};

export const getStudentsToSpecificSchool = async (id) => {
  const db = getFirestore();
  var school = null;
  const students = [];
  const ref = doc(db, "schools", id);
  const schoolSnap = await getDoc(ref);
  if (schoolSnap.exists()) {
    school = schoolSnap.data();
    const studentRef = collection(db, "students");
    const q = query(studentRef, where("school", "==", school.name));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      students.push({ ...doc.data(), id: doc.id });
      console.log(doc.id, " => ", doc.data());
    });
  }
  return students;
};
