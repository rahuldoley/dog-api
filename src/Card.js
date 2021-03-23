import React from 'react';
import './Card.css'

const Card = ( breedImage ) => {

    let dogImage

    if (breedImage) {
        dogImage = Object.values(breedImage).map((Image) => (
            <img className='dib br3 shadow-5' src={Image} />
        ))
    } else {
        dogImage = <h1></h1>
    }

    return (
        <div>
            {dogImage}
        </div>
    );
}

export default Card;