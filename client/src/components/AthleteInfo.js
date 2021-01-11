import React from "react";
import { Link } from "react-router-dom";

class AthleteInfo extends React.Component {
    render() {
        let { _id, imgUrl, name, sports } = this.props.athlete;
        return (
            <div className="card m-3 singleAthleteInfo">
                <div className="card-body">
                    <img src={imgUrl} className="card-title float-left resizeImageInList" roundedCircle />
                    <Link className="card-title float-left" to={"/profile/" + _id}>
                        <h5>{ name }</h5>
                    </Link>
                    <small className="card-text text-muted float-right">{ sports.map(sport => sport + ", ") }</small>
                </div>
            </div>
        );
    };
};

export default AthleteInfo;