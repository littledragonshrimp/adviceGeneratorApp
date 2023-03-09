const baseURL =  
{ ref   : 'https://api.adviceslip.com/advice'
, count : 0
};

// function GetValue()
// {
//     var myarray= new Array("item1","item2","item3");
//     var random = myarray[Math.floor(Math.random() * myarray.length)];
//     //alert(random);
//     document.getElementById("message").innerHTML=random;
// }

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
