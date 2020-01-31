import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function SearchForm() {
  // set state for the search names
  const [ query, setQuery ] = useState("");
 
  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/")
    .then( response => {
      const characters = response.data.results.filter( character => 
        character.name.toLowerCase().includes(query.toLowerCase())
        );

        setQuery(characters);
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
