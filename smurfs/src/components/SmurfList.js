import React, { useEffect, useState } from "react";
import {connect} from "react-redux";
import { getSmurfs, postSmurfs } from "../actions";
import { Smurf } from "./Smurf.js";

const SmurfList = props => {

    console.log(props);
    // const fetchSmurfs = e => {
    //     // e.preventDefault();
    //     props.getSmurfs();
    // };

    useEffect(() => {
      props.getSmurfs();
    }, props.isFetching);

    const [ newSmurf, setNewSmurf ] = useState({
      name: '',
      age: "",
      height: "",
      id: ""
    });

    const handleChange = e => {
      e.preventDefault(); 
      setNewSmurf({...newSmurf, [e.target.name]: e.target.value});
      console.log(e.target.name, e.target.value);
    }

    const postSmurf = e => {
      e.preventDefault();
      console.log(newSmurf);
      props.postSmurfs(newSmurf);
      setNewSmurf({
        name: "",
        age: "",
        height: "",
        id: ""
      });
    }

    return (
      <div>
        <form onSubmit={postSmurf}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={newSmurf.name}
            onChange={handleChange}
          />
          <input
            name="age"
            type="number"
            placeholder="Age"
            value={newSmurf.age}
            onChange={handleChange}
          />
          <input
            name="height"
            type="text"
            placeholder="Height"
            value={newSmurf.height}
            onChange={handleChange}
          />
          <input
            name="id"
            type="number"
            placeholder="ID"
            value={newSmurf.id}
            onChange={handleChange}
          />
          <button type="submit" onClick={postSmurf}>
            Post Smurf!
          </button>
        </form>
        {props.isFetching ? (
          <>
            <div>Loading...</div>
          </>
        ) : (
          <>
            {console.log(props.smurfs)}
            {props.smurfs.map(smurf => {
              console.log(smurf);
              return (
                <Smurf
                  key={smurf.id}
                  name={smurf.name}
                  age={smurf.age}
                  height={smurf.height}
                />
              );
            })}
          </>
        )}

        {/* <button onClick={fetchSmurfs}>Fetch Smurfs!</button> */}
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

export default connect(MapStateToProps, { getSmurfs, postSmurfs })(SmurfList);