import React, { Component } from 'react';

export default class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.items = ['Ульяновск', 'Самара', 'Саранск', 'Краснодар'];
    this.state = { suggestions: [] };
  }
  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.items.sort().filter((v) => regex.test(regex));
    }
    this.setState(() => ({ suggestions }));
  };
  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <input onChange={this.onTextChanged} type="" />
        {this.renderSuggestions()}
      </div>
    );
  }
}
