//  const baseURL =  
//  { ref   : 'https://api.adviceslip.com/advice'
//  , count : 0
//  };

const rollDice        = document.getElementById('reload');
const adviceNumber    = document.getElementById('adviceID');
const adviceParagraph = document.getElementById('adviceText');


function loadQuote() {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => {
        return response.json();
    })

    .then((response) => {
        adviceNumber.innerHTML = `Advice #${response.slip.id}`;
        adviceParagraph.innerHTML = `&#8220${response.slip.advice}&#8221`;
      });
}

rollDice.addEventListener("click", loadQuote);
console.log("clicked");


// rollDice.onclick = () =>
//     {
//         console.log("clicked");
//         fetch( `${baseURL.ref}?c=${++baseURL.count}`)
//         .then( r => r.json() )
//         .then( data =>
//             {
//                 adviceNumber.textContent = data.slip.id
//                 adviceParagraph.textContent = data.slip.advice
//             })
//     }

