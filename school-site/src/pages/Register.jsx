import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword
} from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";

import { auth, db } from "../firebase";

export default function Register() {

  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const register = async () => {

    try {

      const allowedRef = doc(
        db,
        "allowedStudents",
        studentId
      );

      const allowedDoc =
        await getDoc(allowedRef);

      if (!allowedDoc.exists()) {
        alert("등록되지 않은 학번입니다.");
        return;
      }

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          `${studentId}@class.local`,
          password
        );

      await setDoc(
        doc(db, "users", userCredential.user.uid),
        {
          studentId,
          createdAt: Date.now()
        }
      );

      alert("회원가입 성공");

      navigate("/home");

    } catch (error) {

      console.error(error);

      alert(error.message);

    }
  };

  return (
    <div>

      <h1>회원가입</h1>

      <input
        placeholder="학번"
        value={studentId}
        onChange={(e) =>
          setStudentId(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={register}>
        가입하기
      </button>

    </div>
  );
}