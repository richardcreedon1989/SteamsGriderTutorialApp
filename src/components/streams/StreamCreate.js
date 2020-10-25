import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux"; // allows for connecting action creator
import { createStream } from "../../actions"; //importing named function from actions

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    //destructured from meta prop
    if (touched && error) {
      return (
        <div className="ui error message">
          {" "}
          <div className="header"> {error} </div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    //console log to find properties of these
    //{formerly formProps}
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label> <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }; //meta is for the error message

  onSubmit = (formValue) => {
    this.props.createStream(formValue); //call Action Creater createStream and run it
  }; // no need for preventDefault - call handleSubmit(redux function passed in props) & pass in onsubmit(values passed in)

  //to turn in to controlled input need to pass in data/values etc ie formProps - onchange handler etc built in so dont have to call it separately
  render() {
    return (
      <form
        className="ui form error" //need to add error className or else semantic UI display:none for error messages
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary"> Submit </button>
      </form>
    );
  }
}
//name of property going to manage - name prop is mandatory as is component or else error
//Field component doesnt know how to render input element - just a component thats part of the redux form system but doesnt know anything on its own
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
}; //validation function - if {} returnded = no erros - otherwise errors{title: "error message"} = error to display

// export default reduxForm({
//   form: "streamCreate",
//   validate: validate,
// })(StreamCreate);

const formWrapped = reduxForm({
  form: "streamCreate",
  validate: validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);

//create formWrapped instead of export default redux form as allows us to add connect function -
//could also have wrapped redux form in () after connect

// must add errors to state - redux form looks at every rendered field -
//if field has same name as property in errors object -
//redux form takes error message and passes to renderInput function for every field created
//the connection that gets it into renderInput is title/description etc(name of field)

//similar to connect function -
//reduxForm receives single object and put config in there
//form name is generally whatever the purpose of the form is
