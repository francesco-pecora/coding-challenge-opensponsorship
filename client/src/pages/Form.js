import React from "react";
import BasicInfo from "./formSections/BasicInfo";
import About from "./formSections/About";
import Summary from "./formSections/Summary";

class Form extends React.Component{

    state = {
        basicInfo: {},
        about: {},
    };

    setBasicInfoData = (basicInfo) => {
        this.setState({
            basicInfo: basicInfo
        });
    };

    setAboutData = (about) => {
        this.setState({
            about: about
        });
    };

    createNewAthlete = () => {
        alert("Athlete created!");
    };

    render(){
        return(
            <form onSubmit={ this.createNewAthlete.bind(this) }>
                <BasicInfo  setBasicInfoData={ this.setBasicInfoData.bind(this) }/>
                <About setAboutData={ this.setAboutData.bind(this) }/>
                <Summary />
                <input type="submit" value="Submit" />
            </form>
        );
    };
};

export default Form;