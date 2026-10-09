import GrandChild from "./GrandChild";
import { useMemo, useState } from "react";

function Child() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    {name: 'natia', age: 24, grade: 90},
    {name: 'davit', age: 24, grade: 50},
    {name: 'magda', age: 24, grade: 100},

  ])

  const [students, setStudents ] = useState([])


  const handleClick = () => {
    setCount((c) => c + 1);
  };



  useMemo(() =>{

    function filterUsers (){
  
     const filteredArr = users.filter((u) => u.grade > 60)
     
     setStudents(filteredArr)
    }
  
  
    filterUsers()
  }, [users])





  return (
    <>
      <GrandChild></GrandChild>

      <button onClick={handleClick}>add +1 </button>
      <h1>{count}</h1>

      {students.map((student) =>(
        <div key={student.name}>
          <h1>{student.name}</h1>
          <h2>{student.grade}</h2>
        </div>
      ))}

    </>
  );
}

export default Child;
