console.log("Hi, meka! Checking.")

for(let currNumber = 1; currNumber <= 100; currNumber++){
    if(currNumber % 5 == 0 && currNumber % 7 == 0){
        console.log("ChickenMonkey");
    }else if(currNumber % 5 == 0){
        console.log("Chicken");
    }else if(currNumber % 7 == 0){
        console.log("Monkey");
    }else{
        console.log(currNumber);
    }
}