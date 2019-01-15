import React, {Component} from 'react';
import './Form.css';
import flower from './flower.png';


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          message: '',
          name: ''
        }
      }
      onNameChange = (event)=> {
          this.setState({
            name: event.target.value
          })
      }

      onEmailChange  = (event)=> {
        this.setState({
          email: event.target.value
        })
    }

    onMessageChange = (event)=> {
        this.setState({
          message: event.target.value
        })
    }



    onSubmitMessage = () => {
        if(document.querySelector('#formGroupExampleInput').value === '') {
           
            document.querySelector('.name').style.display = 'block';
        }
        if(document.querySelector('#formGroupExampleInput').value === '') {
           
            document.querySelector('.email').style.display = 'block';
        }
        if(document.querySelector('#formGroupExampleInput').value === '') {
           
            document.querySelector('.message').style.display = 'block';
        }
        else {
            document.querySelector('.name').style.display = 'none';
            document.querySelector('.email').style.display = 'none';
            document.querySelector('.message').style.display = 'none';
            fetch('https://peaceful-lowlands-76413.herokuapp.com/message', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                message: this.state.message,
                name: this.state.name
          })
        })
        }
       
        //   .then(response => response.json())
        //   .catch(err => console.log(err))
      }
    


    render() {
        return(
            <div>
                 <div className="text-center title">
                     <p>Contact</p>
                     <img src={flower} className="" alt="image"/>
             </div>
             <div className="d-flex justify-content-center py-5 mx-5 word">
                 <p style={{fontSize: '1.3rem'}}>I'm focused and friendly. You can find me sharing my projects on <span ><b><a style={{color: 'red'}} href="https://github.com/Graciey" target="blank">github</a></b></span>, interesting links on <span ><b><a href="https://linkedin.com/in/grace-amoko-370038149" style={{color: '#0077B5'}} target="blank">LinkedIn</a></b></span></p>
             </div>
             <div className="d-flex justify-content-center">
             
                 <form className="py-5 px-5 rounded shadow mb-5">
                     <div className="form-group">
                         <label htmlFor="formGroupExampleInput">Name</label>
                         <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Amoko Grace"  onChange={this.onNameChange}/>
                     </div>
                     <div className="name alert alert-danger"  role="alert">
                       <p> Name must be filled</p>
                     </div>
                     <div className="form-group">
                         <label htmlFor="formGroupExampleInput2">Email</label>
                         <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="amokograce26@gmail.com" onChange={this.onEmailChange}/>
                     </div>
                     <div className="email alert alert-danger"  role="alert">
                        <p>Email must be filled</p>
                     </div>
                     <div className="form-group">
                         <label htmlFor="exampleFormControlTextarea1">Messsage</label>
                         <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="hello Grace....." wrap="off" onChange={this.onMessageChange}></textarea>
                     </div>
                     <div className="message alert alert-danger"  role="alert">
                        <p>Messsage must be filled</p>
                     </div>
                     <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.onSubmitMessage}>Submit</button>
                 </form>
             </div>
            </div>
         )
    }
}
    
export default Form;