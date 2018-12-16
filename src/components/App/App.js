import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MeshUpload from "../MeshUpload/MeshUpload";
import Viewer from '../Viewer/Viewer';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <MeshUpload /> 
          <Viewer />
          <Viewer />
          <Viewer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
