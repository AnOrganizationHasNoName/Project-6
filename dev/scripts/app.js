import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from "./landing-page";

class App extends React.Component {
    render() {
      return (
        <div>
          Hello
          <LandingPage />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
