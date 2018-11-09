import { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import NameCheck from '../components/nameCheck';
import Layout from '../components/MyLayout.js';
import Header from '../components/Header.js';
import About from './about';

class ChatOne extends Component {
  // fetch old messages data from the server
  /*
  static async getInitialProps ({ req }) {
    const response = await fetch('http://localhost:3000/messages/chat1')
    const messages = await response.json()
    return { messages }
  }*/

  static defaultProps = {
    messages: []
  }

  // init state with the prefetched messages
  state = {
    field: '',
    newMessage: 0,
    messages: this.props.messages,
    subscribe: false,
    subscribed: false,
    ready: false,
  }

  subscribe = () => {
    if (this.state.subscribe && !this.state.subscribed) {
      // connect to WS server and listen event
      /*
      this.props.socket.on('message.chat1', this.handleMessage)
      this.props.socket.on('message.chat2', this.handleOtherMessage)
      this.setState({ subscribed: true })
      */
    }
  }
  componentDidMount() {
    this.subscribe()
  }

  componentDidUpdate() {
    this.subscribe()
  }
  registerDone(result) {
    this.setState({ ready: result });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.socket && !state.subscribe) return { subscribe: true }
    return null
  }

  // close socket connection
  componentWillUnmount() {
    /*
    this.props.socket.off('message.chat1', this.handleMessage)
    this.props.socket.off('message.chat2', this.handleOtherMessage)
    */
  }

  // add messages from server to the state
  handleMessage = (message) => {
    this.setState(state => ({ messages: state.messages.concat(message) }))
  }

  handleOtherMessage = () => {
    this.setState((prevState) => ({ newMessage: (prevState.newMessage + 1) }))
  }

  handleChange = event => {
    this.setState({ field: event.target.value })
  }

  // send messages to server and add them to the state
  handleSubmit = event => {
    /*
    event.preventDefault()

    // create message object
    const message = {
      id: (new Date()).getTime(),
      value: this.state.field
    }

    // send object to WS server
    this.props.socket.emit('message.chat1', message)

    // add it to state and clean current input value
    this.setState(state => ({
      field: '',
      messages: state.messages.concat(message)
    }))
    */
  }

  render() {
    return (
      <div>
        <Layout>
          <Header />
        </Layout>
        <Layout>
          {!this.state.ready ? <NameCheck reg={v => this.registerDone(v)}/> : <About/>}
        </Layout>
      </div>
    )
  }
}

export default ChatOne
