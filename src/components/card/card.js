import React from 'react';
import './styles.css'

const Card = props => {
    return (
        <div className="card-container">
            <img alt="users" src={`https://avatars.dicebear.com/api/human/${props.user.id}.svg`}/>
            <h2>{props.user.name}</h2>
            <p>{props.user.email}</p>
        </div>
    )
}

export default Card