import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const stripClasses = html => html.replace(/ class="[^"]*"/g, '');

describe("Course List Row component test", () => {
  it("should render one cell with colspan = 2 when textSecondCell is null", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);

    expect(wrapper.find("tr").children()).toHaveLength(1);
    expect(stripClasses(wrapper.find("tr").childAt(0).html())).toEqual('<th colSpan="2">test</th>');
  });

  it("should render two cells when textSecondCell is not null", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);

    expect(wrapper.find("tr").children()).toHaveLength(2);
    expect(stripClasses(wrapper.find("tr").childAt(0).html())).toEqual('<td><input type="checkbox"/>test</td>');
    expect(stripClasses(wrapper.find("tr").childAt(1).html())).toEqual('<td>test</td>');
  });
});
