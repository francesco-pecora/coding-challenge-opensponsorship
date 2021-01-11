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

        if(!this.state.athletes){
            return(
                <div className="containerAthleteInfo">
                    <h1 className="text-light m-5">Athlete List</h1>
                    <p>The list is currenlty empty. Add a new athlete.</p>
                </div>
            );
        }

        let athletesComponents = [];
        this.state.athletes.forEach((athlete, idx) => {
            athletesComponents.push(<AthleteInfo athlete={athlete} key={idx}/>);
        });

        return(
            <div className="containerAthleteInfo">
                <h1 className="text-light m-5">Athlete List</h1>
                { athletesComponents }
            </div>
        );
    };
};

export default List;