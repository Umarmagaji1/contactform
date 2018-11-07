import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-content mb-2">
              <h2 className="card-header">
                {name}{" "}
                <i
                  onClick={() => {
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    });
                  }}
                  className="fa fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <Link to={`/contacts/edit/${id}`}>
                  <i
                    className="fa fa-pencil"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black"
                    }}
                  />
                </Link>
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className="fa fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />
              </h2>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">
                    Email:
                    {email}
                  </li>
                  <li className="list-group-item">
                    Phone:
                    {phone}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
