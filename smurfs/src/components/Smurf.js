import React from "react";

export const Smurf = props => {
    
    return (
      <div>
        <section key={props.id}>
          <h2>Name: {props.name}</h2>
          <p>Age: {props.age}</p>
          <p>Height: {props.height}</p>
        </section>
      </div>
    );
}