import React from 'react';
import reactDOM from 'react-dom';

 const App = () => {
     // get the current user position
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    )
  return (
    <div>
      Hi there!
    </div>
  )
}

reactDOM.render(
    <App />, 
    document.getElementById("root")
);
