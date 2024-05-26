import axios from "axios";
import React, { useState } from "react";

const ApiEx2 = () => {
  const [data, setData] = useState([]);
  const [search,setSearch]=useState("");
  const handleBackedData = () => {
    const searchElement=search?.trim()?.toLocaleLowerCase();
    // const basedOn=searchElement?.length>0? "s":"f"
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchElement}`)
      .then(res=> {
        const{drinks}=res.data;
        
       setData(drinks)
    })
      .catch((error) => console.log(error));
  };
  const handleData=()=>{
    handleBackedData()
  }

  return (
    <div>
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} name="search" id="search"/>
      <button onClick={handleData}>Search</button>
      {
        data.map(({strDrink,strCategory,strDrinkThumb,idDrink})=>(
           <ul key={idDrink}>
             <li>{strDrink}</li>
            <li> {strCategory}</li>
          <img src={strDrinkThumb} style={{height:"100px", width:"100px"}} alt={strDrink}></img>
            
           </ul>
        ))
      }
    </div>
  );
};

export default ApiEx2;
