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
export const addNewStudentFile=async(
  sclid,
  Lastname,
  Firstname,
  Middlename,
  school,
  
  Location,
  addition,
  addition1,
  addition2,
  addtion3,
  kcpe,
  kcse,
  birthcert,
  appform
) =>{
  const db = getFirestore();
  await addDoc(collection(db, "students"), {
    sclid: sclid,
    Lastname: Lastname,
    Firstname: Firstname,
    Middlename: Middlename,
    school: school,

    status: "present",
    Location: Location,
    createdAt: Timestamp.now(),
    
    addition: addition,
    addition1: addition1,
    addition2: addition2,
    addtion3:addtion3,
    kcpe:kcpe,
    kcse:kcse,
    birthcert: birthcert,
    appform: appform
  });
}
