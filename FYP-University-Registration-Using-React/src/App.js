import './App.css';
import React, {Component} from 'react';
// import {testing} from './backend.js';
import ReactDOM from 'react-dom';
import { saveAs } from 'file-saver';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '',email:'',roll_no1:'',roll_no2:'',project_name:''};
  }
  namee = (event) => {

  
    this.setState({name: event.target.value});
  
}
  emaill = (event) => {
    this.setState({email: event.target.value});
  }
  roll1 = (event) => {

    this.setState({roll_no1: event.target.value});
  }
  roll2 = (event) => {
    this.setState({roll_no2: event.target.value});
  }
 prjname = (event) => {
    this.setState({project_name: event.target.value});
  }
  submit = (eventt) =>
  {

    if(this.state.name<2 || this.state.name=='')
    {
      alert("Please Enter Name");
      return;
    }
    if(this.state.email!='')
    {
      for(var j=0;j<this.state.email.length;j=j+1)
      {
        if(this.state.email[j]=='@')
        {
          if(this.state.email[j+1]=='.')
          {
            alert("'.' cannot be used after '@' ");
            return;
          }
          else{
          break;
          }
        }
        else if(j==this.state.email.length){
          alert("Please Enter correct Email");
          return;
        }
      }
    }
    // if(this.state.roll_no1[0]!='P' || this.state.roll_no1[0]!="I" || this.state.roll_no1[0]!="F" || this.state.roll_no1[0]!="L"|| this.state.roll_no1[0]!="K" ) 
    // {
    //   alert(this.state.roll_no1[0]);
    //   alert("The First letter should be alphabet");
    //   return;
    // }
    // for(var i=1;i<this.state.roll_no1;i++)
    // {
    //   if(this.state.roll_no1[i]!=Number)
    //   {
    //     alert("Please enter number after the first Letter")
    //     return;
    //   }
    // }
  
    // for(var i=1;i<this.state.roll_no1;i++)
    // {
    //   if(this.state.roll_no2[i]!=Number)
    //   {
    //     alert("Please enter number after the first Letter")
    //     return;
    //   }
    // }

    if(this.state.project_name='' || this.state.project_name.length<3)
    {
      alert("Please Enter Proper Name");
    }

    var jsondata={"name: " : this.state.name,"Email: " : this.state.email,"Roll Number 1: " : this.state.roll_no1,"Roll Number 2: " : this.state.roll_no2,"Project Name: " : this.state.project_name}

    var FileSaver = require('file-saver');
    var blob = new Blob([jsondata], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "jsondata.txt");
    // alert(this.state.name);
    // alert(this.state.email);
    // alert(this.state.roll_no1);
    // alert(this.state.roll_no2);
    // alert(this.state.project_name);
  }








  render (){ return (
    <div className="App">
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid" >
            <img width="50px" src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/National_University_of_Computer_and_Emerging_Sciences_logo.png/250px-National_University_of_Computer_and_Emerging_Sciences_logo.png"></img>
            <a class="navbar-brand" href="#">
              FAST FYP Registration
            </a>
          </div>

        </nav>


<br></br>
      </div>

      <div class="container">
        <div class="jumbotron" >
          <h1 >Introduction of FAST NUCES</h1>
          <br></br>
          <p class="text">
          Founded as a Federally Chartered University in July 2000, the National University of Computer and Emerging Sciences is a premiere University of Pakistan, renowned for quality and impact of its students in the development of local software and other industries. The university has five modern campuses at Karachi, Lahore, Islamabad, Peshawar and Chiniot-Faisalabad. These campuses provide world class educational environment and recreational facilities to about over 11,000 students, around one quarter are female and over 500 skilled faculty members.

Research wings of the university are well recognized, nationally and internationally. They are embarked upon cutting edge research having direct impact on the social, economic and technological needs of Pakistan. Our vision is to become a globally recognized research university of Pakistan within the next decade.
</p>
<button class="btn btn-secondary" ><a href="https://www.nu.edu.pk">Link to Website</a></button>

        </div>



      </div>
<br></br>

<div class="container">
<div class="row">
<div class="column">
<div class="card text-center">
  <div class="card-body">
    <img width="114px" height="auto" src="https://storage.googleapis.com/isometriclove.appspot.com/laptop.png"></img>
    <br></br>
  <br></br>
    <h4 class="card-text bg-info"><strong>Computer Science</strong></h4>
  <p>Impart in-depth understanding of Computer Science field according to international standards
Convert understanding to innovations
Build diverse careers in Computer Science as productive IT professionals and entrepreneurs for the socio-economic development
</p>
  
  </div>
</div>
</div>

<div class="column">
<div class="card text-center">
  <div class="card-body">
    <img width="114px " height="auto" src="https://storage.googleapis.com/isometriclove.appspot.com/browser.png"></img>
    <br></br>
  <br></br>
    <h4 class="card-text bg-info"><strong>Software Engineering</strong></h4>
  <p>Student will be able to apply knowledge of computing fundamentals, knowledge of a computing specialization, and mathematics, science, and domain knowledge appropriate for the computing specialization to the abstraction and conceptualization of computing models from defined problems and requirements</p>
  </div>
</div>
</div>

<div class="column">
<div class="card text-center">
  <div class="card-body">
    
  <img width="114px" height="auto" src="https://storage.googleapis.com/isometriclove.appspot.com/server.png"></img>
  <br></br>
  <br></br>
    <h4 class="card-text bg-info"><strong>Electrcial Engineering</strong></h4>
  <p>The mission of School of Electrical Engineering is to provide graduates with a strong and stable foundation in the traditional and contemporary areas of electrical engineering. The graduates of this program are able to conceive, formulate and effectively communicate solutions to technological problems in society.</p>
  </div>
</div>
</div>

  </div>

</div>

<br></br>

<div class="container">
  <div class="jumbotron2">
<div class="cards">
  <div class="card-header">
    Projects
  </div>
  <div class="card-body">
    <h5 class="card-title">A Comparative Examination of Islamic Banking and Conventional Banking in Pakistan</h5>
    <p class="card-text">The basic purpose of the study is to make comparative analysis of Islamic banking and conventional banking in Pakistan. In any society banking sector (conventional or Islamic) plays a central role in the development of economic of country. I am doing this research on many factors such as current position of banking sector, in term of assets, equities, investments, financing, deposits profitability etc. my researches based on Pakistan environment.</p>
    <a href="https://www.slideshare.net/rahoolrairoshan/final-year-project-at" class="btn btn-primary">Go to Project</a>
  </div>
</div>
</div>
</div>

<br></br>
<br></br>
<br></br>
  <div class="jumbotron3">
<div class="cards text-center">
  <div class="card-header">
    <h3><strong><u>Registration Form</u></strong></h3>
    </div>
    </div>
  
    <br></br>
  <br></br>

  <div class="container xyz">
  <form>
  <br></br>
  <br></br>
  
  <div class="form-group">
  <div class="row justify-content-center">
    <input type='text' onChange={this.namee} class="form-control text-center" id="namee" aria-describedby="emailHelp" placeholder="Enter Your Name"></input>
  </div>
  </div>
  <br></br>
  <div class="form-group ">
  <div class="row justify-content-center ">
    <input type="email" onChange={this.emaill} class="form-control text-center" id="emaill" placeholder="Enter Email"></input>
  </div>
  </div>
  <br></br>
  <br></br>
  <div class="form-group ">
  <div class="row justify-content-center ">
    <input type="text" onChange={this.roll1} class="form-control text-center" id="rollnumber1" placeholder="Enter First Student's Roll Number (P170092)"></input>
  </div>
  </div>
  <br></br>
  <br></br>
  <div class="form-group ">
  <div class="row justify-content-center ">
    <input type="email" onChange={this.roll2} class="form-control text-center" id="rollnumber2" placeholder="Enter Second Student's Roll Number (P170092)"></input>
  </div>
  </div>
  <br></br>
  <br></br>
  <div class="form-group ">
  <div class="row justify-content-center ">
    <input type="email" onChange={this.prjname} class="form-control text-center" id="proejctname" placeholder="Enter Project Name"></input>
  </div>
  </div>
  <br></br>

</form>
<div class="row justify-content-center">
  <button type="button" class="btn btn-primary" id="but" onClick={this.submit}>Submit</button>
    
    </div>
<br></br>
<br></br>
  </div>

  <br></br>
  <br></br>

</div>


<br></br>
<br></br>


<div class="container">
<div class="row">
<div class="column">
<div class="cardx text-center">
  <div class="card-body">
    <img width="114px" height="auto" src="https://storage.googleapis.com/isometriclove.appspot.com/id2.png"></img>
    <br></br>
  <br></br>
    <button type="button" class="btn btn-success" href="/contact.js"><strong>Contact Us</strong></button>
  
  </div>
</div>
</div>


<div class="column">
<div class="cardp text-center">
  <div class="card-body">
    <img width="245px" height="auto" src="https://storage.googleapis.com/isometriclove.appspot.com/id.png"></img>
    <br></br>
  <br></br>
    <button type="button" class="btn btn-success" ><strong>About Us</strong></button>
  
    </div>
  </div>
</div>
</div>
</div>
    </div>
  );
}
}

ReactDOM.render(<App />, document.getElementById('root'));


export default App;
