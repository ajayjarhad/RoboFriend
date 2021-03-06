import React from "react";
import { shallow, mount, render } from "enzyme";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <img src={`https://robohash.org/${id}?300x300`} alt="Kittens"></img>
      </div>
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
