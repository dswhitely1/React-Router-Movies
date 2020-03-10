import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

function Movie ({route: {match: {params}}, addToSavedList}) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/movies/${params.id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err.response));
  }, [params.id]);
  // componentDidMount();
  // {
  //   // change this line to grab the id passed on the URL
  //   const id = this.props.route.match.params.id;
  //   this.fetchMovie(id);
  // }

  // fetchMovie = id => {
  //   axios
  //     .get(`http://localhost:5000/api/movies/${id}`)
  //     .then(response => {
  //       this.setState(() => ({ movie: response.data }));
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  // Uncomment this code when you're ready for the stretch problems
  // componentWillReceiveProps(newProps);
  // {
  //   console.log(newProps);
  //   if (this.props.route.match.params.id !== newProps.route.match.params.id) {
  //     this.fetchMovie(newProps.route.match.params.id);
  //   }
  // }

  // saveMovie = () => {
  //   const addToSavedList = this.props.addToSavedList;
  //   addToSavedList(this.state.movie);
  // };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  return (
    <div className='save-wrapper'>
      <MovieCard movie={movie} />
      <div
        className='save-button'
        onClick={() => addToSavedList(movie)}
      >Save
      </div>
    </div>);

}

export default Movie;