import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { connect } from "react-redux";
import { addItem } from "../../actions/itemActions";

const initialState = { name: ''};
const ItemModal = () => {
  const [exer, setExer] = useState(initialState);
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  
  const toggle = () => {
    setState((prevState) => !prevState);
  };

  const onChange = (e) => {
    setExer({ ...exer, name: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();


    // Add item via the add item action
    dispatch(addItem(exer));

    //Close modal
    toggle();
  };

    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={toggle}
        >
          Add Item
        </Button>

        <Modal isOpen={state} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add To Exercise List</ModalHeader>
          <ModalBody>
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add exercise item"
                  onChange={onChange}
                ></Input>
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  
}

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { addItem })(ItemModal);

