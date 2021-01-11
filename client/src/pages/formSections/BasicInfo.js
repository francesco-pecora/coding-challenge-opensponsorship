import React from "react";
import { Multiselect } from 'multiselect-react-dropdown';
import sportService from "../../services/sportService";

class BasicInfo extends React.Component{
    
    state = {
        options: sportService.sports,
    };

    render(){
        return(
            <div className="sectionContainer">
                <h4>Basic Info</h4>
                <div>
                    <div className="spaceBetweenBlocks">
                        <label>Name</label>
                        <input  className="form-control" 
                                type="text" 
                                onChange={(e) => this.props.setAthleteInfo({ name: e.target.value })} 
                                id="name" 
                                name="name"></input>
                    </div>

                    <div className="spaceBetweenBlocks">
                        <label>Sport</label>
                        <Multiselect    options={this.state.options}
                                        onSelect={(sports) => this.props.setAthleteInfo({ sports: sports })}
                                        onRemove={(sports) => this.props.setAthleteInfo({ sports: sports })}
                                        displayValue="sport"
                                        />
                    </div>
                    
                    <div className="spaceBetweenBlocks">
                        <label>Gender</label><br/>
                        <div className="form-check form-check-inline">
                            <input  onChange={(e) => this.props.setAthleteInfo({ gender: e.target.value })} 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="inlineRadioOptions" 
                                    value="man" />
                            <label className="form-check-label" htmlFor="inlineRadio1">Man</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  onChange={(e) => this.props.setAthleteInfo({ gender: e.target.value })} 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="inlineRadioOptions" 
                                    id="inlineRadio2" 
                                    value="woman" />
                            <label className="form-check-label" htmlFor="inlineRadio2">Woman</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  onChange={(e) => this.props.setAthleteInfo({ gender: e.target.value })} 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="inlineRadioOptions" 
                                    id="inlineRadio3" 
                                    value="non-binary" />
                            <label className="form-check-label" htmlFor="inlineRadio3">Non Binary</label>
                        </div>
                    </div>

                    <div className="spaceBetweenBlocks">
                        <label>Date of Birth</label>
                        <input  className="form-control" 
                                type="date" 
                                onChange={(e) => this.props.setAthleteInfo({ birthDate: e.target.value })} 
                                id="birthDate" 
                                name="birthDate"></input>
                    </div>
                </div>
            </div>
        );
    };
};

export default BasicInfo;