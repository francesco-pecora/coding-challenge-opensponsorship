import React from "react";

class Profile extends React.Component{
    
    state = {
        athlete: {},
        athleteId: this.props.match.params.id,
    }

    componentDidMount = async () => {
        try {
            let athleteResponse = await fetch("/api/athlete/" + this.state.athleteId);
            let athlete = await athleteResponse.json();
            this.setState({ athlete: athlete });
        } catch (err) {
            alert(`[ERROR] Error occurred while loading the athlete profile \n${err}`);
        }
    }
    
    render(){

        let { name, sports, gender, birthDate, description, location, team, imgUrl } = this.state.athlete;

        if (!sports || !birthDate){
            sports = [];
            birthDate = "";
        }

        return(
            <div className="containerAthleteInfo">
                <h1 className="text-light m-5">Athelete Profile</h1>
                <div className="profileInfoOuter">
                    <div className="profileInfoLeft">
                        <div className="card boxShadow">
                            <img src={ imgUrl } className="card-img-top img-fluid resizeImageInProfile" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title">{ name }</h3>
                            </div>
                        </div>
                    </div>
                    <div className="profileInfoRight">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <h5 className="float-left">Name: </h5>
                                <p className="float-right">{ name }</p>
                            </li>
                            <li className="list-group-item">
                                <h5 className="float-left">Sports: </h5>
                                <p className="float-right">{ sports.map(sport => sport + ", ") }</p>
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
            </div>
        );
    };
};

export default Profile;