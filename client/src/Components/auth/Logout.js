import "./Logout.css";

import { RiLogoutBoxRLine } from "react-icons/ri";

import React, { Component, Fragment } from "react";
import { NavLink } from "reactstrap";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
import PropTypes from "prop-types";

export class Logout extends Component {

  static propTypes = {
    logout: PropTypes.func.isRequired,
  };

  render() {
    return (
      
      <Fragment>
        <NavLink onClick={this.props.logout} href="/">
          <div className="font-link3" style={{color: "black"}}>
          <RiLogoutBoxRLine color="black" size="1em" />{' '}LOGOUT
          </div>
        </NavLink>
      </Fragment>
    );
  }
}

export default connect(null, { logout })(Logout);
