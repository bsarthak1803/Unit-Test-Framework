import React from "react";
import { Button } from "reactstrap";

class List extends React.Component {
  constructor(props) {
    super(props); //super class this.props
    this.state = {
      data: null
    };
  }

  //animated side navbar
  openNav() {
    document.getElementById("mySideNav").style.width = "203px";
  }

  closeNav() {
    document.getElementById("mySideNav").style.width = "0";
  }

  //cmomparing the current state and the prev. state
  shouldComponentUpdate(props, state) {
    if (
      props.selectedMenu !== null &&
      props.selectedMenu !== this.props.selectedMenu
    ) {
      const data = this.props.queries.filter(
        row => row.population_group === props.selectedMenu
      );
      this.setState({ data: data });
    }
    return true;
  }

  //content to be rendered
  render() {
    const { props } = this;
    return (
      <div>
        {this.state.data !== null && this.state.data.length > 0 ? (
          <div className="sidenav" style={{ marginTop: "10%" }}>
            <span
              style={{
                fontSize: "20px",
                cursor: "pointer"
              }}
              onClick={event => this.openNav(event)}
            >
              &#9776;Queries
            </span>
            <div
              className="sidenav1"
              id="mySideNav"
              style={{ border: "0  black", marginTop: "3%" }}
            >
              <button
                className="btn btn-link"
                onClick={event => this.closeNav(event)}
                style={{ marginLeft: "80%", height: "10px", marginTop: "-2%" }}
                size="lg"
              >
                X
              </button>
              <ol style={{ marginTop: "20px" }}>
                {this.state.data.map((value, index) => {
                  return (
                    <li
                      onClick={event => props.onButtonSelect(event, index)}
                      key={value.d_query_id}
                    >
                      {value.query_name}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default List;
