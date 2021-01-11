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
                <h3>Summary</h3>
                <div>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <h5 className="float-left">Name: </h5>
                            <p className="float-right">{ name }</p>
                        </li>
                        <li className="list-group-item">
                            <h5 className="float-left">Sports: </h5>
                            <p className="float-right">{ sports.map(sport => sport.sport + ", ") }</p>
                        </li>
                        <li className="list-group-item">
                            <h5 className="float-left">Gender: </h5>
                            <p className="float-right">{ gender }</p>
                        </li>
                        <li className="list-group-item">
                            <h5 className="float-left">Date of Birth: </h5>
                            <p className="float-right">{ birthDate.slice(0, 10) }</p>
                        </li>
                        <li className="list-group-item breakWords">
                            <h5 className="float-left">Description: </h5>
                            <p className="float-right">{ description }</p>
                        </li>
                        <li className="list-group-item">
                            <h5 className="float-left">Location: </h5>
                            <p className="float-right">{ location }</p>
                        </li>
                        <li className="list-group-item">
                            <h5 className="float-left">Team: </h5>
                            <p className="float-right">{ team }</p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
};

export default Summary;