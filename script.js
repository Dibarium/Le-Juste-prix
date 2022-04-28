let counter = 0

function play(){
    counter ++
    let userinput = document.getElementById("numberinput").value;
    console.log(userinput);
    if (userinput == randomnumber){
        document.getElementById('output').innerHTML = 'Bravo tu as gagné en '+counter+' coups';
    }
    else if (userinput > randomnumber){
        document.getElementById('output').innerHTML = 'Cest trop grand';
    }
    else if (userinput < randomnumber){
        document.getElementById('output').innerHTML = 'Cest trop petit';
    }
}

function newgame(){
    document.getElementById('output').innerHTML = 'coucou';
    randomnumber = Math.floor(Math.random() * 101);
    counter = 0
}

randomnumber = Math.floor(Math.random() * 101);
console.log(randomnumber);