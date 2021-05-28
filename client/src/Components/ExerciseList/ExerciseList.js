/*
import React from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect, useDispatch, useSelector } from "react-redux";
import { getItems, deleteItem } from "../../actions/itemActions";
import PropTypes from "prop-types";

import "./ExerciseList.css";
import Item from './ItemModal';
//onClick calls setState which adjusts the items in the state of the Exercise List
//  and filters them so that if the item id is not equal to the id we click on will be passed on
//  meaning that the one that has the same id will be deleted from the UI
// We will also delete the item from the database separately

const ExerciseList = ( { setCurrentId }) => {
  const dispatch = useDispatch();
  //trigger rerendering
  const componentDidMount = () => {
    this.props.getItems();
  }

  const onDeleteClick = (id) => {
    dispatch(deleteItem(id));
  };
  
  const items = useSelector((state) => state.items);

    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="exercise-list">
            {items.map((item) => (
              <CSSTransition key={item._id} timeout={500} classNames="fade">
                <Item item={item} setCurrentId={setCurrentId} />
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    //id comes from the item we got from this.props.item
                    onClick={onDeleteClick(this, _id)}
                  >
                    &times;
                  </Button>
              

                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  
}

ExerciseList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});
//state.item because of what we called it in index.js

export default connect(mapStateToProps, { getItems, deleteItem })(ExerciseList);
//mapStateToProps allows us to map item state to component property to use in ExerciseList
*/
