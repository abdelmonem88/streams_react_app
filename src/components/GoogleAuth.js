import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
 componentDidMount() {
  window.gapi.load("client:auth2", () => {
   window.gapi.client
    .init({
     clientId:
      "467567946092-caflbetqtdtbn43t13rv241do657d2ue.apps.googleusercontent.com",
     scope: "email",
    })
    .then(() => {
     this.auth = window.gapi.auth2.getAuthInstance();
     this.onAuthChange(this.auth.isSignedIn.get());
     this.auth.isSignedIn.listen(this.onAuthChange);
    });
  });
 }

 onAuthChange = (isSignedIn) => {
  if (isSignedIn) {
   this.props.signIn(this.auth.currentUser.get().getId());
  } else {
   this.props.signOut();
  }
 };

 onSignInClicked = () => {
  this.auth.signIn();
 };

 onSignOutClicked = () => {
  this.auth.signOut();
 };

 renderAuthButton() {
  if (this.props.isSignedIn === null) {
   return null;
  } else if (this.props.isSignedIn) {
   return (
    <div>
     <button className='ui red google button' onClick={this.onSignOutClicked}>
      <i className='google icon'></i>
      Sing out!
     </button>
    </div>
   );
  } else {
   return (
    <div>
     <button className='ui red google button' onClick={this.onSignInClicked}>
      <i className='google icon'></i>
      Sing in with google!
     </button>
    </div>
   );
  }
 }

 render() {
  return <div>{this.renderAuthButton()}</div>;
 }
}

const mapStateToProps = (state) => {
 return {
  isSignedIn: state.auth.isSignedIn,
 };
};

export default connect(mapStateToProps, {
 signIn,
 signOut,
})(GoogleAuth);
