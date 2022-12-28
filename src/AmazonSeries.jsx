import React from 'react';
import Cards from './Cards';
import CardsData from "./CardsData";

const AmazonSeries = () => {
    return (
        <>
           <Cards
           key={CardsData[3].id}
           name={CardsData[3].name}
           title={CardsData[3].title}
           src={CardsData[3].src}
           link={CardsData[3].link}
           />

        </>
    )
}

export default AmazonSeries;
