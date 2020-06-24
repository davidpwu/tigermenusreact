import React from "react";
import {shallow} from "enzyme";
import DiningHallMenu from "./dining-hall-menu.component";

test("render DiningHallMenu component", () => {
  expect(shallow(<DiningHallMenu diningHallName={"scully"} diningHallFoodData={[]} />)).toMatchSnapshot();
});
