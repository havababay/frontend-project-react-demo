import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "./config";

export async function addStudent(student) {
  return addDoc(collection(firestore, "students"), student);
}

export async function listStudents() {
  const studentsSnapshot = await getDocs(collection(firestore, "students"));

  return studentsSnapshot.docs.map((doc) => doc.data());
}
