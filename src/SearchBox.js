import React from 'react'

function SeacrhBox({ breed, onInputChange }) {

    return (
        <div className='pa2'>
            <select className="pa3" onChange={onInputChange}>
                <option>Choose a dog breed</option>
                {breed.map((breeds) => (
                    <option>{breeds}</option>
                ))}
            </select>
        </div>
    )
}

export default SeacrhBox;
