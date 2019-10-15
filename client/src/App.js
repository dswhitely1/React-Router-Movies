import React, { useState } from 'react';
import {
  Route,
  withRouter
} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

function App() {
  const [state, setState] = useState([]);

  const addToSavedList = movie => setState([...state, movie]);
    return (
      <>
        <SavedList list={state} />
        <Route exact path='/' component={MovieList} />
        <Route path='/movies/:id'
               render={props => <Movie addToSavedList={addToSavedList}
                                       route={props} />} />
      </>
    );
}

export default withRouter( App );