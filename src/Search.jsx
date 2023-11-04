import React, { useState } from 'react'
import { Api } from './Api'
import './App.css'
import Contant from './Contant'
function Search() {
  const [quer, setQuer] = useState("")
  return (
    <div>
      <div className="app">
        <div className="boxstart">
        <input type="text"  placeholder='Search' className="Search" onChange={e => setQuer(e.target.value)} />
        </div>
        <ul className="list">
          {Api.filter(api => api.name.toLocaleLowerCase().includes(quer)).map(api => ( 
            <div className="box">
              <img src={api.img} alt="" className="image" />
              <li key={api.id} className="listItem">{api.name}</li>
              <div className="li">{api.price}$</div>
              <button className="btn"><a href="#contant">Click</a></button>
            </div>
          ))}
        </ul>
      </div>
      <Contant/>
    </div>
    
  )
};

export default Search