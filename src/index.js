import React from 'react';
import reactDOM from 'react-dom';

 class App extends React.Component{
     constructor(props){
         super(props);
        // Only here set the state
         this.state = {lat: null};

         window.navigator.geolocation.getCurrentPosition(
             (position) => {
                 // called SetState for update
                 this.setState({ lat: position.coords.latitude});
             },
             (err) => console.log(err)

         )
     }

     render(){
         return <div>Latitude: {this.state.lat}</div>
     }
 }

reactDOM.render(
    <App />, 
    document.getElementById("root")
);
