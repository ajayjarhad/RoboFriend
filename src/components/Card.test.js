import { shallow, mount, render, configure } from "enzyme";
import Card from "./Card";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import "../setupTests";
configure({ adapter: new Adapter() });
it("expect to render Card component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
