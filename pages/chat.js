import Layout from '../components/MyLayout';
import Header2 from '../components/Header2';
import DebugButton from '../components/debugButton';
import React, { Component } from 'react';
import axios from 'axios'

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      valid: false,
      data: [],
      result: '',
      name: this.props.name,
    };
    this.handleDebug = this.handleDebug.bind(this);
    console.log('const=', this.state.name)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.wipeLocalState = this.wipeLocalState.bind(this);
    //   this.handleClear = this.handleClear.bind(this);

  }


  static async getInitialProps({ query }) {
    //  const response = await fetch('http://localhost:3000/messages/chat1')
    //const messages = await response.json()
    //return { messages }
    let name = query.name
    return { name }
  }

  validateInput(value) {

  }
  handleDebug() {
    console.log('name=', this.state);
  }
  wipeLocalState() {
    localStorage.clear();
  }
  handleChange(event) {
    //need to validate input
    this.validateInput(event.target.value)
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  handleClear(event) {
  }
  componentDidUpdate() {
    console.log('didupdate');
    //    console.log(this.state);
    localStorage.setItem('_refresh', JSON.stringify(this.state));
  }
  componentDidMount() {
    console.log('didmount');
    //window.localStorage.removeItem('name');
    const data = localStorage.getItem('_refresh');
    if (data) {
      console.log('dataR=', data);
      let clone = JSON.parse(data);
      if (this.state.name !== "") {
        clone.name = this.state.name;
      }
      this.setState(clone);
    }
    }
  callPost() {
    axios.post('/decode', {
      data: this.state.data
    })
      .then(response => {
        this.setState({ result: response.data.join("") })
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (

      <div>
        <Layout>
          <Header2 />
        </Layout>
        <Layout>
          <h1>Decoder</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="fieldset-wrapper">
              <fieldset>
                <legend>Encrypted Code</legend>
                <p className="field field-text tooltip">
                  <label htmlFor="comment-text">Message:</label>
                  <textarea value={this.state.value} onChange={this.handleChange} cols="10" rows="10"></textarea>
                  <span className="tooltiptext">Enter code, then hit decode button</span>
                </p>
              </fieldset>
            </div>
            <div className="fieldset-wrapper">
              <fieldset>
                <legend>Decrypted Code</legend>
                <p className="field field-text">
                  <label htmlFor="comment-text">Message:</label>
                  <textarea readOnly value={this.state.result} />
                </p>
              </fieldset>
            </div>
            <p className="field-submit">
              <input disabled={!this.state.valid} value="Decode" className="submit" type="submit" />
              <input type="button" value="Clear" onClick={this.handleClear} />
              {!this.state.valid && this.state.value.length > 0 ? <span className="warning">Invalid code entered</span> : <span></span>}
            </p>

          </form>
          <span>
            <DebugButton name="test" handler={this.handleDebug} />
            <DebugButton name="wipe" handler={this.wipeLocalState} />
          </span>

          <style jsx>{`

          input, textarea {
              font: inherit;
          }
          textarea {
              height: 4em;
            resize: vertical;
          }
          .field-submit input {
            box-sizing: border-box;
            cursor: pointer;
            border: 0;
            padding: .5em 1em;
            color: #fff;
            border-radius: .25em;
            font-size: 1em;
            background-color: #173b6d;
            background-image: -webkit-linear-gradient(top, #1a4a8e, #173b6d);
            background-image: -moz-linear-gradient(top, #1a4a8e, #173b6d);
            background-image: -o-linear-gradient(top, #1a4a8e, #173b6d);
            background-image: linear-gradient(to bottom, #1a4a8e, #173b6d);
            box-shadow: 0 .25em 0 rgba(23, 59, 109, 0.3), inset 0 1px 0 rgba(0, 0, 0, 0.3);
          }
          .field-submit input:focus {
            outline: 0;
            background-color: #2158a9;
            background-image: -webkit-linear-gradient(top, #2063c0, #1d4d90);
            background-image: -moz-linear-gradient(top, #2063c0, #1d4d90);
            background-image: -o-linear-gradient(top, #2063c0, #1d4d90);
            background-image: linear-gradient(to bottom, #2063c0, #1d4d90);
            box-shadow: 0 .25em 0 rgba(23, 59, 109, 0.3),
            inset 0 1px 0 rgba(0, 0, 0, 0.3);
          }
          .field-submit input[type="submit"]:disabled, .warning {
            color: #ff0000;
          }
          fieldset {
            border: 0;
            padding: 0.01em 0 0 0; /* 1 */
            margin: 0;
            min-width: 0; /* 2 */
          }
          legend {
            padding: 0 0 .5em 0;
            font-weight: bold;
            color: #777;
            display: table;
          }
          label {
            cursor: pointer;
            }
          .fieldset-wrapper {
              padding: 1em;
              margin-bottom: 1em;
              border: 1px solid #eee; /* 1 */
              background-color: #fff;
              box-shadow: 0 0 .25em rgba(0, 0, 0, 0.25);
              max-width:30em;
            }
            /**
            * No border for more modern browsers.
            */
          :root .fieldset-wrapper {
              border: 0;
            }
            .field-text label {
                display: block;
            } 
            .field-text label,
            .field-text textarea {
              width: 100%;
              max-width: 20em;
              -moz-box-sizing: border-box;
                   box-sizing: border-box;
            }
            .field-text textarea {
              padding: .375em .3125em .3125em;
              border: 1px solid #ccc;
              border-radius: .25em;
            }
            .field-text :focus {
              outline: 0;
              box-shadow: 0 0 .5em rgba(93, 162, 248, 0.5);
              border-color: #5da2f8;
            }
          .tooltip .tooltiptext {
            visibility: hidden;
            width: 120px;
            background-color: green;
            color: #fff;
            text-align: center;
            padding: 5px 0;
            border-radius: 6px;
         
            /* Position the tooltip text */
            position: absolute;
            z-index: 1;
        }
        .tooltip:hover .tooltiptext {
          visibility: visible;
      }
          `}</style>
        </Layout>
      </div>
    );
  }
}