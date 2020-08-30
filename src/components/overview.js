import React from 'react';
import CardSmall from './card-small';
import FacebookSVG from '../img/icon-facebook.svg';
import TwitterSVG from '../img/icon-twitter.svg';
import InstagramSVG from '../img/icon-instagram.svg';
import YoutubeSVG from '../img/icon-youtube.svg';
import IconGrowth from '../img/icon-up.svg';
import IconDown from '../img/icon-down.svg';

const cardSmallList = [
    {
        id: 1,
        icon: FacebookSVG,
        pageViews: '87',
        growth: 3,
        iconGrowth: IconGrowth,
        styleGrowth: '',
    },
    {
        id: 2,
        icon: FacebookSVG,
        pageViews: '52',
        growth: 2,
        iconGrowth: IconDown,
        styleGrowth: 'down'
    },
    {
        id: 3,
        icon: TwitterSVG,
        pageViews: '5462',
        growth: 3,
        iconGrowth: IconGrowth,
        styleGrowth: '',
    },
    {
        id: 4,
        icon: TwitterSVG,
        pageViews: '52k',
        growth: 3,
        iconGrowth: IconGrowth,
        styleGrowth: '',
    },
    {
        id: 5,
        icon: InstagramSVG,
        pageViews: '117',
        growth: 3,
        iconGrowth: IconGrowth,
        styleGrowth: '',
    },
    {
        id: 6,
        icon: InstagramSVG,
        pageViews: '507',
        growth: 3,
        iconGrowth: IconGrowth,
        styleGrowth: '',
    },
    {
        id: 7,
        icon: YoutubeSVG,
        pageViews: '107',
        growth: 3,
        iconGrowth: IconDown,
        styleGrowth: 'down',
    },
    {
        id: 8,
        icon: YoutubeSVG,
        pageViews: '1407',
        growth: 3,
        iconGrowth: IconDown,
        styleGrowth: 'down',
    },
]


const Overview = () => {
    return (
        <section class="overview">
        <div class="wrapper">
            <h2>Overview - Today</h2>
            <div class="grid">
                {
                    cardSmallList.map( (props) => {
                        return (
                            <CardSmall key= { props.id } {...props}/>
                        )
                    })
                }               
            </div>
        </div>
    </section>
    )
}

export default Overview
