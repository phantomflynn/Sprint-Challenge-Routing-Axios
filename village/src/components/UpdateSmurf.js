import React, { Component } from 'react';
import axios from 'axios';

class UpdateSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      height: '',
      age: ''
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  updateSmurf = smurfID => {
    const newSmurfInfo = {};
    if (this.state.name !== '') newSmurfInfo['name'] = this.state.name;
    if (this.state.age !== '') newSmurfInfo['age'] = this.state.age;
    if (this.state.height !== '') newSmurfInfo['height'] = this.state.height;

    axios
      .put(`http://localhost:3333/smurfs/${smurfID}`, newSmurfInfo)
      .then(response => {
        this.setState({ name: '', height: '', age: '' });
        this.props.getSmurfs();
        this.props.toggleState();
      }).catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleInputChange}
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          onChange={this.handleInputChange}
          name="height"
          placeholder="Height"
        />
        <input
          type="text"
          onChange={this.handleInputChange}
          name="age"
          placeholder="Age"
        />
        <button onClick={() => this.updateSmurf(this.props.smurf.id)}>Submit</button>
      </div>
    )
  }
}

export default UpdateSmurf;