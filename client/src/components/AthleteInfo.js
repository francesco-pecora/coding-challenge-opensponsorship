import React from "react";
import { Link } from "react-router-dom";

class AthleteInfo extends React.Component {
    render() {
        let { id, name, gender } = this.props;
        return (
            <div className="card m-3 singleAthleteInfo">
                <div className="card-body">
                    <Link to={"/profile/" + id}>
                        <h5 className="card-title">{ name }</h5>
                        <small className="card-text text-muted">{ gender }</small>
                    </Link>
                </div>
            </div>
        );
    };
};

export default AthleteInfo;