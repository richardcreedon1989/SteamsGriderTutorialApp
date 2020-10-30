import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  } //need to fetch the stream first so that the stream: state.streams will appear as an object

  render() {
    if (!this.props.stream) {
      return <div> Loading . . . </div>;
    }

    return <div> {this.props.stream.title} </div>;
  }
}

//each component should be compartamentalised so need to fetch the list on mount rather than through the  object passed in Lesson 354/355

// const StreamEdit = (props) => {
//   return <div> StreamEdit </div>;
// }; refactoring to class so can use lifecycle to fetch the stream

const mapStateToProps = (state, ownProps) => {
  // two arguments can be passed in - ownProps reference to props object that shows up in streamEdit component

  return { stream: state.streams[ownProps.match.params.id] }; // [bracket notation] - finds the stream with id matching the id in the []
}; //mapState also now shows in props so above will be there

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
