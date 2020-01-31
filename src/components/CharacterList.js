import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ character, setCharacter ] = useState([]);
  
  
  

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then ( response => {
      console.log(response)
      setCharacter(response.data.results);
      
    })
    .catch ( error => {
      console.log('Nothing to Display!', error);
    });
  }, []);

 

  return (
    <section className="character-list">
      <Link className="links" to={'/'}>Home</Link>
      <SearchForm setCharacter={setCharacter}/>
      <div className="grid-view">
      {character.map(characters => {
        return (
       <CharacterCard
        key={characters.id}
        name={characters.name}
        status={characters.status}
        species={characters.species}
        gender={characters.gender}
        image={characters.image}
        />
        )
      })}
      </div>
    </section>
  );
}
