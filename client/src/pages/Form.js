import React from "react";
import BasicInfo from "./formSections/BasicInfo";
import About from "./formSections/About";
import Summary from "./formSections/Summary";
import { Redirect } from 'react-router-dom';

class Form extends React.Component{

    state = {
        name: "",
        sports: [],
        gender: "",
        birthDate: "",
        description: "",
        location: "",
        team: "",
        formSubmitted: false,
    };

    setAthleteInfo = (info) => {
        this.setState(info);
    };

    createNewAthlete = async (event) => {
        event.preventDefault();
        
        let postRequestConfig = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };
        try {
            await fetch("/api/athlete", postRequestConfig);
            this.setState({ formSubmitted: true })
        } catch (err) {
            alert(`[ERROR] Error occurred while posting an athlete \n${err}`)
        }
    };

    render(){

        if (this.state.formSubmitted) {
            return <Redirect to={"/athletes"} />;
        }

        return(
            <form className="formContainer" onSubmit={ this.createNewAthlete.bind(this) }>
                <h1 className="text-light m-5">New Athlete Form</h1>
                <div className="form">
                    <BasicInfo  setAthleteInfo={ this.setAthleteInfo.bind(this) }/>
                    <About setAthleteInfo={ this.setAthleteInfo.bind(this) }/>
                </div>
                <div className="sticky-top runningSummary sectionContainer">
                    <div className="sticky-top">
                        <Summary athlete={this.state} />
                        <button className="btn btn-dark" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        );
    };
};

export default Form;