import React from "react";
import IconUP from '../img/icon-up.svg';
import './styles/card.css';

const Card = ({ icon, userName, numFollowers, statsToday, socialMedia }) => {
  const cardClass = `card ${ socialMedia }`
  return (
    <article className= { cardClass }>
      <p className="card-title">
        <img src={ icon } alt=" icon " />
        { userName }
      </p>

      <p className="card-follwers">
        <span className="card-follwers-number">{ numFollowers }</span>
        <span className="card-follwers-title">FOLLOWERS</span>
      </p>
      <p className="card-today">
        <img src={ IconUP } alt="" />
        { statsToday } Today
      </p>
    </article>
  );
};

export default Card;
