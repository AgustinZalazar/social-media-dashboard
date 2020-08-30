import React from "react";
import FacebookSVG from '../img/icon-facebook.svg';
import TwitterSVG from '../img/icon-twitter.svg';
import InstagramSVG from '../img/icon-instagram.svg';
import YoutubeSVG from '../img/icon-youtube.svg';
import Card from "./card";

import './styles/top-card-list.css';

const cardList = [
    {
        id: 1,
        userName: 'Agustin Zalazar',
        icon: FacebookSVG ,
        numFollowers: '1987',
        statsToday: '12',
        socialMedia: 'facebook',
    },
    {
        id: 2,
        userName: '@agustiin2498',
        icon:  TwitterSVG ,
        numFollowers: '249',
        statsToday: '12',
        socialMedia: 'twitter',
    },
    {
        id: 3,
        userName: '@agusnzalazar',
        icon: InstagramSVG ,
        numFollowers: '486',
        statsToday: '12',
        socialMedia: 'instagram',
    },
    {
        id: 4,
        userName: '@agusnzalazar',
        icon:  YoutubeSVG ,
        numFollowers: '1987',
        statsToday: '12',
        socialMedia: 'youtube',
    },
]

const TopCardsList = () => {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
            {
                cardList.map( ( cardData ) => {
                   return( <Card 
                        key = { cardData.id } 
                        {...cardData}
                    />)
                })
            }
        </div>
      </div>
    </section>
  );
};

export default TopCardsList;
