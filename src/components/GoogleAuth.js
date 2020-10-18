import React from 'react';

class GoogleAuth extends React.Component {
    state = {isSignedIn: null}
    componentDidMount(){
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({clientId: "790458747890-f1ucrqihp2603t4nebbciken2gei68ln.apps.googleusercontent.com", 
            scope: "email"}).then(() => { 
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        } ); //Loading up client portion of the library + callback for when loading process is complete (takes time) ie only called after loaded - async request and want notice for when its done - .then
    }   //.then only occurs when lib has been loaded up and initialised 
    
    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    } //called anytime sign in status changes

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.state.isSignedIn ===null ){
            return null;
        } else if (this.state.isSignedIn === true) {
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

export default GoogleAuth;