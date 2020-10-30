import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdminOptions(stream) {
    //stream can be called anything here but need to pass in params to reference stream.userId
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>
            {" "}
            Edit{" "}
          </Link>
          <button className="ui button negative"> Delete </button>
        </div>
      );
    }
  }
  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdminOptions(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content"> {stream.title} </div>
          <div className="description"> {stream.description} </div>
        </div>
      );
    });
  }

  renderCreateOption() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        {" "}
        <h2>Streams </h2>{" "}
        <div className="ui celled list"> {this.renderList()} </div>
        {this.renderCreateOption()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //mapState sends state to this component - setting name of the state to currentUserId
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  }; //obj.values built in JS function, pulls out values and puts in to array - state.streams comes from reducer index.js
};

// turn streams in to array instead of object (how it comes in)
export default connect(mapStateToProps, { fetchStreams })(StreamList);
