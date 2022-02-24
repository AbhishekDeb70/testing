export function sum(a,b){
    return a+b;
}
export function dungeon(Boy){
if(Boy.strength > 50 && Boy.iq > 90)
    return("🦸‍♂️⚔️💰💍👑");
else if(Boy.strength > 50 && Boy.iq < 90)
return("👨‍🦱⚔️🏥"); 
else if(Boy.strength < 50 && Boy.iq > 90)
return("🧑🐍💰💍👑");
else 
return("💀");
}