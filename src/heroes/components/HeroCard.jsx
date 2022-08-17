import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({ id, name, image, firstAppearance, alterEgos, fullName }) => {



    return (
        <div className='col animate__animated animate__fadeIn'>
            <div className='card'>
                <div className='row no-glutters'>
                    <div className='col-4'>
                        <img
                            src={image}
                            alt={name}
                            className='card-img'
                        />
                    </div>
                    <div className='col-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{name}</h5>
                            <p className='card-text'>{alterEgos}</p>
                            {alterEgos !== fullName && <p>{fullName}</p>}
                            <p className='card-text'>
                                <small className='text-muted'>
                                    {firstAppearance}
                                </small>
                            </p>

                            <Link to={`/hero/${id}`}>More info...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
