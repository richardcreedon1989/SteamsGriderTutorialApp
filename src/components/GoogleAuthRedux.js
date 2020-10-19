import React from 'react';
import {connect} from "react-redux";
import {signIn, signOut} from "../actions";


class GoogleAuthRedux extends React.Component {
    componentDidMount(){
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({clientId: "790458747890-f1ucrqihp2603t4nebbciken2gei68ln.apps.googleusercontent.com", 
            scope: "email"}).then(() => { 
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get()) //dispatch initial actions when lib loaded to figure out if signed in or not
                this.auth.isSignedIn.listen(this.onAuthChange) //.listen passes in Boolean to onAuthChange
            })
        } ); //Loading up client portion of the library + callback for when loading process is complete (takes time) ie only called after loaded - async request and want notice for when its done - .then
    }   //.then only occurs when lib has been loaded up and initialised 
    
    //isSingedIn is a boolean passed from isSingedIn.listen
    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    } //called anytime sign in status changes

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.props.isSignedIn ===null ){
            return "null";
        } else if (this.props.isSignedIn) {
            return <button className="ui red google button" onClick={this.onSignOutClick}>
                 <i className="google icon"> Sign Out </i>
                  </button>
        } else {
            return <button className="ui red google button" onClick={this.onSignInClick}> <i className="google icon"> Sign in with Google </i> </button> 
        }
    } //helper method
    render(){
    return <div> {this.renderAuthButton()}</div> 
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
}
export default connect(mapStateToProps, {signIn, signOut}) (GoogleAuthRedux); // null as first value as mapStateToProps not wired up