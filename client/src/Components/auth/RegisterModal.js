import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

class RegisterModal extends Component {
  state = {
    modal: false,
    name: "",
    email: "",
    password: "",
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //Check for a register error
      if (error.id === "REGISTER_FAIL") {
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

    const { name, email, password } = this.state;

    //Create user object
    const newUser = {
      name,
      email,
      password,
    };

    //Attempt to register
    this.props.register(newUser);
  };

  render() {
    return (
      <div>
        <NavLink style={{/*color: "#fffff0"*/}} onClick={this.toggle} href="#">
          REGISTER
        </NavLink>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader className="font-link3" toggle={this.toggle}>REGISTER</ModalHeader>
          <ModalBody className="font-link3">
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">NAME</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="NAME"
                  className="mb-3"
                  onChange={this.onChange}
                ></Input>

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
                <Button className="registerButton" color="dark" style={{width:"100%", marginTop: "2rem" }} block>
                  REGISTER
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

export default connect(mapStateToProps, { register, clearErrors })(
  RegisterModal
);
