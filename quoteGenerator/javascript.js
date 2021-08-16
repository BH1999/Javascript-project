var today = new Date()
var curHr = today.getHours()

if(curHr<12) {
    document.getElementById('time').innerHTML = "morning"
   // console.log('Morning')
} else if (curHr<18) {
    document.getElementById('time').innerHTML = "afternoon"
   // console.log('afternoon')
} else {
    document.getElementById('time').innerHTML = "night"
  //  console.log('evening')
}



var quotes = [
    'You must understand the whole of life, not just one part of it. That is why you must read, that is why you must look at the skies, why you must sing, dance and write poems, and suffer, and understand, for all that is life.',
    'Emptiness comes as a sunset comes of an evening, full of beauty, enchantment, and richness; it comes as naturally as the blossoming of a flower.',
    'You are the world and the world is you.',
    'It is a waste of energy when we try to conform to a pattern. To conserve energy we must be aware of how we dissipate energy.',
    'test5When I kill an Arab, a Jew, a Muslim, a Hindu, a communist, whatever it is, I am killing myself. I wonder if you realise this, basically.',
    'Can the mind be aware of emptiness without naming it, running away from it or judging it, but just be with it?',
    'Society is an abstraction. Abstraction is not a reality. What is reality is relationship. The relationship between human beings has created what we call society.',
    'When death comes, it does not ask your permission; it comes and takes you, it destroys you on the spot.',
    'I have to study myself in actuality – as I am, not as I wish to be.',
    'If you as a human being transform yourself, you affect the consciousness of the rest of the world.',
    'A mind that is full of conclusions is a dead mind, it is not a living mind. A living mind is a free mind, learning, never concluding.'

]
function newQuote () {
    var randomNumber = Math.floor(Math.random()*(quotes.length))
    //console.log(quotes[randomNumber]);
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    var colors = [
        'lightblue', '#EEE8AA', '#E0FFFF',
        '#F5F5F5', '#DEB887', '#DCDCDC','black', 'blue', 'red',
        'brown', 'green', 'orange','maroon',
    ];
      
    // selecting random color
    var random_color = colors[Math.floor(
            Math.random() * colors.length)];
   
      
    var x = document.getElementById('pick');
    x.style.color = randomColor;
    x.style.backgroundColor = random_color;
    
    var y=document.getElementById('btn');
    y.style.color=random_color;
    y.style.backgroundColor=randomColor;

    document.getElementById('quotesDisplay').innerHTML = quotes[randomNumber];
   // document.body.style.color = randomColor 
    document.body.style.backgroundColor  = randomColor 
    someDiv.style.color = randomColor
}

var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    
document.body.style.backgroundColor = randomColor 
someDiv.style.color = randomColor
  

