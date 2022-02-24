import {dungeon } from "../../index.js";

test("hero passed trail 1 and trail 2",() => {
    expect (dungeon({
        hero:"🦸‍♂️",
        strength:90,
        iq:100,
    })).toBe("🦸‍♂️⚔️💰💍👑");
})
test("hero passed trail 1 and fails trail 2",()=>{
    expect (dungeon({
        hero:"👨‍🦱",
        strength:90,
        iq:70,  
    })).toBe("👨‍🦱⚔️🏥");
})
test("hero fails trail 1 and passes trail 2",()=>{
    expect (dungeon({
        hero:"🧑",
        strength:40,
        iq:120,  
    })).toBe("🧑🐍💰💍👑");
})
test("hero fails trail 1 and trail 2",()=>{
    expect (dungeon({
        hero:"👨",
        strength:30,
        iq:70,  
    })).toBe("💀");
})