//Had to remove cool api call because all API options werent good 
const quotes = [
    {
    "author": "Ban Ki-moon",
    "text": "Saving our planet, lifting people out of poverty, advancing economic growth... these are one and the same fight."
    },
    {
    "author": "David Suzuki",
    "text": "We don’t have to choose between the environment and the economy. We can have both."
    },
    {
    "author": "Jane Goodall",
    "text": "What you do makes a difference, and you have to decide what kind of difference you want to make."
    },
    {
    "author": "Wangari Maathai",
    "text": "It's the little things citizens do. That's what will make the difference. My little thing is planting trees."
    },
    {
    "author": "Al Gore",
    "text": "The climate crisis is not a political issue, it is a moral and spiritual challenge to all of humanity."
    },
    {
    "author": "Greta Thunberg",
    "text": "I have learned that you are never too small to make a difference."
    },
    {
    "author": "Leonardo DiCaprio",
    "text": "Climate change is real. It is the most urgent threat facing our entire species, and we need to work collectively and stop procrastinating."
    },
    {
    "author": "Margaret Mead",
    "text": "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has."
    },
    {
    "author": "Bill McKibben",
    "text": "The only way to deal with climate change is to change the way we live."
    },
    {
    "author": "Pope Francis",
    "text": "Climate change is a global problem with grave implications: environmental, social, economic, political, and for the distribution of goods."
    },
    {
    "author": "John F. Kennedy",
    "text": "The world is very different now. For man holds in his mortal hands the power to abolish all forms of human poverty and all forms of human life."
    },
    {
    "author": "Rachel Carson",
    "text": "In every outthrust headland, in every curving bay, in every grain of sand there is the story of the earth."
    },
    {
    "author": "Aldo Leopold",
    "text": "The last word in ignorance is the man who says of an animal or plant, 'What good is it?'"
    },
    {
    "author": "Winston Churchill",
    "text": "The empires of the future are the empires of the mind."
    },
    {
    "author": "E. O. Wilson",
    "text": "We cannot close our eyes to the world, we must open our hearts to it."
    },
    {
    "author": "Antonio Guterres",
    "text": "Climate change is moving faster than we are, and we need to act now."
    },
    {
    "author": "Naomi Klein",
    "text": "What we choose to call ‘nature’ is a social construct, and so are the solutions we propose."
    },
    {
    "author": "David Attenborough",
    "text": "The truth is: the natural world is changing and we are totally dependent on that world. It provides our food, water, and air."
    },
    {
    "author": "Sylvia Plath",
    "text": "The earth is a fine place and worth fighting for."
    },
    {
    "author": "Charles Darwin",
    "text": "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change."
    }
]

function getRandomQuote(){
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function generateQuote(){
    var quoteElement = document.getElementById("quote");
    var randomQuote = getRandomQuote();
    quoteElement.innerHTML = `<p>"${randomQuote.text}"</p><p>- ${randomQuote.author}</p>`;
}

document.addEventListener('DOMContentLoaded', function() {
    generateQuote();
});