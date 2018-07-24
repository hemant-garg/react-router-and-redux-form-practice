import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSpecificPost, HOME_URL } from '../actions';
import { Link } from 'react-router-dom';

class ActivePost extends Component {
   
   componentDidMount(){
   		const id = this.props.match.params.id;
   		this.props.fetchSpecificPost(id);
   }

    render() {
    	const {post} = this.props;
    	if(!post){
    		return <h3 className="text-center mt-3">LOADING ...</h3>
    	}

        return (
        	<div className="mt-5 p-2 w-75 mx-auto">
        	<Link to={HOME_URL} className="btn btn-info">Back to Index</Link>
            <h1>{post.title}</h1>
            <hr/>
            <h5>{post.categories}</h5>
            <hr/>
            <h3>{post.content}</h3>
            </div>
        );
    }
}
function mapStateToProps({posts}, ownProps){
	return { post: posts[ownProps.match.params.id] }
}
export default connect(mapStateToProps, {fetchSpecificPost})(ActivePost);
