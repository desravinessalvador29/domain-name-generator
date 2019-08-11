window.onload= () =>{

let pronoun = ['the', 'our', 'you', 'this', 'my']
let adjective = ['fierce', 'jolly', 'thankful', 'proud', 'large']
let noun = ['dog', 'goldfish', 'jogger', 'cat', 'mouse']

let myvariable = []

for (i=0; i<pronoun.length;i++) {
   for (x=0; x<adjective.length;x++) {
       for (j=0; j<noun.length;j++) {
           myvariable.push( "<div>" + pronoun[i] + adjective[x] + noun[j] + '.com</div>')
       }
   }
}



let str = "";
myvariable.forEach( e => str += e)



let domain = ''
pronoun.forEach( e => {
    adjective.forEach( x => {
        noun.forEach( z => domain += e + x + z + '.com ')
    })
})



document.querySelector('#domain').innerHTML = str;
}