import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";



//select component
class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownopen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      dropdownopen: !this.state.dropdownopen
    });
  }

  //content to be rendered
  render() {
    const { props } = this; //props=this.props
    const dropItem = props.pop_group.map((data, index) => {
      return /2018/.test(data) ? (
        <DropdownItem
          style={{ fontSize: "13px", fontWeight: "bold" }}
          className="item"
          key={index}
        >
          {data}
        </DropdownItem>
      ) : null;
    });

    return (
      //dropdown menu or measure names
    <React.Fragment>
      <Dropdown
        style={{ marginLeft: "5%", marginTop: "3%", backgroundColor: '#0079BE'}}
        isOpen={this.state.dropdownopen}
        toggle={this.toggle}
      >
        <DropdownToggle caret style= {{backgroundColor: '#0079BE'}}>{props.selectedMenu}</DropdownToggle>
        <DropdownMenu onClick={event => props.onMenuSelect(event)}>
          {dropItem}
        </DropdownMenu>
      </Dropdown>
      </React.Fragment>
    );
  }

      //dropdown menu or measure names
     
    
  
}

export default Select;
