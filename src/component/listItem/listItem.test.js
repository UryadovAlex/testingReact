import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../Utils";
import ListItem from "./index";

describe("ListItem Component", () => {
  describe("Checking Props", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        title: "Example title",
        desc: "Some text",
      };

      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const expectedProps = {
        title: "Example title",
        desc: "Some text",
      };
      wrapper = shallow(<ListItem {...expectedProps} />);
    });

    it("Should render without errors", () => {
      const component = findByTestAtrr(wrapper, "listItemCOmponent");
      expect(component.length).toBe(1);
    });

    it("Should render a title", () => {
      const component = findByTestAtrr(wrapper, "componentTitle");
      expect(component.length).toBe(1);
    });

    it("Should Render a description", () => {
      const component = findByTestAtrr(wrapper, "componentDesc");
      expect(component.length).toBe(1);
    });
  });

  describe("Should NOT render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Some text",
      };

      wrapper = shallow(<ListItem {...props} />);
    });

    it("Component is not rendered", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
