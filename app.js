// set initial count
let count = 0;

// select value and buttons (select the number on the page and all three buttons)
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// use a forEach() loop to loop over the three buttons
btns.forEach(function(btn) {
    // add event listener for click
    btn.addEventListener('click', function(e) {
        // create variable to store class of current target in event
        const styles = (e.currentTarget.classList);
        // create if statement to execute code for each class clicked using .contains()
        if (btn.classList.contains("increase")) {
            count++;
            console.log(count);
        } else if (btn.classList.contains('decrease')) {
            count--;
            console.log(count);

        } else {
            count = 0;
            console.log(count);

        }
        value.textContent = count;
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0)
            value.style.color = 'black';

    });
});
    

    

    

    // update counter
        // value.textContent = count;

    // change counter color on page
        // if statement for count and value.style.color