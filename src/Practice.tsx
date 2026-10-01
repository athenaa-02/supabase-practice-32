import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "./supabase/supabaseClient";
import { PostgrestError } from "@supabase/supabase-js";

interface PersonType {
  id?: number;
  score: number;
  username: string;
}

function Practice() {
  const [people, setPerson] = useState<PersonType[] >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<PostgrestError | undefined>();

  const { register, handleSubmit, reset } = useForm<PersonType>();

  async function getPerson() {
    try {
      const { data, error } = await supabase.from("person").select("*");

      if (error) {
        setError(error);
      }
      if (data) {
        setPerson(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const SubmitFunction = (data: PersonType) => {
    console.log(data);

    reset();
    sendPerson(data);
    getPerson();
  };

  useEffect(() => {
    setLoading(true);

    getPerson();
  }, []);

  async function sendPerson(d: PersonType) {
    console.log(d);
    try {
      const { data, error } = await supabase.from("person").insert(d).select();
      if (error) {
        setError(error);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deletePerson(id:number | undefined) {
    try {

      const {data, error} = await supabase.from('person').delete().eq('id', id)

    } catch (error) {
      console.log(error);
    }
  }

 

  return (
    <>
      {error && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "white",
            height: "100vh",
          }}
        >
          <p>{error.message}</p>
        </div>
      )}
      <form onSubmit={handleSubmit(SubmitFunction)}>
        <div>
          <label htmlFor="name">username</label>
          <input type="text" id="name" {...register("username")} />
        </div>
        <div>
          <label htmlFor="score">score:</label>
          <input type="number" {...register("score")} />
        </div>
        <button type="submit">submit</button>
      </form>

      {loading && <p>please wait ...</p>}

      {people &&
        people.map((person) => (
          <div   style={{ border: "1px solid black", padding:'10px', gap:'10px', width: "120px", display:'flex' }}>
            <button onClick={() =>{
              deletePerson(person.id)
              getPerson()
              window.location.href = '/'
              }}>x</button>
          <div
            key={person.id}
          
          >
            <h3 style={{marginTop:'5px'}}>{person.username}</h3>
            <span>score: {person.score}</span>
          </div>
          </div>
        ))}
    </>
  );
}

export default Practice;
