//Step 1 Grab the buttons we want
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');

//This is a variable to find out which circle is active starting with 1
let currentActive = 1;

//eventlistener to listen for click and increment on next button
next.addEventListener('click', () => {
    //increment current actice by 1
    currentActive++

    //make sure the currentActive doesnt go past 4
    if(currentActive > circle.length) {
    currentActive = circle.length
    }
    //call the update function to make the changes in the DOM
    update();
})

//eventlistener to listen for click and decrement on next button
prev.addEventListener('click', () => {
    //decrement current actice by 1
    currentActive--

    //make sure the currentActive doesnt go past 4
    if(currentActive < 1) {
    currentActive = 1
    }
    update();
})

//function to check if the index is less that the current active
function update() {
    circle.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    //
    const actives =document.querySelectorAll('.active')
    //find the percentages for the css width property
    progress.style.width=(actives.length-1) / (circle.length-1)*100 + "%";
    
    //check current active is one
    if(currentActive === 1) {
        //set previous button to disabled
        prev.disabled = true
        //if it is at the end
    } else if (currentActive === circle.length) {
        //next button is disabled
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
    }
