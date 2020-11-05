import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  } // important as it fetchs the stream based on the URL so user can refresh or share the link and wil get to same place

  render() {
    if (!this.props.stream) {
      return <div> Loading </div>;
    }

    const { title, description } = this.props.stream;
    return (
      <div>
        <h1> {title} </h1> <h5> {description} </h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
