import React,{useState,Component} from 'react'
import {Button} from 'react-bootstrap';
import '../App.css';

class TextEditor extends Component {
   
    state={
        text:"From Text Editor"
    }
    changeText=(evt)=>{
        this.setState(state=>({
            text:evt.target.value
        }));
    }
    
    render(){
        const text_value = this.props.text_value;
        return (
            <div className="text-popup">
                <h3>Input Text here</h3>
                <input value={text_value} onChange={this.props.handleEditor}/>
                 <Button >OK</Button>

            </div>
        );
    }


}
export default TextEditor