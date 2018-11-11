import { Component } from 'react';
export default class ChatPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {

            value: '',
            valid: false,
            data: [],
            result: true,
        };
        /*
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateInput = this.validateInput.bind(this);
*/
    }
    render() {
        return (
            <div>
                <div className="content">
                    <div className="header">
                        <h2>chat page</h2>
                    </div>
                    <div className="chat-panel">
                        <div className="panel-header">
                            <div className="header-icon">
                                <i className="fa fa-qq"></i>
                            </div>
                            <div className="header-title"><span>Chat</span></div>
                            <div className="close-icon">+</div>
                        </div>
                        <div className="panel-body">
                            <div className="dad">
                                <div className="son">

                                </div>
                            </div>
                        </div>
                        <div className="panel-footer">
                            <input type="text" className="input-info" />
                            <button className="submit-button">Send</button>
                        </div>
                    </div>
                </div>
                <style jsx>{`
@import url('https://fonts.googleapis.com/css?family=Roboto');

body{
  margin:0;
  padding:0;
  height:100vh;
  font-family: 'Roboto', sans-serif;
  background:linear-gradient(45deg,#95B3D7 ,#8374D6 100%);
 
/*   background-color:redz; */
}
.content{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  align-content:flex-start;

}

.header{
/*   display:flex; */
/*   justify-content:center; */
  color:#FFF;
  letter-spacing:2px;
}

.chat-panel{
  position:relative;
  display:flex;
  justify-content:space-between;
/*   align-items:flex-start; */
  flex-direction: column;
/*   align-items:center; */
/*     justify-content:; */
  width:800px;
  height:80vh;
/*   padding:10px; */
  border:1px solid #v;
  border-radius:2px;
  box-shadow: 10px 10px 5px gray;
  background:rgba(229, 229, 232,0.6);
}

.panel-header{
  position:absolute;
  display:flex;
  flex-direction: row;
  align-items:center;
  width:100%;
  height:40px;
  padding:10px 0 2px 0;
  border-bottom:1px solid #ECECEE;
  font-size:14px;
  color:#FFF;
}

.header-icon{
  display:flex;
  justify-content:center;
  align-items:center;
  width:30px;
  height:30px;
  margin:0 10px;
  border:1px solid #20BF55;
  border-radius:100%;
  background:#20BF55;
}

.close-icon{
  position:absolute;
  right:10px;
  top:4px;
  font-size:18px;
  transform:rotate(45deg);
  -ms-transform:rotate(45deg); /* IE 9 */
	-webkit-transform:rotate(45deg); /* Safari and Chrome */
}

.close-icon:hover{
  cursor:pointer;
  opacity:0.5;
}

.header-body-line{
  position:absloute;
  display:flex;
  width:100%;
  border-bottom:1px solid #FFF;
}

.panel-footer{
  display:flex;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:36px;
/*   bottom:4px; */
  padding:6px 0;
  border-top:1px solid #ECECEE;
/*   background-color:#000; */
}
 
.input-info{
  width:100%;
  height:20px;
  margin:20px;
  outline:none;
  border:1px solid #e1e1e1;
  border-radius:5px;
  background-color:#e1e1e1;
}

.submit-button{
  height:25px;
  width:75px;
  margin:0 20px 0 0;
  color:#FFF;
  border-radius:5px;
  border-color:#49a9ee;
  background-color:#49a9ee;
  outline:none;
}

.dad{
  display:flex;
  justify-content:flex-start;
  
}

.son{
  
}
            `}</style>
            </div>
        )
    }
}