import React, { useState } from 'react'
import { Api } from './Api'
import './App.css'
function Search() {
  const [quer, setQuer] = useState("")
  const [start, setStart] = useState("red")
  const [showform, setShowform] = useState(false)
  console.log(showform);
  return (
    <>
      {
        showform ? (<div className="form">
          form data
          <button onClick={()=> setShowform(false)} >go to back</button>
        </div>) : (<div className="app">
          <div className="boxstart">
            <input type="text" placeholder='Search' className="Search" onChange={e => setQuer(e.target.value)} />
          </div>
          <ul className="list">
            {Api.filter(api => api.name.toLocaleLowerCase().includes(quer)).map(api => (
              <div className="box">
                <img src={api.img} alt="" className="image" />
                <li key={api.id} className="listItem">{api.name}</li>
                <div className="li">{api.price}$</div>
                <button className="btn" onClick={(()=> setShowform(!showform))}>
                  ClicK
                </button>
              </div>
            ))}
          </ul>
        </div>)
      }
    </>
  )
};
export default Search

