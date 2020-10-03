import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Button } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

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
        <h5 style={{ marginLeft: "31%", marginTop: "8%" }}>
          ADD QUERIES TO UNIT TEST
        </h5>

        <div
          className="border"
          style={{
            marginTop: "2%",
            marginLeft: "8px",
            borderTop: "1px inset rgb(52, 51, 59)",
            borderBottom: "1px inset rgb(52, 51, 59)",
            padding: "-5%",
            borderWidth: "2px",
            borderRadius: "20px",
            marginBottom: "10px"
          }}
        >
          {props.flag3 === 0 && (
            <Row style={{ marginLeft: "7%" }}>
              <Col md="3">
                <Row>
                  <b> DOB:</b>
                  <input
                    className="form-control"
                    type="date"
                    id="dob"
                    value={props.DOB[length]}
                    style={{
                      width: "120px",
                      marginLeft: "5px",
                      height: "25px"
                    }}
                    onChange={event => this.props.onDOB(event, length)}
                  />
                </Row>
                <Row>
                  <b>AGE:</b>
                  <input
                    className="form-control"
                    type="text"
                    id="age"
                    value={props.age[length]}
                    style={{
                      width: "120px",
                      marginLeft: "8px",
                      height: "25px"
                    }}
                    onChange={event => props.onAge(event, length)}
                  />
                </Row>
              </Col>

              <Col md="2">
                <Dropdown
                  style={{ marginLeft: "55%" }}
                  isOpen={this.state.dropdownopen1}
                  toggle={this.toggle1}
                >
                  <DropdownToggle caret>
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
                  style={{ marginLeft: "50%" }}
                  isOpen={this.state.dropdownopen2}
                  toggle={this.toggle2}
                >
                  <DropdownToggle caret>
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
              className="btn btn-success btn-sm"
              onClick={event => this.props.addUnit(event)}
              style={{ marginLeft: "14%" }}
            >
              <b>SAVE</b>
            </Button>
            <Button
              onClick={event => this.props.onCancel(event)}
              className="btn btn-success btn-md"
              style={{ marginLeft: "40%" }}
              size="sm"
            >
              CANCEL
            </Button>
          </Row>
        </div>
      </div>
    );
  }
}
export default Unittest2;
