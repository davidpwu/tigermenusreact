import React from "react";
import {shallow} from "enzyme";
import Menus from "./menus.component";

test("render Menus component", () => {
  expect(shallow(<Menus />)).toMatchSnapshot();
});
