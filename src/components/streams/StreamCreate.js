import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
 //  renderInput(formProps) {
 // console.log(formProps);
 //   return (
 //    <input value={formProps.input.value} onChange={formProps.input.onChange} />
 //   );
 //  }
 renderError({ touched, error }) {
  if (touched && error) {
   return (
    <div className='ui error message'>
     <div className='header'>{error}</div>
    </div>
   );
  }
 }

 renderInput = ({ input, lable, meta }) => {
  return (
   <div className={`field ${meta.touched && meta.error ? "error" : null}`}>
    <label>{lable}</label>
    <input {...input} autoComplete='off' />
    {this.renderError(meta)}
   </div>
  );
 };

 onSubmit = (formValues) => {
  this.props.createStream(formValues);
 };

 render() {
  return (
   <form
    className='ui form error'
    onSubmit={this.props.handleSubmit(this.onSubmit)}
   >
    <Field
     name='title'
     component={this.renderInput}
     lable='Enter Stream title'
    />
    <Field
     name='description'
     component={this.renderInput}
     lable='Enter Stream Description'
    />
    <button className='ui button primary'>Submit</button>
   </form>
  );
 }
}

const validate = (formValues) => {
 const errors = {};
 if (!formValues.title) {
  errors.title = "You must enter a title";
 }

 if (!formValues.description) {
  errors.description = "You must enter a description";
 }

 return errors;
};

const formWrqapper = reduxForm({
 form: "StreamCreate",
 validate,
})(StreamCreate);


export default connect(null, { createStream })(formWrqapper);
