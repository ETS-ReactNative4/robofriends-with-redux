import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
 /*   if (true) {
        throw new Error('NOOOOOO');
    }*/
    return (
        <div>
        {
            robots.map((robofriend, index) => {
                return (
                    <Card 
                    key={index} 
                    id={robofriend.id} 
                    picture={robofriend.picture} 
                    name={robofriend.name} 
                    email={robofriend.email} 
                    />
                );   
            })
        }
        </div>
    );
};

export default Cardlist;