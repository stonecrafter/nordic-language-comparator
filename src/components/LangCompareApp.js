import React from 'react';

import EnglishInput from './EnglishInput';
import TranslatedResult from './TranslatedResult';
import { getTranslations } from './helpers/requestHelpers';

export default class LangCompareApp extends React.Component {
  state = {
    isFetching: false,
    translated: {
      no: '',
      da: '',
      sv: '',
      is: '',
      fi: ''
    }
  }

  handleEngQuery = async (query) => {
    this.setState((prevState) => ({ isFetching: true }));
    const { no, da, sv, is, fi } = await getTranslations(query);
    this.setState((prevState) => ({
      isFetching: false,
      translated: { no, da, sv, is, fi }
    }));
  }

  render() {
    const translated = this.state.translated;

    return (
      <div>
        <h1>Compare Nordic Languages</h1>
        <EnglishInput
          handleEngQuery={this.handleEngQuery}
          isFetching={this.state.isFetching}
        />
        <div className="translated">
          <TranslatedResult
            key="no"
            lang="Norwegian"
            value={translated.no}
          />
          <TranslatedResult
            key="da"
            lang="Danish"
            value={translated.da}
          />
          <TranslatedResult
            key="sv"
            lang="Swedish"
            value={translated.sv}
          />
          <TranslatedResult
            key="is"
            lang="Icelandic"
            value={translated.is}
          />
          <TranslatedResult
            key="fi"
            lang="Finnish"
            value={translated.fi}
          />
        </div>
      </div>
    );
  }
};