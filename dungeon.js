export function sum(a,b){
    return a+b;
}
export function dungeon(Boy){
if(Boy.strength > 50 && Boy.iq > 90)
    return("π¦ΈββοΈβοΈπ°ππ");
else if(Boy.strength > 50 && Boy.iq < 90)
return("π¨βπ¦±βοΈπ₯"); 
else if(Boy.strength < 50 && Boy.iq > 90)
return("π§ππ°ππ");
else 
return("π");
}