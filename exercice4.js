let compt = 0;
function test(a,b){
    let eq = (a==b);
    let strictEQ = (a===b);
    console.log(a + "=="+ b +"->"+eq+ "|" + a +"===" +b+ "->"+ strictEQ);

    if(eq !== strictEQ){
        compt ++;
    }
}

test(0, "");
test(0, "0");
test(0, false);
test("", false);
test(null, undefined);
test(null, false);
test(NaN, NaN);
test(1, "1");

console.log("---");
console.log(compt + " paire(s) où == et === donnent des résultats différents.");