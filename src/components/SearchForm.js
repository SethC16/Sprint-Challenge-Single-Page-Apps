import React, { useState, useEffect } from "react";
import axios from 'axios';




export default function SearchForm(props) {
  // set state for the search names
  const [ query, setQuery ] = useState("");
  const [ characters, setCharacters] = useState([]);


  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then (response =>{
      const character = response.data.results.filter( char => 
        char.name.toLowerCase().includes(query.toLowerCase())
      );
        props.setCharacter(character);
    });
  }, [query]);


   const handleChange = e => {
    setQuery(e.target.value);
  }

  return (
    <section className="search-form">
        <form>
          <input
          onChange={handleChange}
          value={query}
          type="text"
          name="character"
          id="character"
          placeHolder="Search"
          />
        </form>        
    </section>
    );  
}
