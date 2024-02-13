//const add = require("./index");

import { add } from "./index";

describe("test cases related to add method",()=>{
  test('takes input of type String pattern "1,2" and return addition of digits by splitting given string by ,', () => {
    expect(add("1,2")).toBe(3);
  })
  test('takes input of type String pattern "1\n2\n3" and return addition of digits by splitting given string by \n', () => {
    expect(add("1\n2\n3")).toBe(6);
  })
})