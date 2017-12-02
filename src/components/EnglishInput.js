import React from 'react';

export default class EnglishInput extends React.Component {
  state = {
    error: undefined
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const query = e.target.elements.engQuery.value.trim();
    e.target.elements.engQuery.value = '';

    const error = await this.props.handleEngQuery(query);

    this.setState(() => ({ error }));
  }

  render() {
    return (
      <div>
        <form className="eng-form" onSubmit={this.handleSubmit}>
          <input className="eng-form__input" type="text" name="engQuery"/>
          <button
            className="button"
            disabled={this.props.isFetching}
          >{this.props.isFetching ? 'Translating...' : 'Translate'}</button>
        </form>
      </div>
    );
  }
}
