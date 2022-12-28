import React from 'react';
import NetflixSeries from './NetflixSeries';
import AmazonSeries from "./AmazonSeries";

const App = () => {

    const favSeries = "netflix";
    
    return (
        <>
            <div className="bg-light text-secondary px-4 py-2 text-center">
                <div className="py-2">
                    <h1 className="display-5 fw-bold text-dark">Top Trend Netflix Movies</h1>
                </div>
            </div>
            {
                (favSeries === "netflix") ? <NetflixSeries/> : <AmazonSeries/>  
            }

           
        </>
    )


}
export default App;
