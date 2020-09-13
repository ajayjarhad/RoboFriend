import { shallow, mount, render, configure } from "enzyme";
import App from "./App";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import "../setupTests";
configure({ adapter: new Adapter() });
it("expect to render Card component", () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
