import React from 'react';

const SeasonDisplay = () => {
    // get the current user position
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    )
    return <div>Seasons</div>
}

export default SeasonDisplay;