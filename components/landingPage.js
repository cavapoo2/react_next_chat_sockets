import styles from '../styles/style.scss'
import { Component } from 'react';
import DebugButton from './debugButton';
import Router from 'next/router';
import axios from 'axios';

const warningPass = "Password needs to 8 or more characters and only letters or numbers";
const warningName = "Name needs to 1 or more characters and only letters or numbers"
const warningBoth = warningName + "," + warningPass;

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: true,
      name: '',
      pass: '',
      email: '',
      validPass: false,
      validName: false,
      warning: '',
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.debugHandler = this.debugHandler.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangeReg = this.handleChangeReg.bind(this);
    this.checkWarnings = this.checkWarnings.bind(this);


  }
  handleToggle() {
    console.log('reg=', this.state.register);
    this.setState({ register: !this.state.register,warning:'' })
    // this.forceUpdate();
  }
  isValid(str) {
    return /^\w+$/.test(str);
  }
  validatePass(pass) {

    if (pass.length > 7 && this.isValid(pass) === true) {
      this.setState({ validPass: true });
    } else {
      this.setState({ validPass: false });
    }

  }
  validateName(name) {

    //checkname should only be letters and numbers only
    if (this.isValid(name) === true && name.length > 0) {
      this.setState({ validName: true });
    } else {
      this.setState({ validName: false });
    }
    //checkpassword - should be at least 8 characters long
  }
  checkWarnings() {
    if (this.state.validName !== true && this.state.validPass !== true) {
      this.setState({ warning: warningBoth });
      return;
    } else if (this.state.validName !== true) {
      this.setState({ warning: warningName });
      return;
    } else if (this.state.validPass !== true) {
      this.setState({ warning: warningPass });
      return;
    } else {
      this.setState({ warning: '' });
    }

  }
  handleLogin(event) {
    event.preventDefault();
    console.log('In handleLogin');
    this.checkWarnings()
    console.log('here here');


  }
  handleRegister(event) {
    event.preventDefault();
    console.log('In handleRegister');
    this.checkWarnings();
      console.log('here here');

  }
  handleChangeReg(event) {
    console.log('etv=', event.target.value);
    console.log('etn=', event.target.name);
    let name = event.target.name + "";
    if (name === "name") {
      this.validateName(event.target.value);
    } else if(name === "pass") {
      this.validatePass(event.target.value);
    }
    //always set the name whatever
    this.setState({ [name]: event.target.value })

  }
  handleChangeLogin(event) {
    console.log('etv=', event.target.value);
    console.log('etn=', event.target.name);
    let name = event.target.name + "";
    if (name === "name") {
      this.validateName(event.target.value);
    } else if(name === "pass") {
      this.validatePass(event.target.value);
    }

    this.setState({ [name]: event.target.value })


  }
  sendReg() {
    axios.post('/register', {
      data:{
        name:this.state.name,
        email:this.state.email,
        pass:this.state.pass,
      }
    })
    .then(response => {
        console.log('login resp=',response.data)
       // this.setState({ result: response.data.join("") })
      })
      .catch(error => {
        console.log(error);
      });
  }
  sendLogin() {
     axios.post('/login', {
      data:{
        name:this.state.name,
        pass:this.state.pass,
      }
    })
    .then(response => {
        console.log('login resp=',response.data)
   //     this.setState({ result: response.data.join("") })
      })
      .catch(error => {
        console.log(error);
      });
 
  }
  debugHandler() {

    console.log('state=', this.state);
  }

  render() {
    return (
      <div>

        <div className="login-page">
          <div className="form">
            {!this.state.register ?
              <form onSubmit={this.handleRegister} className="register-form">
                <input name="name" onChange={e => this.handleChangeReg(e)} value={this.state.name} type="text" placeholder="name" />
                <input required={true} name="email" onChange={e => this.handleChangeReg(e)} value={this.state.email} type="email" placeholder="email address" />
                <input name="pass" onChange={e => this.handleChangeReg(e)} value={this.state.pass} type="password" placeholder="password" />
                <button disabled={false}>create</button>
                <p className="message">Already registered? <a href='#' onClick={this.handleToggle}>Sign In</a></p>
                <p className="warning">{this.state.warning}</p>
              </form> :
              <form onSubmit={this.handleLogin} className="login-form">
                <input name="name" onChange={e => this.handleChangeLogin(e)} value={this.state.name} type="text" placeholder="username" />
                <input name="pass" onChange={e => this.handleChangeLogin(e)} value={this.state.pass} type="password" placeholder="password" />
                <button disabled={false}>login</button>
                <p className="message">Not registered? <a href='#' onClick={this.handleToggle}>Create an account</a></p>
                <p className="warning">{this.state.warning}</p>
              </form>
            }
          </div>
        </div>
        <DebugButton name="test" handler={this.debugHandler} />
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
.form .warning {
  margin: 15px 0 0;
  color: #ff0000;
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