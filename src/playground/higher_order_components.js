// Higher Order Component (HOC) = a component (HOC) that renders another component
// reuse code
// render hijacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p></p>
        <p>Details: {props.details}</p>
    </div>
);


// regular function
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.reveal && <p>This is private info. Please do not share.</p>}
            <WrappedComponent {...props} />
        </div>
    );
}

// returns an alt version of Info Component as a HOC
 const HOCAdminInfo = withAdminWarning(Info);


// regular function
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? 
                (<WrappedComponent {...props} />) 
                : (<p>Please login to view info.</p>)
            }
        </div>
    );
};
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={false} details="Good morning!"/>, document.getElementById("box"));



// ReactDOM.render(<HOCAdminInfo reveal={false} details="Good morning!"/>, document.getElementById("box"));

