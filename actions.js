const baseURL =  
{ ref   : 'https://api.adviceslip.com/advice'
, count : 0
};

const rollDice        = document.getElementById('reload');
const adviceNumber    = document.getElementById('id');
const adviceParagraph = document.getElementById('advice');

rollDice.onclick = () =>
    {
        console.log("clicked");
        fetch( `${baseURL.ref}?c=${++baseURL.count}`)
        .then( r => r.json() )
        .then( data =>
            {
                adviceNumber.textContent = data.slip.id
                adviceParagraph.textContent = data.slip.adviceText
            })
    }
