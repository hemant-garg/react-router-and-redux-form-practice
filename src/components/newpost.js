import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';


class NewPost extends Component {


  renderField(field){
    const { touched, error } = field.meta;
    const className = `form-control ${touched && error ? 'is-invalid' : ''}`;
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input 
          className={className}
          type="text"
          {...field.input}
        />
        <div className="text-help invalid-feedback">{touched ? error: ''}</div>
      </div>
    )
  }

  onSubmit(values){
    this.props.createPost(values, () => this.props.history.push('/'));

  } 

  render() {

    const { handleSubmit } = this.props;
    return (
      <div className="w-50 mx-auto mt-5">
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <Field 
          name="title"
          label="Title"
          component={this.renderField}
        />
        <Field 
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field 
          name="content"
          label="Content"
          component={this.renderField}
        />
        <button className="btn btn-success mr-3" type="Submit"> Submit </button>
        <Link to="/" className="btn btn-danger"> Cancel </Link>
      </form>
      </div>
    );
  }
}


function validate(values){
  const errors = {}
  if(!values.title){
    errors.title = "Enter a title"
  }
  if(!values.categories){
    errors.categories = "Enter a Category"
  }
  if(!values.content){
    errors.content = "Enter a Content"
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'createPost'
})(
connect(null, {createPost})(NewPost)
);
