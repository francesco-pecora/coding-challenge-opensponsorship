import React from "react";

class Summary extends React.Component{
    render(){

        let { 
            name, 
            sports, 
            gender, 
            birthDate, 
            description, 
            location, 
            team 
        } = this.props.athlete;

        return(
            <div>
                <h4>Summary</h4>
                <div>
                    <p>Name: { name }</p>
                    <p>Sports: { sports.map(sport => sport.sport + ", ") }</p>
                    <p>Gender: { gender }</p>
                    <p>Date of Birth: { birthDate }</p>
                    <p>Description: { description }</p>
                    <p>Location: { location }</p>
                    <p>Team: { team }</p>
                </div>
            </div>
        );
    };
};

export default Summary;