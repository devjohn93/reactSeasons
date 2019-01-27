import React from 'react';
import reactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

 class App extends React.Component{
     //This thing same as constructor
     state = {lat: null, error: ''}

     componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude}),
            (err) => this.setState({error: err.message})
        )
     }

     render(){
         if(this.state.error && !this.state.lat){
             return <div>{this.state.error}</div>
         }
         if(!this.state.error && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
         }
         return <div>Loading</div>
     }
 }

reactDOM.render(
    <App />, 
    document.getElementById("root")
);
