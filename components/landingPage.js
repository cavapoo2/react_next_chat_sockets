import styles from '../styles/style.scss'
import { Component } from 'react';
import DebugButton from './debugButton';
import Router from 'next/router';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            register:true,
            name:'',
            pass:'',
            email:'',
            validPass:false,
            validName:false,
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.debugHandler = this.debugHandler.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangeReg = this.handleChangeReg.bind(this);


    }
    handleToggle(){
        console.log('reg=',this.state.register);
        this.setState({register:!this.state.register})
       // this.forceUpdate();
    }
    isValid(str){
      return /^\w+$/.test(str);
    }
    validatePass(pass) {

      if (pass > 7 && isValid(pass) === true){
        this.setState({validPass:true});
        return true;
      }else {
        this.setState({validPass:false});
        return false;
      }

    }
    validateName(name) {
      
      //checkname should only be letters and numbers only
      if (isValid(name) === true && name > 0){
        this.setState({validName:true});
        return true;
      }else {
        this.setState({validName:false});
        return false;
      }
      //checkpassword - should be at least 8 characters long
    }
    handleLogin(event){
      event.preventDefault();

    }
    handleRegister(event){
      event.preventDefault();
    }
    handleChangeReg(event){
      console.log('etv=',event.target.value);
      console.log('etn=',event.target.name);
      let name = event.target.name + "";
      this.validateReg(name);
      this.setState({[name]: event.target.value})

    }
    handleChangeLogin(event){
      console.log('etv=',event.target.value);
      console.log('etn=',event.target.name);
      let name = event.target.name;
      this.setState({[name]:event.target.value})


    }
    debugHandler(){

        console.log('state=',this.state);
    }

    render() {
        return (
            <div>
            
                <div className="login-page">
                    <div className="form">
                    {!this.state.register ?
                        <form onSubmit={this.handleRegister} className="register-form">
                            <input name="name" onChange={e => this.handleChangeReg(e)} value={this.state.name} type="text" placeholder="name" />
                            <input name="email" onChange={e => this.handleChangeReg(e)} value={this.state.email} type="email" placeholder="email address" />
                            <input name="pass" onChange={e => this.handleChangeReg(e)} value={this.state.pass} type="password" placeholder="password" />
                            <button disabled={!this.state.valid}>create</button>
                            <p className="message">Already registered? <a href='#' onClick={this.handleToggle}>Sign In</a></p>
                        </form> :
                        <form onSubmit={this.handleLogin} className="login-form">
                            <input name="name" onChange={e => this.handleChangeLogin(e)} value={this.state.name} type="text" placeholder="username" />
                            <input name="pass" onChange={e => this.handleChangeLogin(e)} value={this.state.pass} type="password" placeholder="password" />
                            <button disabled={!this.state.valid}>login</button>
                            <p className="message">Not registered? <a href='#' onClick={this.handleToggle}>Create an account</a></p>
                        </form>
                       }
                    </div>
                </div>
                <DebugButton name="test" handler={this.debugHandler}/>
                <style jsx>{`
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
/*
.form .register-form {
  display: none;
}*/
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}
body {
  background: #76b852; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8DC26F);
  background: -moz-linear-gradient(right, #76b852, #8DC26F);
  background: -o-linear-gradient(right, #76b852, #8DC26F);
  background: linear-gradient(to left, #76b852, #8DC26F);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;      
}
`}</style>
            </div>
        
        )
}
}
export default LandingPage;