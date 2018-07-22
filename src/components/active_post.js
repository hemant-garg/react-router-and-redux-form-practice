import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSpecificPost } from '../actions';
import { Link } from 'react-router-dom';

class ActivePost extends Component {
   
   componentDidMount(){
   		const id = this.props.match.params.id;
   		this.props.fetchSpecificPost(id);
   }

    render() {
    	console.log('post', this.props.post)
    	const {post} = this.props;
    	if(!post){
    		return <h3 className="text-center mt-3">LOADING ...</h3>
    	}

        return (
        	<div className="mt-5 p-2 w-75 mx-auto">
        	<Link to="/" className="btn btn-info">Back to Index</Link>
            <h1>{post.title}</h1>
            <hr/>
            <h5>{post.content}</h5>
            <hr/>
            <h3>{post.content}</h3>
            </div>
        );
    }
}
function mapStateToProps({posts}, ownProps){
	console.log('state' ,posts)
	return { post: posts[ownProps.match.params.id] }
}
export default connect(mapStateToProps, {fetchSpecificPost})(ActivePost);
