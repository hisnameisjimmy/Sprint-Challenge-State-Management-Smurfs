import React from "react";
import {connect} from "react-redux";
import { getSmurfs } from "../actions";
import { Smurf } from "./Smurf.js";

const SmurfList = props => {

    console.log(props);
    const fetchSmurfs = e => {
        e.preventDefault();
        props.getSmurfs();
    };

    return (
      <div>
        {props.isFetching ? (
          <>
            <div>Loading...</div>
          </>
        ) : (
          <>
            {console.log(props.smurfs)}
            {props.smurfs.map(smurf => {
                    console.log(smurf);
                    return <Smurf key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} />
                })}
          </>
        )}

        <button onClick={fetchSmurfs}>Fetch Smurfs!</button>
      </div>
    );
}

const MapStateToProps = state => {
    return {
      isFetching: state.isFetching,
      error: state.error,
      smurfs: state.smurfs
    };
};

export default connect(MapStateToProps, { getSmurfs })(SmurfList);