//Q.8

function ask(question,yes,no){
    if(confirm(question)) yes()
    else no();
}
//using arrow function
ask(
    "do you agree ?",
    () =>{alert("you agreed.")},
    () =>{alert("you canceled the execution.")},
);