import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
   /* const cardsArray = robots.map(robofriend => {
        return (
            <Card id={robofriend.id} picture={robofriend.picture} name={robofriend.name} email={robofriend.email} />
        ); */
    // OR
    const cardsArray = robots.map((robofriend, index) => {
        return (
            <Card key={index} id={robots[index].id} picture={robots[index].picture} name={robots[index].name} email={robots[index].email} />
        );
    }
    );
    return (
        <div>
        {cardsArray}
        </div>
    );
}

   /* return (   
        <>
            <Card id={robots[0].id} picture={robots[0].picture} name={robots[0].name} email={robots[0].email} />
            <Card id={robots[1].id} picture={robots[1].picture} name={robots[1].name} email={robots[1].email} />
            <Card id={robots[2].id} picture={robots[2].picture} name={robots[2].name} email={robots[2].email} />
            <Card id={robots[3].id} picture={robots[3].picture} name={robots[3].name} email={robots[3].email} />
            <Card id={robots[4].id} picture={robots[4].picture} name={robots[4].name} email={robots[4].email} />
            <Card id={robots[5].id} picture={robots[5].picture} name={robots[5].name} email={robots[5].email} />
        </>
        
    );
}*/

export default Cardlist;