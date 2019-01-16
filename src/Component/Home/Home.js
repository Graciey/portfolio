import React,{Component} from 'react';

import './Home.css';


var i = 0;
const txt = `I'm Grace Amoko, A MernStack developer & Graphics designer based in Lagos, Nigeria.`;
var speed = 50;

 class Home extends Component {
   typeWriter = ()=> {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(this.typeWriter, speed)
    }
  }
  componentDidMount() {
    this.typeWriter()
  }
   render() {

     return(
      <div className="px-3 py-4 home" id="home">
        <div className="home-1 shadow">
         <div className="home-1-1 px-3">
          <p id="demo"></p>
         </div>
        </div>
       
     </div>
     
     )
   }
 } 

export default Home;