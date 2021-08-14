import './App.css';
import React,{ Component } from 'react'
import fire from './fire'

class App extends Component{

  state = {
    text: ""
  }

  handleText=e=>{
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit=e=>{
    let messageRef = fire.database().ref('message').orderByKey().limitToLast(100);
    fire.database().ref('messages').push(this.state.text);
    this.setState({
      text:  ""
    })
  }


  render() {
    return (
      <div className="App">
     <input type="text"onChange={this.handleText} id="inputText" />

     <br></br>
     <button onClick={this.handleSubmit}>Save it</button>
      </div>
    
    );
  }
}



export default App;
