//const add = require("./index");

import { add } from "./index";

describe("test cases related to add method",()=>{
  test('takes input of type String pattern "1,2" and return addition of digits by splitting given string by ,', () => {
    expect(add("1,2")).toBe(3);
  })
  test('takes input of type String pattern "1\n2\n3" and return addition of digits by splitting given string by \n', () => {
    expect(add("1\n2\n3")).toBe(6);
  })
  test('takes input of type String pattern "//;\n1;2;9" and return addition of digits by splitting given string by //[delimiter]', () => {
    expect(add("//;\n1;2;9")).toBe(12);
  })
  test('takes input of type String pattern ""', () => {
    expect(add("")).toBe(0);
  })
  test('takes input of type String pattern "-1,-8"', () => {
    expect(add("-1,-8")).toEqual("Input has invalid values, negative values: "+[-1,-8]);
  })
  test('takes input of type String pattern "1,\n2\n3" of "Invalid Input"', () => {
    expect(add("1,\n2\n3" )).toMatch("Invalid Input");
  })
})