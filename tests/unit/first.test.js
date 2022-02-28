import {sum } from "../../dungeon.js";
test("adds 1 + 3 equal 4",()=>{
    expect (sum(1,3)).toBe(4);
})
test("adds -2 + -3 equal -5",()=>{
    expect (sum(-2,-3)).toBe(-5);
})