const symbols = [['A', 'B', 'C'], ['D', 'E', 'F']]

window.onload = function () {
    const lcPlace = localStorage.getItem('place');
    const yourPlace = document.getElementById('your-place');

    yourPlace.innerHTML = lcPlace == null ? 'Выберите место' : `Ваше место: ${lcPlace}`;
}

function generateRow(trys, divs = []) {
    for (let k = 0; k < trys; k++) {
        const div = document.getElementById(divs[k])
        
        for (let i = 0; i < 28; i++) {
            const parentDiv = document.createElement('div');
            parentDiv.className = "parentDiv";
            
            for (let j = 0; j < 3; j++) {
                const passanger = document.createElement('div');

                passanger.className = "passanger";
                passanger.id = symbols[k][j];
                parentDiv.appendChild(passanger);
            }
        
            div.appendChild(parentDiv);
        }
    }
}

generateRow(2, ["passangers-left-side", "passangers-right-side"]);

const allPassangers = document.getElementsByClassName("passanger");

// const row = document.getElementById("row");
// for (let i = 1; i < 29; i++) {
//     const p = document.createElement("p");
//     p.innerText = i;
//     p.className = "row-number";

//     row.appendChild(p);
// }

for (let i = 0; i < allPassangers.length; i++) {
    const passanger = document.getElementsByClassName("passanger")[i];

    passanger.addEventListener("mouseover", function () {
        this.innerHTML = `<p>${passanger.id}</p>`;
    });
    
    passanger.addEventListener("mouseout", function () { this.innerHTML = ``; })

    passanger.addEventListener("click", function () { 
        setPlace(i < 84 ? Math.floor(i / 3)+1 : Math.floor(i / 3) - 27, passanger.id);
    });
}

function setPlace(numberRowPlace, numberColumnPlace) { 
    const place = `${numberRowPlace}${numberColumnPlace}`;
    const yourPlace = document.getElementById('your-place');
    yourPlace.innerHTML = `Ваше место: ${place}`;

    localStorage.setItem('place', place);
}