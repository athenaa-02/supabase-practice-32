import React from "react";
import { useContext, useMemo, useState, useEffect } from "react";
import { NameContext } from "./Parent";

function GrandChild() {
  // const name = useContext(NameContext)
  const [domains, setDomains] = useState([]);
  const [filteredDomains, setFilteredDomains] = useState([])
  const [count, setCount] = useState(0)
  


  const BASE_URL = "https://catchdoms.com/api";

  useEffect(() => {
    async function getDomains() {
      try {
        const response = await fetch(`${BASE_URL}/domains`, {
          headers: {
            Authorization:
              "Bearer 624|KFWktEFUrWiDwVy9bla6BJyMFn2cpIoMp5ahkGfgf62ae758",
            Accept: "application/json",
          },
        });
        const data = await response.json();

        setDomains(data.data);
          // console.log(data.data)
      } catch (error) {
        console.log(error);
      }
    }

  
    getDomains();
  }, []);


  const handleCount = () =>{
    setCount((prev) => prev + 1)
  }



  useMemo(() => {
 setFilteredDomains(domains.filter((d) =>d.bids_count > 20)) 

  }, [domains]);

  console.log(filteredDomains)

  return <>

<button onClick={handleCount}>add {count}</button>



  {filteredDomains.map((domain) =>(
<div key={domain.id}>
  <h1>{domain.name}</h1>
  <p>{domain.purchase_url}</p>
</div>
  ))}


  
  
  </>;
}

export default GrandChild;
