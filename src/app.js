import React from "react";
import Select from "./select";
import List from "./list";
import Unittest from "./unittest";
import Unittest2 from "./unittest2";
import { Container, Row, Col } from "reactstrap";
import { queryData } from "./queryData";
import Button from 'terra-button/lib/Button';
import logo from './images/cernlogo.png'
import './app.css';
import Divider from 'terra-divider';

const buttonStyle = { margin: '5px' , marginLeft : '12px'};
//parent component App starts
class App extends React.Component {
  constructor(props) {
    super(props);
    //states of parent
    this.state = {
      selectedMenu: "measures",
      selectedButtonArray2: [[]], //2-d array for unit tests
      selectedButtonArray: [], //array for queries
      flag: 0,
      flag2: 0,
      flag3: 0,
      index: 0,
      startDate2: [[]], //2-d array for startdates
      startDate: [], //array for startdates
      endDate2: [[]], //2-d array for end dates
      endDate: [], //array for end dates
      queries: [], //array for storing data from api/db
      pop_group: [], //array for measures
      isLoading: true,
      DOB: [], //array for dobs
      selectedGender: "Gender",
      selectedOutcome: "Outcomes",
      age: [], //array for age
      Gender: [],
      Outcome: [],
      resVal: [],
      resVal2: [[]]
      // num: 0
    };

    //binding the state functions with the state instance
    this.onMenuSelect = this.onMenuSelect.bind(this);
    this.onButtonSelect = this.onButtonSelect.bind(this);
    this.addUnit = this.addUnit.bind(this);
    this.delQuery = this.delQuery.bind(this);
    this.delUnit = this.delUnit.bind(this);
    this.addQuery = this.addQuery.bind(this);
    this.addunittest = this.addunittest.bind(this);
    this.onstartDate = this.onstartDate.bind(this);
    this.onendDate = this.onendDate.bind(this);
    this.onDOB = this.onDOB.bind(this);
    this.onGenderSelect = this.onGenderSelect.bind(this);
    this.onOutcomeSelect = this.onOutcomeSelect.bind(this);
    this.onExecute = this.onExecute.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onAge = this.onAge.bind(this);
    this.onRes = this.onRes.bind(this);
    this.onstartDate2 = this.onstartDate2.bind(this);
    this.onendDate2 = this.onendDate2.bind(this);
    this.onresVal2 = this.onresVal2.bind(this);
  }

  componentDidMount() {
    // fetch("http://localhost:8000/myapp/retrieve_query/")
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({
    //       queries: json,
    //       isLoading: false,
    //       pop_group: [...new Set(json.map(x => x.population_group))]
    //     });
    //   });

    this.setState({
      queries: queryData,
      isLoading: false,
      pop_group: [...new Set(queryData.map(x => x.population_group))]
    });
  }

  //defining the functions
  //select
  onMenuSelect = event => {
    this.setState({ selectedMenu: event.nativeEvent.target.innerHTML });
  };

  //gender added to gender array
  //components-unittest and unittest2
  onGenderSelect = (event, ind) => {
    console.log(event.nativeEvent.target.innerHTML);
    var a = event.nativeEvent.target.innerHTML;
    var stateCopy = Object.assign({}, this.state);
    stateCopy.selectedGender = stateCopy.selectedGender.slice();
    stateCopy.selectedGender = Object.assign({}, stateCopy.selectedGender);
    stateCopy.selectedGender = a;
    this.setState(stateCopy);

    stateCopy.Gender = stateCopy.Gender.slice();
    stateCopy.Gender[ind] = Object.assign({}, stateCopy.Gender[ind]);
    stateCopy.Gender[ind] = a;
    this.setState(stateCopy);
  };

  //outcome added to outcomes array
  //components-unittest and unittest2
  onOutcomeSelect = (event, ind) => {
    var a = event.nativeEvent.target.innerHTML;
    var stateCopy = Object.assign({}, this.state);
    stateCopy.selectedOutcome = stateCopy.selectedOutcome.slice();
    stateCopy.selectedOutcome = Object.assign({}, stateCopy.selectedOutcome);
    stateCopy.selectedOutcome = a;
    this.setState(stateCopy);

    stateCopy.Outcome = stateCopy.Outcome.slice();
    stateCopy.Outcome[ind] = Object.assign({}, stateCopy.Outcome[ind]);
    stateCopy.Outcome[ind] = a;
    this.setState(stateCopy);
  };

  //component-list
  onButtonSelect = (event, index) => {
    let value = event.nativeEvent.target.innerHTML;

    console.log("this state", this.state.selectedButtonArray);
    this.setState({
      flag: 0,
      selectedButtonArray: [...this.state.selectedButtonArray, value],
      resVal: [...this.state.resVal, null]
    });
  };

  //components-unittest and unittest2
  onstartDate = (event, index) => {
    let start = event.target.value;
    var stateCopy = Object.assign({}, this.state);
    stateCopy.startDate = stateCopy.startDate.slice();
    stateCopy.startDate[index] = Object.assign({}, stateCopy.startDate[index]);
    stateCopy.startDate[index] = start;
    this.setState(stateCopy);
  };

  //components-unittest, editing startdates
  onstartDate2 = (event, index, ind) => {
    let start2 = event.target.value;
    var b = this.state.startDate2[index];
    b[ind] = start2;
    var stateCopy = Object.assign({}, this.state);
    stateCopy.startDate2 = stateCopy.startDate2.slice();
    stateCopy.startDate2[index] = Object.assign(
      {},
      stateCopy.startDate2[index]
    );
    stateCopy.startDate2[index] = b;
    this.setState(stateCopy);
  };

  //components-unittest and unittest2
  onendDate = (event, index) => {
    let end = event.target.value;
    var stateCopy = Object.assign({}, this.state);
    stateCopy.endDate = stateCopy.endDate.slice();
    stateCopy.endDate[index] = Object.assign({}, stateCopy.endDate[index]);
    stateCopy.endDate[index] = end;
    this.setState(stateCopy);
  };

  ////components-unittest, editing end dates
  onendDate2 = (event, index, ind) => {
    let end2 = event.target.value;
    var b = this.state.endDate2[index];
    b[ind] = end2;
    var stateCopy = Object.assign({}, this.state);
    stateCopy.endDate2 = stateCopy.endDate2.slice();
    stateCopy.endDate2[index] = Object.assign({}, stateCopy.endDate2[index]);
    stateCopy.endDate2[index] = b;
    this.setState(stateCopy);
  };

  onRes = (event, index) => {
    let res = event.target.value;

    // var stateCopy = Object.assign({}, this.state);
    // stateCopy.resVal = stateCopy.resVal.slice();
    // for (let i = 0; i < index; i++) {
    //   if (typeof stateCopy.resVal[i] !== "number") {
    //     stateCopy.resVal[i] = Object.assign({}, stateCopy.resVal[i]);
    //     stateCopy.resVal[i] = null;
    //   }
    // }
    // stateCopy.resVal[index] = Object.assign({}, stateCopy.resVal[index]);
    // stateCopy.resVal[index] = res;
    let temp = this.state.resVal.slice();
    temp[index] = res;
    this.setState({ resVal: temp });
  };

  ////components-unittest, editing result values
  onresVal2 = (event, index, ind) => {
    let res2 = event.target.value;
    var b = this.state.resVal2[index];
    b[ind] = res2;
    var stateCopy = Object.assign({}, this.state);
    stateCopy.resVal2 = stateCopy.resVal2.slice();
    stateCopy.resVal2[index] = Object.assign({}, stateCopy.resVal2[index]);
    stateCopy.resVal2[index] = b;
    this.setState(stateCopy);
  };

  //component-unittest
  addUnit = event => {
    if (window.confirm("Save/Update Unit-test")) {
      var a;
      this.state.selectedButtonArray
        ? (a = this.state.selectedButtonArray)
        : (a = "empty");
      var a2 = this.state.startDate;
      var a3 = this.state.endDate;
      var a4 = this.state.resVal;
      if (this.state.flag2 === 0) {
        this.setState({
          flag: 1,
          selectedButtonArray2: [...this.state.selectedButtonArray2, a],
          startDate2: [...this.state.startDate2, a2],
          endDate2: [...this.state.endDate2, a3],
          resVal2: [...this.state.resVal2, a4]
        });
      } else if (this.state.flag2 === 1) {
        var stateCopy = Object.assign({}, this.state);
        stateCopy.selectedButtonArray2 = stateCopy.selectedButtonArray2.slice();
        stateCopy.selectedButtonArray2[this.state.index] = Object.assign(
          {},
          stateCopy.selectedButtonArray2[this.state.index]
        );
        var b = this.state.selectedButtonArray2[this.state.index];
        var c = b.concat(a);
        stateCopy.selectedButtonArray2[this.state.index] = c;
        this.setState(stateCopy);

        stateCopy.startDate2 = stateCopy.startDate2.slice();
        stateCopy.startDate2[this.state.index] = Object.assign(
          {},
          stateCopy.startDate2[this.state.index]
        );
        b = this.state.startDate2[this.state.index];
        c = b.concat(a2);
        stateCopy.startDate2[this.state.index] = c;
        this.setState(stateCopy);

        stateCopy.endDate2 = stateCopy.endDate2.slice();
        stateCopy.endDate2[this.state.index] = Object.assign(
          {},
          stateCopy.endDate2[this.state.index]
        );
        b = this.state.endDate2[this.state.index];
        c = b.concat(a3);
        stateCopy.endDate2[this.state.index] = c;
        this.setState(stateCopy);

        stateCopy.resVal2 = stateCopy.resVal2.slice();
        stateCopy.resVal2[this.state.index] = Object.assign(
          {},
          stateCopy.resVal2[this.state.index]
        );
        b = this.state.resVal2[this.state.index];
        c = b.concat(a4);
        stateCopy.resVal2[this.state.index] = c;
        this.setState(stateCopy);
      }
      this.setState({
        selectedButtonArray: [],
        selectedGender: "Gender",
        selectedOutcome: "Outcomes",
        startDate: [],
        endDate: [],
        resVal: [],
        flag2: 0,
        flag: 1
      });
    }
  };

  //delete query,startdate,endDate of query
  delQuery = (event, index, val, ind) => {
    var a = this.state.selectedButtonArray2[index].filter((value1, index1) => {
      return index1 !== ind;
    });
    var b = this.state.startDate2[index].filter((value1, index1) => {
      return index1 !== ind;
    });
    var c = this.state.endDate2[index].filter((value1, index1) => {
      return index1 !== ind;
    });
    var d = this.state.resVal2[index].filter((value1, index1) => {
      return index1 !== ind;
    });

    //delete the query at index of unittest
    var stateCopy = Object.assign({}, this.state);
    stateCopy.selectedButtonArray2 = stateCopy.selectedButtonArray2.slice();
    stateCopy.selectedButtonArray2[index] = Object.assign(
      {},
      stateCopy.selectedButtonArray2[index]
    );
    stateCopy.selectedButtonArray2[index] = a;
    this.setState(stateCopy);
    //delete startdate at index of unittest
    stateCopy.startDate2 = stateCopy.startDate2.slice();
    stateCopy.startDate2[index] = Object.assign(
      {},
      stateCopy.startDate2[index]
    );
    stateCopy.startDate2[index] = b;
    this.setState(stateCopy);
    //delete end date at index of unittest
    stateCopy.endDate2 = stateCopy.endDate2.slice();
    stateCopy.endDate2[index] = Object.assign({}, stateCopy.endDate2[index]);
    stateCopy.endDate2[index] = c;
    this.setState(stateCopy);
    //delete res value at index of unittest
    stateCopy.resVal2 = stateCopy.resVal2.slice();
    stateCopy.resVal2[index] = Object.assign({}, stateCopy.resVal2[index]);
    stateCopy.resVal2[index] = d;
    this.setState(stateCopy);
  };

  //delete unit test query array,startdate and end date arrays
  delUnit = (event, index1) => {
    if (window.confirm("Delete unit test?")) {
      var a = this.state.selectedButtonArray2.filter((value, index) => {
        return index !== index1;
      });
      var stateCopy = Object.assign({}, this.state);
      stateCopy.selectedButtonArray2 = stateCopy.selectedButtonArray2.slice();
      stateCopy.selectedButtonArray2 = Object.assign(
        {},
        stateCopy.selectedButtonArray2
      );
      stateCopy.selectedButtonArray2 = a;
      this.setState(stateCopy);
      //delete startdate array
      var b = this.state.startDate2.filter((value, index) => {
        return index !== index1;
      });
      stateCopy.startDate2 = stateCopy.selectedButtonArray2.slice();
      stateCopy.startDate2 = Object.assign({}, stateCopy.startDate2);
      stateCopy.startDate2 = b;
      this.setState(stateCopy);
      //delete end date array
      var c = this.state.endDate2.filter((value, index) => {
        return index !== index1;
      });
      stateCopy.endDate2 = stateCopy.endDate2.slice();
      stateCopy.endDate2 = Object.assign({}, stateCopy.endDate2);
      stateCopy.endDate2 = c;
      this.setState(stateCopy);

      var d = this.state.Gender.filter((value, index) => {
        return index !== index1 - 1;
      });
      stateCopy.Gender = stateCopy.Gender.slice();
      stateCopy.Gender = Object.assign({}, stateCopy.Gender);
      stateCopy.Gender = d;
      this.setState(stateCopy);

      var e = this.state.Outcome.filter((value, index) => {
        return index !== index1 - 1;
      });
      stateCopy.Outcome = stateCopy.Outcome.slice();
      stateCopy.Outcome = Object.assign({}, stateCopy.Outcome);
      stateCopy.Outcome = e;
      this.setState(stateCopy);

      var f = this.state.age.filter((value, index) => {
        return index !== index1 - 1;
      });
      stateCopy.age = stateCopy.age.slice();
      stateCopy.age = Object.assign({}, stateCopy.age);
      stateCopy.age = f;
      this.setState(stateCopy);

      var g = this.state.DOB.filter((value, index) => {
        return index !== index1 - 1;
      });
      stateCopy.DOB = stateCopy.DOB.slice();
      stateCopy.DOB = Object.assign({}, stateCopy.DOB);
      stateCopy.DOB = g;
      this.setState(stateCopy);

      if (this.state.selectedButtonArray2.length === 2) {
        this.setState({
          selectedGender: "Gender",
          selectedOutcome: "Outcomes",
          flag: 0
        });
      }
    }
  };

  //add a query to array
  addQuery = (event, index1) => {
    if (window.confirm("select Queries")) {
      this.setState({
        index: index1,
        flag2: 1,
        flag3: 1
      });
    }
  };

  //add a unit test array to 2-d array
  addunittest = event => {
    if (window.confirm("Create Unit Test?")) {
      this.setState({
        selectedGender: "Gender",
        selectedOutcome: "Outcomes",
        flag: 0,
        flag3: 0
      });
    }
  };

  //dob added to dob array
  onDOB = (event, index) => {
    let dob = index;
    var myDate = new Date(dob);
    var today = new Date();
    if (today > myDate) {
      var dates = dob.split("-");
      var d = new Date();

      var userday = dates[2];
      var usermonth = dates[1];
      var useryear = dates[0];

      var curday = d.getDate();
      var curmonth = d.getMonth() + 1;
      var curyear = d.getFullYear();
      var year = curyear - useryear;

      if (
        curmonth < usermonth ||
        (curmonth === usermonth && curday < userday)
      ) {
        year--;
      }

      var stateCopy = Object.assign({}, this.state);
      stateCopy.DOB = stateCopy.DOB.slice();
      stateCopy.DOB[index] = Object.assign({}, stateCopy.DOB[index]);
      stateCopy.DOB[index] = dob;
      this.setState(stateCopy);

      stateCopy.age = stateCopy.age.slice();
      stateCopy.age[index] = Object.assign({}, stateCopy.age[index]);
      stateCopy.age[index] = year;
      this.setState(stateCopy);
    } else alert("DOB cannot be after today's date");
  };

  onAge = (event, ind) => {
    let age = event.target.value;
    if (age >= 0) {
      console.log("Valid age");
      /*var d = new Date();
      var curyear = d.getFullYear() - age;
      var date = curyear + "-01-01";
      var stateCopy = Object.assign({}, this.state);
      stateCopy.DOB = stateCopy.DOB.slice();
      stateCopy.DOB[ind] = Object.assign({}, stateCopy.DOB[ind]);
      stateCopy.DOB[ind] = date;
      this.setState(stateCopy);

      stateCopy.age = stateCopy.age.slice();
      stateCopy.age[ind] = Object.assign({}, stateCopy.age[ind]);
      stateCopy.age[ind] = age;
      this.setState(stateCopy);
    }*/
  }
     else alert("Age cannot be negative");
  };

  onExecute = event => {
    let array = {
      age: this.state.age,
      gender: this.state.Gender,
      exp_outcome: this.state.Outcome,
      queries: this.state.selectedButtonArray2,
      startDates: this.state.startDate2,
      endDates: this.state.endDate2,
      resVals: this.state.resVal2,
      measure: this.state.selectedMenu
    };
    console.log(array);
    fetch("http://localhost:8000/myapp/content/", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(array)
    })
      .then(res => console.log("res"))
      .catch(function(error) {
        console.log("Request failed", error);
      });
    // let base64 = require("base-64");
    // let username = "vk048320@cmtdev";
    // let password = "vj1123";

    // let headers = new Headers();
    // headers.set(
    //   "Authorization",
    //   "Basic " + base64.encode(username + ":" + password)
    // );

    // fetch(
    //   "http://localhost:8080/discern/mpages/reports/JSON:group1?parameters=MINE,measure",
    //   {
    //     headers: headers
    //   }
    // )
    //   .then(res => console.log(res))
    //   .catch(function(error) {
    //     console.log("Request failed", error);
    //   });

    // var xmlhttp = new XMLHttpRequest();
    // var cred = "vk048320" + "@" + "cmtdev";
    // var url =
    //   "https//localhost:8080/discern/mpages/reports/json:group1?parameters=MINE";
    // console.log("called");
    // xmlhttp.open("GET", url, false, cred, "vj1123");
    // xmlhttp.setRequestHeader(
    //   'WWW-Authenticate: Basic realm=".MillenniumDomain"'
    // );
    // xmlhttp.send(null);

    // var xhr = new XMLHttpRequest();
    // var url =
    //   "http://localhost:8080/discern/mpages/reports/json:group1?parameters=MINE";
    // var cred = "vk048320" + "@" + "cmtdev";
    // var status = false;
    // xhr.open("GET", url, true, cred, "vj1123");
    // //xhr.setRequestHeader('WWW-Authenticate: Basic realm=".MillenniumDomain"');
    // xhr.onload = function(e) {
    //   if (xhr.readyState === 4) {
    //     if (xhr.status === 200) {
    //       alert("success");
    //       status = true;
    //     } else {
    //       console.error(xhr.statusText);
    //     }
    //   }
    // }.bind(this);
    // xhr.onerror = function(e) {
    //   console.error(xhr.statusText);
    // };
    // xhr.send(null);
  };

  //function to cancel creating new unit test
  onCancel = event => {
    if (window.confirm("Cancel creation?")) {
      this.setState({
        selectedButtonArray: [],
        startDate: [],
        endDate: [],
        flag2: 0,
        flag: 1
      });
    }
    if (this.state.selectedButtonArray2.length === 1)
      this.setState({
        flag: 0
      });
  };

  //rendering the child components
  render() {
    console.log("state is", this.state); //displaying updated state
    return this.state.isLoading ? (
      <p>Loading.....</p>
    ) : (
      <React.Fragment>
      <header className="App-header">
          <img className = 'App-logo'src = {logo}/>
            
            
          
      </header>
        
      <Container
        fluid
        style={{
          backgroundColor: 'white'
        }}
      >
        <h2
          style={{
            
            marginLeft: "25%",
            backgroundColor: 'white',
            marginTop: 20
          }}
        >
          Welcome to the testing tool! 
        </h2>
        <Divider />
        <Row noGutters>
          <Col md="1" style={{ marginTop: "11%" }}>
            <Row noGutters>
              <Select
                onMenuSelect={this.onMenuSelect}
                selectedMenu={this.state.selectedMenu}
                queries={this.state.queries}
                pop_group={this.state.pop_group}
                // menudata={this.menudata}
              />
            </Row>
            <br/>
            <br/>

            <Row noGutters>
              <List
                selectedMenu={this.state.selectedMenu}
                menudata={this.menudata}
                queries={this.state.queries}
                onButtonSelect={this.onButtonSelect}
              />
            </Row>
          </Col>
          <Col md={{ size: 10, offset: 1 }}>
            {this.state.flag ? (
              this.state.selectedButtonArray2.map((value, index, array) => {
                return index !== this.state.selectedButtonArray2.length - 1 ? (
                  <div key={index + 1}>
                    <h4 style={{ marginTop: "5%", marginLeft: "10%" }}>
                      Test : {index + 1}
                    </h4>
                    <Unittest
                      selectedButtonArray2={this.state.selectedButtonArray2}
                      addUnit={this.addUnit}
                      index1={index + 1}
                      delQuery={this.delQuery}
                      delUnit={this.delUnit}
                      addQuery={this.addQuery}
                      addunittest={this.addunittest}
                      startDate2={this.state.startDate2}
                      endDate2={this.state.endDate2}
                      onDOB={this.onDOB}
                      selectedGender={this.state.selectedGender}
                      onGenderSelect={this.onGenderSelect}
                      selectedOutcome={this.state.selectedOutcome}
                      onOutcomeSelect={this.onOutcomeSelect}
                      DOB={this.state.DOB}
                      age={this.state.age}
                      onAge={this.onAge}
                      Gender={this.state.Gender}
                      Outcome={this.state.Outcome}
                      resVal2={this.state.resVal2}
                      onstartDate={this.onstartDate}
                      onendDate={this.onendDate}
                      onstartDate2={this.onstartDate2}
                      onendDate2={this.onendDate2}
                      onresVal2={this.onresVal2}
                    />
                  </div>
                ) : null;
              })
            ) : (
              <Unittest2
                selectedButtonArray2={this.state.selectedButtonArray2}
                selectedButtonArray={this.state.selectedButtonArray}
                addUnit={this.addUnit}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onstartDate={this.onstartDate}
                onendDate={this.onendDate}
                onDOB={this.onDOB}
                selectedGender={this.state.selectedGender}
                onGenderSelect={this.onGenderSelect}
                selectedOutcome={this.state.selectedOutcome}
                onOutcomeSelect={this.onOutcomeSelect}
                age={this.state.age}
                onCancel={this.onCancel}
                onAge={this.onAge}
                onRes={this.onRes}
                flag3={this.state.flag3}
                DOB={this.state.DOB}
                resVal={this.state.resVal}
                //num={this.num}
              />
            )}
            {this.state.flag && this.state.selectedButtonArray2.length > 1 ? (
              <div>
                <Button
                  onClick={event => this.onExecute(event)}
                  style = {{margin: '5px', marginLeft :110  }}
                  text = "Execute"
                  variant = 'emphasis'
                />
              </div>
            ) : null}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
    );
  }
}
export default App;
