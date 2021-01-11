import React from "react";

class About extends React.Component{
    render(){
        return(
            <div className="sectionContainer">
                <h3>About</h3>
                <div>
                    <div className="spaceBetweenBlocks">
                        <label>Description</label>
                        <textarea   className="form-control"
                                    onChange={(e) => this.props.setAthleteInfo({ description: e.target.value })} 
                                    id="description" 
                                    name="description" required/>
                    </div>

                    <div className="spaceBetweenBlocks">
                        <label>Location</label>
                        <input  className="form-control" 
                                type="text" 
                                onChange={(e) => this.props.setAthleteInfo({ location: e.target.value })} 
                                id="location" 
                                name="location" required/>
                    </div>

                    <div className="spaceBetweenBlocks">
                        <label>Team</label>
                        <input  className="form-control" 
                                type="text" 
                                onChange={(e) => this.props.setAthleteInfo({ team: e.target.value })} 
                                id="team" 
                                name="team" required/>
                    </div>

                    <div className="spaceBetweenBlocks">
                        <label>Image URL</label>
                        <input  className="form-control" 
                                type="text" 
                                onChange={(e) => this.props.setAthleteInfo({ imgUrl: e.target.value })} 
                                id="image" 
                                name="image" required/>
                    </div>
                </div>
            </div>
        );
    };
};

export default About;