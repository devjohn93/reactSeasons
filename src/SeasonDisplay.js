import "./seasonDisplay.css";
import React from 'react';



const seasonConfig = {
    summer: {
        text: 'Yeah go to the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Ohh its cold you have to chill',
        iconName:'snowflake'
    }
}

const seasons = (lat, month) => {
    if(month > 2 && month < 9 ){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const getSeason = seasons(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[getSeason];
    return (
        <div className={`season-display ${getSeason}`}>
            <i className= {`${iconName} icon-left icon massive`}></i>
            <div><h1>{text}</h1></div>
            <i className= {`${iconName} icon-right icon massive`}></i>
        </div>
    )
}

export default SeasonDisplay;