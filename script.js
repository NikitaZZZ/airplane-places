
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
const isMobile = navigator.userAgentData.mobile; //resolves true/false

isMobile ? showPlaceOnMobileDevices() : addListenersToPads();

function showPlaceOnMobileDevices() {
    for (let i = 0; i < allPassangers.length; i++) {
        const passanger = document.getElementsByClassName("passanger")[i];
        const row = i < 84 ? Math.floor(i / 3)+1 : Math.floor(i / 3) - 27;
    
        this.innerHTML = `<p>${row}${passanger.id}</p>`;
    }
}

function addListenersToPads() {
    for (let i = 0; i < allPassangers.length; i++) {
        const passanger = document.getElementsByClassName("passanger")[i];
        const row = i < 84 ? Math.floor(i / 3)+1 : Math.floor(i / 3) - 27;
    
        passanger.addEventListener("mouseover", function () {
            this.innerHTML = `<p>${row}${passanger.id}</p>`;
        });
        
        passanger.addEventListener("mouseout", function () { this.innerHTML = ``; })
    
        passanger.addEventListener("click", function () { 
            setPlace(row, passanger.id);
        });
    }
}

function setPlace(numberRowPlace, numberColumnPlace) { 
    const place = `${numberRowPlace}${numberColumnPlace}`;
    const yourPlace = document.getElementById('your-place');
    yourPlace.innerHTML = `Ваше место: ${place}`;

    localStorage.setItem('place', place);
}