import {dungeon } from "../../dungeon.js";

test("hero passed trail 1 and trail 2",() => {
    expect (dungeon({
        hero:"π¦ΈββοΈ",
        strength:90,
        iq:100,
    })).toBe("π¦ΈββοΈβοΈπ°ππ");
})
test("hero passed trail 1 and fails trail 2",()=>{
    expect (dungeon({
        hero:"π¨βπ¦±",
        strength:90,
        iq:70,  
    })).toBe("π¨βπ¦±βοΈπ₯");
})
test("hero fails trail 1 and passes trail 2",()=>{
    expect (dungeon({
        hero:"π§",
        strength:40,
        iq:120,  
    })).toBe("π§ππ°ππ");
})
test("hero fails trail 1 and trail 2",()=>{
    expect (dungeon({
        hero:"π¨",
        strength:30,
        iq:70,  
    })).toBe("π");
})