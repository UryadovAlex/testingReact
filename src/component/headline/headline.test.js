import React from "react";
import { shallow } from "enzyme";
import Headline from "../headline";
import { findByTestAtrr, checkProps } from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("check Prop Types", () => {
    it("Shoul not throw warning", () => {
      const expectedProps = {
        header: "Test header",
        desc: "Test desc",
        tempArr: [
          {
            fName: "Alex",
            lName: "Uryadov",
            email: "alex@gmail.com",
            age: 34,
            onlineStatus: true,
          },
        ],
      };
      const propsErr = checkProps(Headline, expectedProps);

      expect(propsErr).toBeUndefined();
    });
  });
  describe("Have props", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: "Test header",
        desc: "Test description",
      };
      wrapper = setUp(props);
    });

    it("should render without errors", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it("shoul render H1", () => {
      const component = findByTestAtrr(wrapper, "header");
      expect(component.length).toBe(1);
    });

    it("should render desc", () => {
      const component = findByTestAtrr(wrapper, "description");
      expect(component.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setUp();
    });

    it("should not render", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
