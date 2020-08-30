import React from 'react';
import './styles/card-small.css';
const CardSmall = ({icon, pageViews, growth, iconGrowth, styleGrowth }) => {
    const stylePercentage = `card-small-views-percentage ${ styleGrowth }`
    return (
        <>
             <div class="card-small">
                    <p class="card-small-views">Page Views</p>
                    <p class="card-small-views-icon">
                        <img src={ icon } alt="icon" />
                    </p>
                    <p class="card-small-views-number">{ pageViews }</p>
                    <p class={ stylePercentage }>
                        <span>
                            <img src={ iconGrowth } alt="icon" />
                            { growth }%
                        </span>
                    </p>
                </div>
        </>
    )
}

export default CardSmall
