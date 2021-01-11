import React from "react";
import AthleteInfo from "../components/AthleteInfo";

class List extends React.Component{
    
    state = {
        athletes: [],
    };

    componentDidMount = async () => {
        try {
            let athletesResponse = await fetch("/api/athlete");
            let athletes = await athletesResponse.json();
            this.setState({ athletes });
        } catch (err) {
            alert(`[ERROR] Error occurred trying to load athletes \n${err}`)
        }
    };
    
    render(){

        let athletesComponents = [];
        this.state.athletes.forEach((athlete, idx) => {
            console.log(athlete)
            athletesComponents.push(<AthleteInfo id={athlete._id} name={athlete.name} gender={athlete.gender} key={idx}/>);
        });

        return(
            <div className="containerAthleteInfo">
                { athletesComponents }
            </div>
        );
    };
};

export default List;