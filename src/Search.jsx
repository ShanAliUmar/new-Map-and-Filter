import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './Api.js';
import Api from './Api.js'

const Search = () => {
  const [quer, setQuer] = useState('');

  return (
      <div>
        
        <div className="app">
          <div className="boxstart">
            <input
              type="text"
              placeholder="Search"
              className="Search"
              onChange={(e) => setQuer(e.target.value)}
            />
          </div>
          <ul className="list">
            {Api.filter((api) => api.name.toLowerCase().includes(quer)).map((api) => (
              <div className="box" key={api.id}>
                <img src={api.img} alt="" className="image" />
                <li className="listItem">{api.name}</li>
                <div className="li">{api.price}$</div>
                <button className="btn">
                  <a href={`/product/${api.id}`}>Click</a>
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    )
}
export default Search