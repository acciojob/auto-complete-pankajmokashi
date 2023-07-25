
import React, { useEffect, useState } from "react";
import './../styles/App.css'

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]

const App = () => {

  let [searched, setSearched] = useState("")
  let [filteredData, setFilteredData] = useState(fruits)

  useEffect(() =>{
    searched == "" ? setFilteredData(fruits) :
    (setFilteredData(fruits.filter((ele) => ele.includes(searched))))
  }, [searched])
  

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Search Item</h1>
        <input type="text" onChange={(e) => setSearched(e.target.value)} value={searched}></input>
        <ul>
          {
            filteredData.length > 0 &&
            filteredData.map(item => (
              <li>{item}</li>
            ))
          }
        </ul>
    </div>
  )
}

export default App
