import PropTypes from 'prop-types';
import _ from 'lodash';
import faker from 'faker';
import React, { Component } from 'react';
import { Search, Grid, Label, Form } from 'semantic-ui-react';

const source = _.times(10, () => ({
  title: faker.company.companyName('Apple'),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}));

const resultRenderer = ({ title }) => <Label content={title} />;

resultRenderer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

const initialState = { isLoading: false, results: [], value: '' };

class SearchInput extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = (result) => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      });
    }, 300);
  };

  handleFormSubmit = () => {
    console.log('search:', this.state.query);
  };

  render() {
    const { isLoading, value, results } = this.state;
    const placeholder = 'Rechercher...';
    const cssAttributes = {
      border: 'none',
      backgroundColor: 'rgb(244, 247, 249)',
      width: '30vw',
      height: '50px',
      marginTop: 'auto',
      marginBottom: 'auto',
      borderRadius: '30px',
    };
    return (
      <Grid>
        <Grid.Column width={6}>
          <Form onSubmit={this.handleFormSubmit}>
            <Search
              input={
                <Form.Input
                  icon={{ name: 'search', link: true }}
                  style={cssAttributes}
                />
              }
              size={'large'}
              loading={isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true,
              })}
              fluid={true}
              results={results}
              value={value}
              noResultsMessage={'Pas de résultats ..😔'}
              resultRenderer={resultRenderer}
              placeholder={placeholder}
              style={cssAttributes}
              {...this.props}
            />
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SearchInput;
