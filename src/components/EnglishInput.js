import React from 'react';

export default class EnglishInput extends React.Component {
  state = {
    error: undefined
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const query = e.target.elements.engQuery.value.trim();

    if (query) {
      const error = await this.props.handleEngQuery(query);
      this.setState(() => ({ error }));
    }
  }

  render() {
    return (
      <form className="english-input" onSubmit={this.handleSubmit}>
        <input
          className="english-input__input"
          type="text"
          name="engQuery"
          placeholder="Enter English text"
          autoComplete="off"
        />
        <button
          className="button"
          disabled={this.props.isFetching}
        >{this.props.isFetching ? 'Translating...' : 'Translate'}</button>
      </form>
    );
  }
}
