import "./Logout.css";
import { GrClose } from "react-icons/gr";

import "./LoginModal.css";
import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

class LoginModal extends Component {
  state = {
    modal: false,
    email: "",
    password: "",
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //Check for a register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    //If authenticated, close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    // Clear the errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    const user = {
      email,
      password,
    };

    //Attempt to login
    this.props.login(user);
  };

  render() {
    return (
      <div>
        <NavLink className="font-link3" style={{/*color: "#fffff0"*/}} onClick={this.toggle} href="#">
          LOGIN
        </NavLink>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader className="font-link3" toggle={this.toggle} >LOGIN</ModalHeader>
          <ModalBody className="font-link3">
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="email">EMAIL</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="EMAIL"
                  className="mb-3"
                  onChange={this.onChange}
                ></Input>

                <Label for="password">PASSWORD</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="PASSWORD"
                  className="mb-3"
                  onChange={this.onChange}
                ></Input>
                <Button className="font-link3" color="dark" style={{ width:"100%", marginTop: "2rem" }} block>
                  LOGIN
                </Button>

              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);
