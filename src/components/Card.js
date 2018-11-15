import React from 'react';

// const Card = ({ name, email, picture }) => {
const Card = (props) => { 
     const { name, email, id } = props; 
    return (
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            {/* <img src={picture} alt="" width="200px"/> */}
            <img src={`https://robohash.org/${id}?200x200`} alt='robot' />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;