//set inital count
let count = 0;
let record = 0;

//selecting values and buttons from HTML
const countText = document.getElementById('counttext');
const eleven = document.getElementById('11');
const thirtyThree = document.getElementById('33');
const ninetyNine = document.getElementById('99');
const counterContainer = document.getElementById('countercontainer');
const streakText = document.getElementById('streaktext');
const streak = document.getElementById('streak');
const value = document.getElementById('value');
const reset = document.getElementById('reset');
const increase = document.getElementById('count');
const tasbihCount = document.getElementById('tasbihcount');

//functions which will run on click number count click events
const displayCounterContainer = () => {
    counterContainer.style.display = 'block';
    eleven.style.display = 'none';
    thirtyThree.style.display = 'none';
    ninetyNine.style.display = 'none';  
}

//set the text of the tasbih count 
const selectEleven = () => {
    countText.innerHTML = "Tasbih count: 11";
}

const selectThirtyThree = () => {
    countText.innerHTML = "Tasbih count: 33";
}

const selectNinetyNine = () => {
    countText.innerHTML = "Tasbih count: 99";
}
//click events for the counts
eleven.onclick = () => {
    selectEleven();
    displayCounterContainer();
}

thirtyThree.onclick = () => {
    selectThirtyThree();
    displayCounterContainer();
}

ninetyNine.onclick = () => {
    selectNinetyNine();
    displayCounterContainer();
}

//event for reset button
reset.onclick = () => {
    count = 0;
    value.innerHTML = count;
}

//event for increasing counter value
increase.onclick = () => {
    count ++;
    value.innerHTML = count;
}

//setting up tasbih counter click event
const resetFunction = () => {
    eleven.style.display = 'inline';
    thirtyThree.style.display = 'inline';
    ninetyNine.style.display = 'inline'; 
    countText.innerHTML = "Set your tasbih count: ";
    counterContainer.style.display = 'none';
    count = 0;
    value.innerHTML = count;
} 

tasbihCount.onclick = () => {
    resetFunction();
}

//setting the streaks
while (countText.innerHTML = "Tasbih count: 11") {
    if (value.innerHTML >= 11) {
        count = 0;
        streak ++;
        streakText.innerHTML = streak;
    } else {
        count ++
    }
}