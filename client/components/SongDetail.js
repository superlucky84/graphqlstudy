import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
  render() {
    console.log(this.props);
    const {song} = this.props.data;

    if (!song) { return <div>loading...</div>; }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}


export default graphql(fetchSong, {
    options: (props) => {return {variables: {id: props.params.id}}}
})(SongDetail);
