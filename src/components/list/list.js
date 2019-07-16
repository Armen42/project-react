import React from 'react';
import { API_URL } from '../../config';
import { handleResponse } from '../../helpers.js';
import Pagination from './Pagination';
import Loading from '../common/Loading';
import Table from './Table';

class List extends React.Component {
  constructor() {
    super();

    this.state = {
      page: 1,
      totalPages: 0,
      perPage: 20,
      currencies: [],
      loading: false,
      error: '',
    };

    this.handlePaginationClick = this.handlePaginationClick.bind(this);
  }

  componentWillMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies() {
    const { page, perPage } = this.state;

    this.setState({ loading: true });

    fetch(`${API_URL}/cryptocurrencies/?page=${page}&perPage=${perPage}`)
      .then(handleResponse)
      .then((data) => {
        const { totalPages, currencies } = data;

        this.setState({
          currencies,
          totalPages,
          error: '',
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.errorMessage,
          loading: false,
        });
      });
  }

  handlePaginationClick(direction) {
    let nextPage = this.state.page;

    nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;

   
    this.setState({ page: nextPage }, () => {
      this.fetchCurrencies();
    });
  }

  render() {
    const { currencies, loading, error, page, totalPages } = this.state;

    if (loading) {
      return <div className="loading-container"><Loading /></div>
    }

    if (error) {
      return <div className="error">{error}</div>
    }

    return (
      <div>
        <Table currencies={currencies} />

        <Pagination
          page={page}
          totalPages={totalPages}
          handlePaginationClick={this.handlePaginationClick}
        />
      </div>
    );
  }
}

export default List;
