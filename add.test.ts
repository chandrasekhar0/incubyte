//const add = require("./index");

import { add } from "./index";

describe("test cases related to add method",()=>{
  test('takes input of type String pattern "1,2" and return addition of digits by splitting given string by ,', () => {
    expect(add("1,2")).toBe(3);
  })

})