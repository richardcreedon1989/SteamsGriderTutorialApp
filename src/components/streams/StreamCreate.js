import React from 'react';
import {Field, reduxForm} from "redux-form"; 


class StreamCreate extends React.Component {

    renderInput({input, label, meta}) { //{formerly formProps}
        return ( <div className="field"> <label>{label}</label> <input {...input}/> <div> {meta.error} </div> </div>  ) 

    }

    onSubmit(formValue) {
        console.log(formValue)
    } // no need for preventDefault - call handleSubmit(redux function passed in props) & pass in onsubmit(values passed in)
 
    //to turn in to controlled input need to pass in data/values etc ie formProps - onchange handler etc built in so dont have to call it separately 
    render() {
        return ( <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name="title" component={this.renderInput} label="Enter Title" />  
            <Field name="description" component={this.renderInput} label="Enter Description" />
            <button className="ui button primary"> Submut </button>
        </form> ) 
    }
}
//name of property going to manage - name prop is mandatory as is component or else error
//Field component doesnt know how to render input element - just a component thats part of the redux form system but doesnt know anything on its own
const validate = (formValues) => {
    const errors ={};
    if(!formValues.title) {
        errors.title = "You must enter a title"
    } 

    if(!formValues.description) {
        errors.description = "You must enter a description"
    }

    return errors;
} //validation function - if {} returnded = no erros - otherwise errors{title: "error message"} = error to display

export default reduxForm({
    form: "streamCreate",
    validate: validate
})(StreamCreate)   // must add errors to state - redux form looks at every rendered field - 
//if field has same name as property in errors object - 
//redux form takes error message and passes to renderInput function for every field created 
//the connection that gets it into renderInput is title/description etc(name of field)

//similar to connect function - 
//reduxForm receives single object and put config in there
//form name is generally whatever the purpose of the form is