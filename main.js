//Sneck 1

document.getElementById("btn__sneck1").addEventListener("click", () => {
    let x = document.getElementById("sneck1__input").value;
    let result = document.getElementById("sneck1__result");
    if(x.length <= 6){
        document.getElementById("sneck1__error").classList.remove("error");
        if(x == "" || x == null|| x == 0)
            return result.innerHTML = "";
        else if(Number(x))
            return result.innerHTML = "Number";
        else if(x === "true" || x === "false")
            return result.innerHTML = "Boolean";
        else
            return result.innerHTML = typeof(x);
    }
    else{
        document.getElementById("sneck1__error").classList.add("error");
        return result.innerHTML = "La variabile inserita non è valida";
    }   
});

//Sneck 2

document.getElementById("btn__sneck2").addEventListener("click", () => {
    let y = document.getElementById("sneck2__input").value;
    let result = document.getElementById("sneck2__result");
    if(Number(y) && y.length <= 3 && y > 0){
        let z = 0;
        for(let i = 1; i <= y; i++){
            z = z + i;
            console.log(z);
        }
        document.getElementById("sneck2__error").classList.remove("error");
        return result.innerHTML = z;
    }
    else{
        document.getElementById("sneck2__error").classList.add("error");
        return result.innerHTML = "La variabile inserita non è valida";
    }
});

//Sneck 3

const fruits = ['apple','orange','banana','pineapple','kiwi'];
let filterFruits = [];

function filterFruitsLen(){
    for (i = 0; i < fruits.length; i++){
        if(fruits[i].length > 5){
            filterFruits.push(fruits[i]);
        }
    }
    return document.getElementById("sneck3A__result").innerHTML = filterFruits;
}
filterFruitsLen();

let filterFruitsLet = fruits.map(elem => {    
    return elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase();
});
document.getElementById("sneck3B__result").innerHTML = filterFruitsLet;

//Sneck 4

let users = [
    {
        name:'Albert',
        surname:'Williams',
        age:28
    },
    {
        name:'Max',
        surname:'Smith',
        age:35
    },
    {
        name:'Angel',
        surname:'Freed',
        age:23
    },
    {
        name:'Luis',
        surname:'Red',
        age:33
    },
]

let userArr = [];
let middleAge = 0;

users.forEach(function(user){
    userArr.push(user.name);
    middleAge += user.age;
    return true; 
});
middleAge = middleAge / users.length;

document.getElementById("sneck4A__result").innerHTML = userArr;
document.getElementById("sneck4B__result").innerHTML = middleAge;