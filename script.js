let content = document.querySelector("#content")

let firstPerson = document.querySelector("#first")

let secondPerson = document.querySelector("#second")

let thirdPerson = document.querySelector("#third")

let fourthPerson = document.querySelector("#fourth")

firstPerson.onclick = function(event){
    event.preventDefault()

    content.innerHTML = ""

    let newDiv = document.createElement("div");

    let newp1 = document.createElement("p");
    newp1.innerHTML = ("My name is " + info[0].firstName + " " + info[0].lastName);
    
    let newp2 = document.createElement("p");
    newp2.innerHTML = ("My height is " + info[0].heightFeet + " feet " + info[0].heightInches + " inches");
    
    let newp3 = document.createElement("p");
    newp3.innerHTML = ("My favorite food is " + info[0].favoriteFood + " and color is " + info[0].favoriteColor);

    newDiv.style.color = "white";
    newDiv.style.margin = "5% 20% 5% 20%";
    newDiv.style.fontSize = "50px";
    newDiv.style.padding = "30px";
    newDiv.style.border = "solid black 5px";

    newDiv.appendChild(newp1);
    newDiv.appendChild(newp2);
    newDiv.appendChild(newp3);
    content.appendChild(newDiv);
}

secondPerson.onclick = function(event){
    event.preventDefault()

    content.innerHTML = ""

    let newDiv = document.createElement("div");

    let newp1 = document.createElement("p");
    newp1.innerHTML = ("My name is " + info[1].firstName + " " + info[1].lastName);
    
    let newp2 = document.createElement("p");
    newp2.innerHTML = ("My height is " + info[1].heightFeet + " feet " + info[1].heightInches + " inches");
    
    let newp3 = document.createElement("p");
    newp3.innerHTML = ("My favorite food is " + info[1].favoriteFood + " and color is " + info[1].favoriteColor);

    newDiv.style.color = "white";
    newDiv.style.margin = "5% 20% 5% 20%";
    newDiv.style.fontSize = "50px";
    newDiv.style.padding = "30px";
    newDiv.style.border = "solid black 5px";

    newDiv.appendChild(newp1);
    newDiv.appendChild(newp2);
    newDiv.appendChild(newp3);
    content.appendChild(newDiv);
}

thirdPerson.onclick = function(event){
    event.preventDefault()
    
    content.innerHTML = ""

    let newDiv = document.createElement("div");

    let newp1 = document.createElement("p");
    newp1.innerHTML = ("My name is " + info[2].firstName + " " + info[2].lastName);
    
    let newp2 = document.createElement("p");
    newp2.innerHTML = ("My height is " + info[2].heightFeet + " feet " + info[2].heightInches + " inches");
    
    let newp3 = document.createElement("p");
    newp3.innerHTML = ("My favorite food is " + info[2].favoriteFood + " and color is " + info[2].favoriteColor);

    newDiv.style.color = "white";
    newDiv.style.margin = "5% 20% 5% 20%";
    newDiv.style.fontSize = "50px";
    newDiv.style.padding = "30px";
    newDiv.style.border = "solid black 5px";

    newDiv.appendChild(newp1);
    newDiv.appendChild(newp2);
    newDiv.appendChild(newp3);
    content.appendChild(newDiv);
}

fourthPerson.onclick = function(event){
    event.preventDefault()

    content.innerHTML = ""

    let newDiv = document.createElement("div");

    let newp1 = document.createElement("p");
    newp1.innerHTML = ("My name is " + info[3].firstName + " " + info[3].lastName);
    
    let newp2 = document.createElement("p");
    newp2.innerHTML = ("My height is " + info[3].heightFeet + " feet " + info[3].heightInches + " inches");
    
    let newp3 = document.createElement("p");
    newp3.innerHTML = ("My favorite food is " + info[3].favoriteFood + " and color is " + info[3].favoriteColor);

    newDiv.style.color = "white";
    newDiv.style.margin = "5% 20% 5% 20%";
    newDiv.style.fontSize = "50px";
    newDiv.style.padding = "30px";
    newDiv.style.border = "solid black 5px";

    newDiv.appendChild(newp1);
    newDiv.appendChild(newp2);
    newDiv.appendChild(newp3);
    content.appendChild(newDiv);
}

let info = {
    0: {
        firstName: "Francisco",
        lastName: "Bermúdez",
        heightFeet: "6",
        heightInches: "3",
        favoriteFood: "pupusas",
        favoriteColor: "pink",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    1: {
        firstName: "Justin",
        lastName: "Perez",
        heightFeet: "5",
        heightInches: "10",
        favoriteFood: "Tacos de Longaniza",
        favoriteColor: "green",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    2: {
        firstName: "Karime",
        lastName: "Perez",
        heightFeet: "5",
        heightInches: "2",
        favoriteFood: "Torta de Camaron",
        favoriteColor: "black",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    3: {
        firstName: "Filogonia",
        lastName: "Perez",
        heightFeet: "4",
        heightInches: "11",
        favoriteFood: "Carnitas",
        favoriteColor: "pink",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
}