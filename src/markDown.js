import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";


class MarkDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     input:'',
     output:'Ahmad'
    };
   this.convert_to_html = this.convert_to_html.bind(this);
   this.handleChange = this.handleChange.bind(this);

}

handleChange (event){
    this.setState({
        input: event.target.value
      });
}
convert_to_html (){
    let input = this.state.input;
    let new_output = this.state.input;
    let splitted_input = input.split('\n');
   // console.log(splitted_input);
   let splitted_output = [];
    for (let i in splitted_input) {
        let str = splitted_input[i];
     //   console.log(str);
        let med_str;
        if(str[0]==='*'){
         med_str = '<h1>'+str.slice(1)+'</h1>';
        }
        if (str.slice(1,3)==='##'){
            med_str = 'h4' + str.slice(2)+'</h4>'
        }
        else {
            med_str = str;
        }
        console.log(med_str);
        splitted_output.push(med_str);
    }
    console.log(splitted_output);
    //new_output = splitted_output;

    for (let i in splitted_output){
        let html_str= splitted_output[i];
        $('#out').append(html_str);
    }


  return this.setState({
        output: new_output
    });
}


  render() {
   return (
       <div>
           <h1> MarkDown Previewer </h1>
           <h2> Editor </h2>
           <textarea  rows="6" cols="100" value={this.state.input} onChange={this.handleChange}>  </textarea>
           <button className='btn btn-primary' style={{margin:'1% 1%'}} onClick={this.convert_to_html}> Convert to Html </button>
           <h2>Output</h2>
           <div id="out"> {this.state.output}   </div>
       </div>
   );
  }
};
 

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


export default MarkDown;

