import { db } from "../firebase";

export default function Home() {

  console.log(db);

  return (
    <div>
      <h1>Firebase 연결 성공</h1>
    </div>
  );
}