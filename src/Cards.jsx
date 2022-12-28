import React from 'react';

const Cards = ({ ukey, name, src, title, link }) => {
    return (
        <>
            <div className="d-flex mt-5 p-5 flex-wrap-lg-0 flex-wrap justify-content-around">
                <div className="card p-2 mx-2 my-2" key={ukey}>
                    <img src={src} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text lead">{title}</p>
                        <h5 className="card-title">{name}</h5>
                        <a href={link} className="btn btn-dark my-3">Watch Now</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards;
