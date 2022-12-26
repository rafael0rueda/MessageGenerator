//Console log a random message every time the program is run

 //Store data for the messages
 const sings =[
    {
        sign: "Rat",
        personality: ['quick-witted', 'resourceful', 'versatile'] 
    },
    {
        sign: "Ox",
        personality: ['diligent', 'dependable', 'determined']
    },
    {
        sign: "Tiger",
        personality: ['brave', 'competitive', 'unpredictable']
    },
    {
        sign: "Rabbit",
        personality: ['quiet', 'elegant', 'kind']
    },
    {
        sign: "Dragon",
        personality: ['confident', 'intelligent', 'wise']
    },
    {
        sign: "Snake",
        personality: ['enigmatic', 'intelligent', 'wise']
    },
    {
        sign: "Horse",
        personality: ['animated', 'active', 'energetic']
    },
    {
        sign: "Goat",
        personality: ['calm', 'gentle', 'sympathetic']
    },
    {
        sign: "Monkey",
        personality: ['sharp', 'smart', 'curious',]
    },
    {
        sign: "Rooster",
        personality: ['observant', 'hardworking', 'courageous']
    },
    {
        sign: "Dog",
        personality: ['lovely', 'honest', 'prudent']
    },
    {
        sign: "Pig",
        personality: ['compassionate', 'generous', 'strong']
    }
 ];

 const color = ['blue', 'red', 'black', 'yellow', 'green', 'gold', 'oragen', 'white', 'brown', 'purple'];

 let randomSign = Math.floor(Math.random() * 12);
 let randomPersonality = Math.floor(Math.random() * 3);
 let randomColor = Math.floor(Math.random() * 10);

 console.log(`Your chinise sing is: ${sings[randomSign].sign}, characteristics is ${sings[randomSign].personality[randomPersonality]} and luky color: ${color[randomColor]}`); 