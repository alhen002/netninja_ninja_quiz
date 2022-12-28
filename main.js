const correctAnswers = ['A', 'A', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers hier verstehe ich nicht ganz woher der den index nimmt
    userAnswers.forEach((answer, baba) => {
        if(answer === correctAnswers[baba]) {
            score += 25;
        }
    });
    scrollTo(0, 0); // scrolls to a specific position on the window object
    // result.querySelector('span').textContent = `${score}%`; // add the score to span - querySelector auf bereits erfasstes ziel anwednen!
    result.classList.remove('d-none'); // display the result area

    let output = 0; // startvariable counter
    const timer = setInterval(() => { 
        result.querySelector('span').textContent = `${output}%`; 
        if (output === score){
            clearInterval(timer);
        } else {
            output++; // counter increasement
        }
    },10)
    
});

// window object global object

// console.log('hello');
// window.console.log('hello');

// alert('hello');
// window.alert('hello');

// setTimeout(() => { // fires a function after a specific amount of time in ms
//     alert('Hello, Ninjas');
// }, 3000)

// setInterval(() => { // feuert die funktion alle 1000 ms unendlich
//     console.log('hello');
// }, 1000);
// let i = 0;
// const timer = setInterval(() => { // mit stop
//     console.log('hello');
//     i++;
//     if (i === 5) {
//         clearInterval(timer);
//     }
// },1000)
