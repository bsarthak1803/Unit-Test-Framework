import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Button from 'terra-button/lib/Button';
import Base from 'terra-base';
import DatePicker from 'terra-date-picker/lib/DatePicker';
import Input from 'terra-form-input'
import moment from 'moment';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
const buttonStyle = { margin: '5px', marginLeft : '250px' };
//unittest2 component
class Unittest2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownopen1: false,
      dropdownopen2: false
    };
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
  }
  //toggle for gender
  toggle1() {
    this.setState({
      dropdownopen1: !this.state.dropdownopen1
    });
  }
  //toggle for outcomes
  toggle2() {
    this.setState({
      dropdownopen2: !this.state.dropdownopen2
    });
  }

  //content to be rendered
  render() {
    const { props } = this; //props=this.props
    const buttonArray = this.props.selectedButtonArray.map((value, index) => {
      return (
        <p style={{ marginBottom: "5%" }} key={index}>
          {value}
        </p>
      );
    });

    const length = this.props.selectedButtonArray2.length - 1;
    //console.log("props are", this.props);

    return (
      <div>
        <h5 style={{ marginLeft: "35%", marginTop: "8%" }}>
          Add Queries to the test!
        </h5>

        <div
          className="border"
          style={{
            marginTop: "2%",
            marginLeft: "100px",
            marginRight: "200px",
            borderTop: "1px inset #107bd3",
            borderBottom: "1px inset rgb(52, 51, 59)",
            padding: "-5%",
            borderWidth: "2px",
            borderRadius: "20px",
            marginBottom: "10px",
            borderBottomColor: "#107bd3"
          }}
        >
          {props.flag3 === 0 && (
            <Row style={{ marginLeft: "7%" }}>
              <Col md="3">
                <Row style = {{marginTop:10}}>
                  <b> DOB:</b>  
                   <div style = {{marginLeft: 6}}>
                     <DatePicker
                        name="date-input"
                        id="include-dates"
                        maxDate={moment().format()}
                        value={props.DOB[length]}
                        onChange={this.props.onDOB}
            
                      />
                      </div>
                </Row>
                <br/>
                <Row>
                  <b>AGE:</b> <Input 
                  name="default placeholder input" 
                  placeholder="Age" id="placeholder"  
                  onChange={event => props.onAge(event, length)} 
                  style = {{width: 159, marginLeft: 6}}/>
                   
                </Row>
              </Col>

              <Col md="2">
                <Dropdown
                  style={{ marginLeft: "55%" ,marginTop:10}}
                  isOpen={this.state.dropdownopen1}
                  toggle={this.toggle1}
                >
                  <DropdownToggle caret style= {{backgroundColor: '#0079BE'}}>
                    {this.props.selectedGender || "Gender"}
                  </DropdownToggle>
                  <DropdownMenu
                    onClick={event => props.onGenderSelect(event, length)}
                  >
                    <DropdownItem
                      style={{ fontSize: "13px", fontWeight: "bold" }}
                      className="item"
                    >
                      Male
                    </DropdownItem>
                    <DropdownItem
                      style={{ fontSize: "13px", fontWeight: "bold" }}
                      className="item"
                    >
                      Female
                    </DropdownItem>
                    <DropdownItem
                      style={{ fontSize: "13px", fontWeight: "bold" }}
                      className="item"
                    >
                      Unknown
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
              <Col>
                <Dropdown
                  style={{ marginLeft: "50%" , marginTop:10}}
                  isOpen={this.state.dropdownopen2}
                  toggle={this.toggle2}
                >
                  <DropdownToggle caret style= {{backgroundColor: '#0079BE'}}>
                    {this.props.selectedOutcome || "Outcomes"}
                  </DropdownToggle>
                  <DropdownMenu
                    onClick={event => props.onOutcomeSelect(event, length)}
                  >
                    <DropdownItem
                      style={{ fontSize: "13px", fontWeight: "bold" }}
                      className="item"
                    >
                      Not Met
                    </DropdownItem>
                    <DropdownItem
                      style={{ fontSize: "13px", fontWeight: "bold" }}
                      className="item"
                    >
                      Not done
                    </DropdownItem>
                    <DropdownItem
                      style={{ fontSize: "13px", fontWeight: "bold" }}
                      className="item"
                    >
                      Denominator Exclusion
                    </DropdownItem>
                    <DropdownItem
                      style={{ fontSize: "13px", fontWeight: "bold" }}
                      className="item"
                    >
                      Numerator
                    </DropdownItem>
                    <DropdownItem
                      style={{ fontSize: "13px", fontWeight: "bold" }}
                      className="item"
                    >
                      Denominator Exception
                    </DropdownItem>
                    <DropdownItem
                      style={{ fontSize: "13px", fontWeight: "bold" }}
                      className="item"
                    >
                      IPP only
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
          )}
          <Row>
            <Col md="6" style={{ marginTop: "5%", marginLeft: "5%" }}>
              <Row>
                <h6 style={{ marginLeft: "80px" }}>
                  <b>Query Name</b>
                </h6>
              </Row>
              <div style={{ marginTop: "3px" }}>{buttonArray}</div>
            </Col>
            <Col md="2" style={{ marginTop: "5%" }}>
              <Row>
                <h6 style={{ textAlign: "center", marginLeft: "40px" }}>
                  <b>Start Date</b>
                </h6>
              </Row>
              <Row>
                {this.props.selectedButtonArray.map((value, index) => {
                  return (
                    <Row
                      noGutters
                      key={index}
                      style={{
                        marginBottom: "5%",
                        width: "167px",
                        height: "40px"
                      }}
                    >
                      <input
                        className="form-control unit2"
                        size="15"
                        type="date"
                        placeholder="start-date"
                        onChange={event => this.props.onstartDate(event, index)}
                      />
                    </Row>
                  );
                })}
              </Row>
            </Col>
            <Col md="2" style={{ marginTop: "5%" }}>
              <Row>
                <h6 style={{ textAlign: "center", marginLeft: "40px" }}>
                  <b>End Date</b>
                </h6>
              </Row>
              <Row>
                {this.props.selectedButtonArray.map((value, index) => {
                  return (
                    <Row
                      noGutters
                      key={index}
                      style={{
                        marginBottom: "5%",
                        width: "167px",
                        height: "40px"
                      }}
                    >
                      <input
                        className="form-control unit2"
                        size="15"
                        type="date"
                        placeholder="end-date"
                        min={this.props.startDate[index]}
                        onChange={event => this.props.onendDate(event, index)}
                      />
                    </Row>
                  );
                })}
              </Row>
            </Col>
            <Col md="1" style={{ marginTop: "5%" }}>
              <Row>
                <h6 style={{ marginLeft: "10px" }}>
                  <b>Result</b>
                </h6>
              </Row>
              <Row>
                {this.props.selectedButtonArray.map((value, index) => {
                  return /: E\d/.test(value) ? (
                    <Row
                      noGutters
                      key={index}
                      style={{
                        marginBottom: "10%",
                        height: "40px",
                        width: "60px"
                      }}
                    >
                      <input
                        className="form-control"
                        size="10"
                        type="text"
                        placeholder="Res"
                        style={{ marginLeft: "13px", width: "60px" }}
                        onChange={event => this.props.onRes(event, index)}
                      />
                    </Row>
                  ) : (
                    <Row
                      noGutters
                      key={index}
                      style={{
                        marginBottom: "10%",
                        height: "40px",
                        width: "60px"
                      }}
                    />
                  );
                })}
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Button
              text = "Save"
              onClick={event => this.props.addUnit(event)}
              style = {buttonStyle}
              variant = 'emphasis'
            >
            </Button>
            <Button
              onClick={event => this.props.onCancel(event)}
              style={buttonStyle}
              variant = 'emphasis'
              text = 'Cancel'
            >
            </Button>
          </Row>
        </div>
      </div>
    );
  }
}
export default Unittest2;
