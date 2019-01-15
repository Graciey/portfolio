import React from 'react';
import react from './react-brands.svg';
import node from './node-brands.svg';
import git from './github-brands.svg';
import css from './css3-alt-brands.svg';
import html from './html5-brands.svg';
import express from './Expressjs.png';
import boot from './boot.png';
import js from './js.svg';
import './Skills.css';
import flower from './flower.png'
import 'bootstrap-4-react';

const Skills = ()=> {
    return(
        <div className="px-4 py-3">
          <div className="home-2 px-4">
          <div className="text-center title">
            <p>Skills</p>
            <img src={flower} className="" alt="image"/>
          </div>
          <div className="home-2-1 py-3">
            <div className="grid">
                <img src={react} style={{width: '15%'}} alt="image"/>
                <div className="progress " >
                  <div className="progress-bar" role="progressbar" style={{width: "60%", color: '', backgroundColor: ''}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
                </div>
            </div>
            <div className="grid">
                <img src={js} style={{width: '15%'}} alt="image"/>
                <div className="progress " >
                  <div className="progress-bar" role="progressbar" style={{width: "60%", color: '', backgroundColor: ''}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
                </div>
            </div>
          </div>
          <div className="home-2-1 py-2">
            <div className="grid">
                <img src={node} style={{width: '15%'}} alt="image"/>
                <div className="progress " >
                  <div className="progress-bar" role="progressbar" style={{width: "60%", color: '', backgroundColor: ''}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                </div>
            </div>
            <div className="grid">
                <img src={express} style={{width: '35%'}} alt="image"/>
                {/* <p style={{fontSize: '35px', color: 'black'}}><b>express</b></p> */}
                <div className="progress " >
                  <div className="progress-bar" role="progressbar" style={{width: "60%", color: '', backgroundColor: ''}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
                </div>
            </div>
          </div>
          <div className="home-2-1 py-2">
            <div className="grid">
                <img src={boot} style={{width: '15%'}} alt="image"/>
                <div className="progress " >
                  <div className="progress-bar" role="progressbar" style={{width: "100%", color: '', backgroundColor: ''}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                </div>
            </div>
            <div className="grid">
                <img src={git} style={{width: '12%'}} alt="image"/>
                <div className="progress " >
                  <div className="progress-bar" role="progressbar" style={{width: "75%", color: '', backgroundColor: ''}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                </div>
            </div>
          </div>
          <div className="home-2-1 py-2">
            <div className="grid">
                <img src={html} style={{width: '10%'}} alt="image"/>
                <div className="progress " >
                  <div className="progress-bar" role="progressbar" style={{width: "100%", color: '', backgroundColor: ''}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                </div>
            </div>
            <div className="grid">
                <img src={css} style={{width: '10%'}} alt="image"/>
                <div className="progress " >
                  <div className="progress-bar" role="progressbar" style={{width: "100%", color: '', backgroundColor: ''}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                </div>
            </div>
          </div>
       </div>
        
        </div>
    )
}
export default Skills;