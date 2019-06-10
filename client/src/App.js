import React, { Component } from 'react';
import {
  Route,
  withRouter
} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push( movie );
    this.setState( {savedList} );
  };

  render() {
    return (
      <>
        <SavedList list={this.state.savedList} />
        <Route exact path='/' component={MovieList} />
        <Route path='/movies/:id'
               render={props => <Movie addToSavedList={this.addToSavedList}
                                       route={props} />} />
      </>
    );
  }
}

export default withRouter( App );