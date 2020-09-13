import { shallow, mount, render, configure } from "enzyme";
import CardList from "./CardList";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import "../setupTests";
configure({ adapter: new Adapter() });
it("expect to render Card component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: "JohnJohn",
      email: "john@gmail.com",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
