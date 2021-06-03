import "./WorkoutCard.css";
import { FaThumbsUp } from "react-icons/fa";

import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { connect } from "react-redux";
import { deleteCard, incLike, getCards } from "../../actions/cardActions";
import PropTypes from "prop-types";
import { grabEmail } from "../../storeAccess/grabEmail";

class WorkoutCard extends Component {
  constructor(props) {
    super(props);
  }

  isRightEmail = (email) => {
    if (email) if ((email = email = this.props.card.email)) return true;
  };

  onDeleteClick = (id) => {
    if (this.isRightEmail(grabEmail())) this.props.deleteCard(id);
  };

  onLikeClick = (id) => {
    this.props.incLike(id);
    window.location.reload();
  };
//my attempt at a like function
  

  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardBody >
            <div className="cardBody">
            <CardTitle tag="h5">{this.props.card.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {this.props.card.subtitle}
            </CardSubtitle>
            <CardText>{this.props.card.descript}</CardText>
            <Button
              className="remove-btn"
              color="danger"
              style={{ marginRight: 10 }}
              //id comes from the item we got from this.props.item
              onClick={this.onDeleteClick.bind(this, this.props.card._id)}
            >
              &times; {' '} Delete
            </Button>
            <Button 
            style={{ background: "#24a0ed", marginLeft: 10 }}
            onClick={this.onLikeClick.bind(this, this.props.card._id)}
            >
              &times; &nbsp;
              <FaThumbsUp /> &nbsp;{ this.props.card.likes } Likes
              
            </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

//delete button
//<Button style={{ marginRight: 10 }}>Delete</Button>

WorkoutCard.propTypes = {
  deleteCard: PropTypes.func.isRequired,
  incLike: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
 // card: state.card,
});

export default connect(mapStateToProps, {
  deleteCard, incLike
})(WorkoutCard);
