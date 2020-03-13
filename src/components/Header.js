import React, { Component } from 'react';
import {Nav, Row,Col,Container,Image,Jumbotron,Button} from 'react-bootstrap';
import TextEditor from './TextEditor'
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text:"Hello World",
            counter:0
        }
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleEditor = this.handleEditor.bind(this);
    }
   
    handleClick(){
        this.setState(state=>({
            text:"Clicked!"
        }));
    }

    handleEditor(e){
        console.log(e.target.value)
        this.setState({text: e.target.value});
    }
    render(){
        return (
            <div>
                <TextEditor handleEditor={this.handleEditor}></TextEditor>
                <h1 onClick={this.handleClick}>{this.state.text}</h1>


            </div>
        )

    }
}
export default Header;

