import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { deletePost } from '../actions';
import { Link } from 'react-router-dom';


class Home extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }

  deletePost = (id) => {
    this.props.deletePost(id, () => this.props.history.push('/'))
  }

  showPosts = () => {
    const posts = Object.values(this.props.posts)
    return posts.map(post =>{
      const url = `/post/${post.id}`;
      return (
        <li key={post.id} className="list-group-item mb-3 d-flex justify-content-between ">
          <Link className="w-75" to={url}>
             <div>{post.title}</div>
          </Link>
          <button onClick={() => this.deletePost(post.id)} className="btn btn-danger">Delete</button>
        </li>
        );
    })
  }

  render() {
    console.log('1', this.props.posts)
    return (
      <div className="mx-auto w-75 mt-5">
      <div className="d-flex justify-content-between mb-3">
        <h1> POSTS </h1>
        <Link to="/post/new" className="btn btn-info align-self-center"> Add New Post </Link>
      </div>
      <ul className="list-group mt-5">
        { this.showPosts() }
      </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts: state.posts }
}

export default connect(mapStateToProps , {fetchPosts, deletePost})(Home);
