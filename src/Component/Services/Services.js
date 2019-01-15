import React from 'react';
import laptop from './desktop-solid.svg';
import graphics from './laptop.svg';
import './Services.css';

const Services = ()=> {
    return(
        <div className="py-5 service d-flex justify-content-center" >
            <div class="card text-center mx-1">
                <div class="card-body">
                <img src={graphics} className="text-center" style={{width: '100%'}} alt="image"/>
                <p  className="mx-5">Web Development</p>
                </div>
            </div>
            <div class="card text-center mx-1">
                <div class="card-body">
                <img src={laptop} className="text-center" style={{width: '100%'}} alt="image"/>
                <p  className="mx-5">Graphics Design</p>
                </div>
            </div>
        </div>
    )
}
export default Services;


