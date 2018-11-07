import React, { Component } from "react";

class AddContacts extends Component {
  constructor() {
    super();
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = e => {
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
    e.preventDefault();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  static defaultProps = {
    name: "frank david",
    email: "frank@gmail.com",
    phone: "1111111111"
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="container">
        <div className="card  mb-2">
          <h3 className="card-title">Add Contact</h3>
          <div className="card-content">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter name..."
                  defaultValue={name}
                  ref={this.nameInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email..."
                  defaultValue={email}
                  ref={this.emailInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Enter phone..."
                  defaultValue={phone}
                  ref={this.phoneInput}
                />
              </div>
              <button type="submit" className="btn btn-light btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContacts;
