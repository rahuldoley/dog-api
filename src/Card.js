import React from 'react';
import './Card.css'

const Card = ( breedImage ) => {

    return (
        <div>
            {Object.values(breedImage).map((Image) => (
                <img className='dib br3 shadow-5' src={Image} />
            ))}
        </div>
    );
}

export default Card;