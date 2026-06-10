import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase";

export default function Login() {

  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {

    try {

      await signInWithEmailAndPassword(
        auth,
        `${studentId}@class.local`,
        password
      );

      navigate("/home");

    } catch (error) {

      alert("로그인 실패");

    }

  };

  return (
    <div>

      <h1>학급 커뮤니티</h1>

      <input
        placeholder="학번"
        value={studentId}
        onChange={(e)=>
          setStudentId(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e)=>
          setPassword(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={login}>
        로그인
      </button>

    </div>
  );
}