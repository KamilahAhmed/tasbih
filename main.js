//set inital count
let count = 0;

//selecting values and buttons from HTML
const countText = document.getElementById('counttext');
const eleven = document.getElementById('11');
const thirtyThree = document.getElementById('33');
const ninetyNine = document.getElementById('99');
const counterContainer = document.getElementById('countercontainer');
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

//function to record the streaks of the counter.
let record = 0;
const recordCounter = (maxTally) => {
    if (count === maxTally) {
        count = 0;
        record ++;
        streak.innerHTML = record;
    }
} // reset the streak counter
const resetStreak = () => {
    record = 0;
    streak.innerHTML = record;
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
    resetStreak();
}

//event for increasing counter value
increase.onclick = () => {
    count ++;
    value.innerHTML = count;
    if (countText.innerHTML === "Tasbih count: 11") {
        recordCounter(11)
    } else if (countText.innerHTML === "Tasbih count: 33") {
        recordCounter(33)
    } else if (countText.innerHTML === "Tasbih count: 99") {
        recordCounter(99)
    }
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
    resetStreak();
}