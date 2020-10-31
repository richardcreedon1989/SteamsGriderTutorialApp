import React from "react";
import { connect } from "react-redux"; // allows for connecting action creator
import { createStream } from "../../actions"; //importing named function from actions
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValue) => {
    this.props.createStream(formValue); //call Action Creater createStream and run it
  }; // no need for preventDefault - call handleSubmit(redux function passed in props) & pass in onsubmit(values passed in)

  //to turn in to controlled input need to pass in data/values etc ie formProps - onchange handler etc built in so dont have to call it separately
  render() {
    return (
      <div>
        <h3> Create a Stream </h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
