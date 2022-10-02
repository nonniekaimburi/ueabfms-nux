import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  setDoc,
  Timestamp,
  updateDoc,
  where
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
export const addNewStudentFile = async (
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
) => {
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
    by:getAuth().currentUser.email,
    addition: addition,
    addition1: addition1,
    addition2: addition2,
    addtion3: addtion3,
    kcpe: kcpe,
    kcse: kcse,
    birthcert: birthcert,
    appform: appform,
  });
};

export const getAllStudentFiles = async () => {
  const db = getFirestore();
  const studentsFiles = [];
  const fileSnap = await getDocs(collection(db, "students"));
  fileSnap.forEach((doc) => {
    studentsFiles.push({ ...doc.data(), id: doc.id });
    console.log(doc.id, " => ", doc.data());
  });
  return studentsFiles;
};
export const getSingleStudent = async (id) => {
  const db = getFirestore();
  var student = null;
  const ref = doc(db, "students", id);
  const docSnap = await getDoc(ref);
  if (docSnap.exists()) {
    // Convert to City object
    student = docSnap.data();
    // Use a City instance method
  } else {
    console.log("No such document!");
  }
  return student;
};
export const newHistory = async (id, file, location, sclid, user, action) => {
  const db = getFirestore();
  await setDoc(doc(db, "history", id), {
    id: id,
    time: Timestamp.now(),
    user: user,
    location: location,
    file: file,
    sclid: sclid,
    action: action,
  });
  // await addDoc(collection(db, "history"), {
  //   id: id,
  //   time: Timestamp.now(),
  //   user: user,
  //   location: location,
  //   file: file,
  //   sclid: sclid,
  //   action: action,
  // });
};
export const getSingleHistory = async (id) => {
  const db = getFirestore();
  var history = null;

  const ref = doc(db, "history", id);
  const historySnap = await getDoc(ref);
  if (historySnap.exists()) {
    history = historySnap.data();
  }
  return history;
};

export const getHistoryForAStudent = async (id) => {
  const db = getFirestore();
  const students = [];
  const q = query(collection(db, "history"), where("id", "==", id));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    students.push({ ...doc.data(), id: doc.id });
    console.log(doc.id, " => ", doc.data());
  });
  return students;
};
export const deleteHistory = async (id) => {
  const db = getFirestore();
  await deleteDoc(doc(db, "history", id));
};
export const newReturn = async (id, file, location, sclid, user, action) => {
  const db = getFirestore();
  await setDoc(doc(db, "returns", id), {
    id: id,
    time: Timestamp.now(),
    user: user,
    location: location,
    file: file,
    sclid: sclid,
    action: action,
  });
};
export const getRecentHistory = async () => {
  const time = new Date();
  const db = getFirestore();
  const histo = [];
  const q = query(
    collection(db, "history"),
    where("time", "<=", time),
    orderBy("time", "desc"),
    limit(8)
  );
  const querySnap = await getDocs(q);
  querySnap.forEach((doc) => {
    histo.push({ ...doc.data(), id: doc.id });
  });
  return histo;
};

export const getAllUsers = async () => {
  const db = getFirestore();
  const users = [];
  const userSnap = await getDocs(collection(db, "users"));
  userSnap.forEach((doc) => {
    users.push({ ...doc.data(), id: doc.id });
    console.log(doc.id, " => ", doc.data());
  });
  return users;
};
export const updaUseDoc = async (id, admin) => {
  const db = getFirestore();
  const userRef = doc(db, "users", id);
  await updateDoc(userRef, {
    admin: admin,
  });
};
export const restrictUser = async (id, email) => {
  const db = getFirestore();
  await setDoc(doc(db, "banned", id), {
    time: Timestamp.now(),
    email: email,
  });
};

export const getSpecificAdminHist=async(id)=>{
  const students=[]
  const db=getFirestore()
  const userRef = doc(db, "users", id);
  const userSnap = await getDoc(userRef);
  if(userSnap.exists()){
    const user=userSnap.data()
    const studeRef = collection(db, "history");
    const q = query(studeRef, where("user", "==", user.email));
    const querySnap = await getDocs(q);
    querySnap.forEach((doc)=>{
      students.push({...doc.data(),id:doc.id})
    })
  }

return students
}