import React, {useState, useEffect, Component} from 'react';
import './App.css';
import SearchBox from './SearchBox';
import Card from './Card';

function App() {

  const [breed, setbreed] = useState([]);
  const [breedImage, setbreedImage] = useState('');
  const [breedName, setbreedName] = useState('');

  const handleTextChange = (e) => {
    setbreedName(e.target.value);
  }

      useEffect(() => {
        const getBreeds = async () => {
          const response = await fetch('https://dog.ceo/api/breeds/list/all');
          const data = await response.json();
          setbreed(Object.keys(data.message));
        }
        getBreeds();
      }, []);

      useEffect(() => {
        const getBreedsImage = async (breedName) => {
          const response = await fetch(`https://dog.ceo/api/breed/${breedName}/images/random`);
          const data = await response.json();
          setbreedImage(data.message);
        }
        getBreedsImage(breedName);
      }, [breedName]);
  return (
    <div className="App">
      <SearchBox breed={breed} onInputChange={handleTextChange}/>
      <Card breedImage={breedImage}/>
    </div>
  );
}

export default App;
