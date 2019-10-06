import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";

var docs = 'Instructions:                     ' +
 '\n > type your text in the upper box' +
 '\n > type each expression in a seperate line' +
'\n > use * for main header ex: *Header will give you <h1>Header</h1>' +
'\n > use ## for h4 ex: ##header => <h4>header</h4>' +
'\n > use $$strong$$ for strong tag ex: $$strong$$ text => <strong>text</strong>' +
'\n > use $$italic$$ for strong tag ex: $$italic$$ text => <em>text</em>' +
'\n > use ` for code tag ex: ˋlet x; `  => <code> let x; </code>' +
'\n > use [] for link tag ex: [google]  => <a href="https://www.google.com">google</a>' +
'\n > use ![] for image tag ex: [img_url]  => <img src="img_url" />';


class MarkDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     input:'',
     output: docs
    };
   this.convert_to_html = this.convert_to_html.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.instructions = this.instructions.bind(this);

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
         med_str = '<h1>'+str.slice(1,-1)+'</h1>';
        }
        else if (str.slice(0,2)==='##'){
            med_str = '<h4>' + str.slice(2,-1)+'</h4>'
        }
        else if (str.slice(0,9)==='$$strong$$'){
            med_str = '<strong>' + str.slice(9,-1)+'</strong>'
        }
        else if (str.slice(0,9)==='$$italic$$'){
            med_str = '<em>' + str.slice(9,-1)+'</em>'
        }
        else if (str[0]==='`'){
            med_str = '<code>' + str.slice(1,-2)+'<code>'
        }
        else if (str[0]==='['){
            med_str = '<a href="https://www.' +str.slice(1,-1)+'.com">'+str.slice(1,-1)+'</a>'
        }
        else if (str.slice(0,2)==='!['){
            med_str = '<img src="'+str.slice(2,-2)+'"/>'
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
        output: ''
    });
}

instructions(){
    return this.setState({
        output: docs
    });
}


  render() {
   return (
       <div>
           <h1> MarkDown Previewer </h1>
           <h2> Editor </h2>
           <textarea  rows="6" cols="100" value={this.state.input} onChange={this.handleChange}>  </textarea>
           <button className='btn btn-primary' style={{margin:'2% 2%'}} onClick={this.convert_to_html}> Convert to Html </button>
           <button className='btn btn-primary' style={{margin:'2% 2%'}} onClick={this.instructions}> Instructions </button>
           <h2>Output</h2>
           <div id="out"> <pre>{this.state.output}</pre>   </div>
       </div>
   );
  }
};
 


export default MarkDown;

