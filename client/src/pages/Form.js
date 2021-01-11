import React from "react";
import BasicInfo from "./formSections/BasicInfo";
import About from "./formSections/About";
import Summary from "./formSections/Summary";

class Form extends React.Component{

    state = {
        name: "",
        sports: [],
        gender: "",
        birthDate: "",
        description: "",
        location: "",
        team: "",
    };

    setAthleteInfo = (info) => {
        this.setState(info);
    };

    createNewAthlete = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render(){
        return(
            <div className="formContainer">
                <div className="form">
                    <BasicInfo  setAthleteInfo={ this.setAthleteInfo.bind(this) }/>
                    <About setAthleteInfo={ this.setAthleteInfo.bind(this) }/>
                </div>
                <div className="sticky-top runningSummary sectionContainer">
                    <div className="sticky-top">
                        <Summary athlete={this.state} />
                        <button className="btn btn-dark" type="button" onClick={ this.createNewAthlete.bind(this) }>Submit</button>
                    </div>
                </div>
            </div>
        );
    };
};

export default Form;