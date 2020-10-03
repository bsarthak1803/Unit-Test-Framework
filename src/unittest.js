import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Button from 'terra-button/lib/Button';
import DatePicker from 'terra-date-picker/lib/DatePicker';
import moment from 'moment';
import Input from 'terra-form-input'

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
const buttonStyle = { margin: '5px', marginLeft : '200px'  };
//unittest component
class Unittest extends Component {
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

  getDate(testIndex, dateIndex, datePropName) {
    let dates = this.props[datePropName][testIndex][dateIndex];
    if (dates !== "empty" && dates !== null && dates !== undefined)
      return dates;
    else {
      this.props[datePropName][testIndex][dateIndex] = null;
      return "";
    }
  }

  getDob(ind, dob) {
    let dates = this.props[dob][ind];
    if (dates !== "empty" && dates !== null && dates !== undefined)
      return dates;
    else {
      this.props[dob][ind] = null;
      return "";
    }
  }

  getGender(ind, gender) {
    let dates = this.props[gender][ind];
    if (dates !== "empty" && dates !== null && dates !== undefined)
      return dates;
    else {
      this.props[gender][ind] = null;
      return "Gender";
    }
  }

  getOutcomes(ind, outcome) {
    let dates = this.props[outcome][ind];
    if (dates !== "empty" && dates !== null && dates !== undefined)
      return dates;
    else {
      this.props[outcome][ind] = null;
      return "Outcomes";
    }
  }
  //content to be rendered
  render() {
    const { props } = this;
    const buttonArray = this.props.selectedButtonArray2.map(
      (value, index, array) => {
        return this.props.index1 === index
          ? value.map((val, ind) => {
              return (
                <Row key={ind}>
                  <p style={{ marginTop: "1%", marginLeft: "5%" }}>{val}</p>
                </Row>
              );
            })
          : null;
      }
    );
    return (
      <div className="border"  style={{
        marginTop: "2%",
        marginLeft: "100px",
        borderTop: "1px inset rgb(52, 51, 59)",
        marginRight: "200px",
        borderBottom: "1px inset rgb(52, 51, 59)",
        padding: "-5%",
        borderWidth: "2px",
        borderRadius: "20px",
        marginBottom: "10px"
      }}>
        <Row style={{ marginLeft: "5%" }}>
          <Col md="3">
            <Row style = {{marginTop:10}}>
              <b> DOB:</b>
            <div style = {{marginLeft: 5  }}>
              <DatePicker
                maxDate={moment().format()}
                onChange={this.props.onDOB}
              />
            </div>
            </Row>
            <br/>
            <Row style = {{marginTop:10}}>
              <b>AGE:</b>
              <Input 
                  name="default placeholder input" 
                  placeholder="Age" id="placeholder"  
                  style = {{width: 159, marginLeft: 8}}
                  onChange={event => props.onAge(event, props.index1 - 1)}
                  value={this.getDob(props.index1 - 1, "age")}
              />
            </Row>
          </Col>
          <Col md="3">
            <Dropdown
              style={{ marginLeft: "45%" ,marginTop:10}}
              isOpen={this.state.dropdownopen1}
              toggle={this.toggle1}
            >
              <DropdownToggle caret>
                {this.getGender(props.index1 - 1, "Gender")}
              </DropdownToggle>
              <DropdownMenu
                onClick={event => props.onGenderSelect(event, props.index1 - 1)}
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
          <Col md="3">
            <Dropdown
              style={{ marginLeft: "50%" ,marginTop:10}}
              isOpen={this.state.dropdownopen2}
              toggle={this.toggle2}
            >
              <DropdownToggle caret>
                {this.getOutcomes(props.index1 - 1, "Outcome")}
              </DropdownToggle>
              <DropdownMenu
                onClick={event =>
                  props.onOutcomeSelect(event, props.index1 - 1)
                }
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
          <Col>
            <Button
              style={{margin: '5px', marginTop:10, marginLeft: 40}}
              text = "Delete"
              onClick={event => this.props.delUnit(event, this.props.index1)}
              variant = "emphasis"
            />
          </Col>
          
        </Row>
        <Row>
          <Col md="6" style={{ marginTop: "5%", marginLeft: "2%" }}>
            <Row>
              <h6 style={{ marginLeft: "80px" }}>
                <b>Query Name</b>
              </h6>
            </Row>
            <div style={{ marginTop: "10px" }}>{buttonArray}</div>
          </Col>
          <Col md="1" style={{ marginTop: "5%", marginRight: "25px" }}>
            <Row>
              <p style={{ textAlign: "center", marginLeft: "5px" }}>
                <b>Start Date</b>
              </p>
            </Row>
            <Row>
              {this.props.selectedButtonArray2.map((value, index, array) => {
                return this.props.index1 === index
                  ? value.map((val, ind) => {
                      return (
                        <Row
                          noGutters
                          key={ind}
                          style={{
                            marginBottom: "5%",
                            width: "140px",
                            height: "40px"
                          }}
                        >
                         <input
                            className="form-control unit1"
                            size="5"
                            type="date"
                            placeholder="start-date"
                            value={this.getDate(index, ind, "startDate2")}
                            onChange={event =>
                              props.onstartDate2(event, index, ind)
                            }
                          />
                        </Row>
                      );
                    })
                  : null;
              })}
            </Row>
          </Col>
          <Col md="1" style={{ marginTop: "5%", marginLeft: "4%" }}>
            <Row>
              <p style={{ textAlign: "center", marginLeft: "15px" }}>
                <b>End Date</b>
              </p>
            </Row>
            <Row>
              {this.props.selectedButtonArray2.map((value, index, array) => {
                return this.props.index1 === index
                  ? value.map((val, ind) => {
                      return (
                        <Row
                          noGutters
                          key={ind}
                          style={{
                            marginBottom: "5%",
                            width: "140px",
                            height: "40px"
                          }}
                        >
                          <input
                            className="form-control unit1"
                            size="5"
                            type="date"
                            placeholder="end-date"
                            min={this.props.startDate2[index][ind]}
                            value={this.getDate(index, ind, "endDate2")}
                            onChange={event =>
                              props.onendDate2(event, index, ind)
                            }
                          />
                        </Row>
                      );
                    })
                  : null;
              })}
            </Row>
          </Col>
          <Col md="1" style={{ marginTop: "5%", marginLeft: "5%" }}>
            <Row>
              <p>
                <b>Result</b>
              </p>
            </Row>
            <Row>
              {this.props.selectedButtonArray2.map((value, index, array) => {
                return this.props.index1 === index
                  ? value.map((val, ind) => {
                      return /: E\d/.test(val) ? (
                        <Row
                          noGutters
                          key={ind}
                          style={{ marginBottom: "5%", height: "40px" }}
                        >
                          <input
                            className="form-control"
                            size="5"
                            type="text"
                            placeholder="Res"
                            style={{ width: "60px" }}
                            value={this.getDate(index, ind, "resVal2")}
                            onChange={event =>
                              props.onresVal2(event, index, ind)
                            }
                          />
                        </Row>
                      ) : (
                        <Row
                          noGutters
                          key={ind}
                          style={{
                            marginBottom: "5%",
                            height: "40px",
                            width: "55px"
                          }}
                        />
                      );
                    })
                  : null;
              })}
            </Row>
          </Col>
          <Col md="1" style={{ marginTop: "5%", marginLeft: "0.02%" }}>
            <Row />
            <Row style={{ marginTop: "28px" }}>
              {this.props.selectedButtonArray2.map((value, index, array) => {
                return this.props.index1 === index
                  ? value.map((val, ind) => {
                      return (
                        <Row key={ind} style={{ marginTop: "28%" }}>
                          <button
                            type="button"
                            className="btn btn-link closebtn"
                            style={{
                              color: "red",
                              marginTop: "-17%",
                              width: "100px"
                            }}
                            onClick={event =>
                              this.props.delQuery(event, index, val, ind)
                            }
                          >
                            X
                          </button>
                        </Row>
                      );
                    })
                  : null;
              })}
            </Row>
          </Col>
        </Row>
        {buttonArray.length > 0 && (
          <Row style={{ marginTop: "20px" }}>
            <Button
              onClick={event => this.props.addQuery(event, this.props.index1)}
              variant = "emphasis"
              style= {buttonStyle}
              text = "Add to test"
            >
             {this.props.index1}
            </Button>
            <Button
              onClick={event => this.props.addunittest(event)}
              style={buttonStyle}
              variant = "emphasis"
              text = "Create new test"
            >
              
            </Button>
          </Row>
        )}
      </div>
    );
  }
}

export default Unittest;
