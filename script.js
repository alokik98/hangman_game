var movieList = [
    "Hide in the Light",
    "After Effect",
    "The Detained",
    "SquadGoals",
    "Await Further Instructions",
    "Haunting on Fraternity Row",
    "Lasso",
    "Extremity",
    "Trauma",
    "The Snarling",
    "In Extremis",
    "Mr. Malevolent",
    "The Basement",
    "Tales from the Hood",
    "The Toybox",
    "Inoperable",
    "Killer Kate",
    "Sick for Toys",
    "Ouija House",
    "Petrified",
    "The Jurassic Games",
    "Triassic World",
    "Realms",
    "Lake Placid Legacy",
    "Megalodon",
    "Headed Shark Attack",
    "Mega Shark vs Mecha Shark",
    "Sharknado Global Swarming",
    "Ozark Sharks",
    "The Last Sharknado It About Time",
    "Sharknado Oh Hell No",
    "Ice Sharks",
    "Dam Sharks",
    "Toxic Shark",
    "Atomic Shark",
    "Planet of the Sharks",
    "Trailer Park Shark",
    "Nightmare Shark",
    "Saltwater",
    "House Shark",
    "Selfie from Hell",
    "Santa Jaws",
    "Deep Blue Sea",
    "Mississippi River Sharks",
    "Tremors A Cold Day in Hell",
    "Tremors Bloodlines",
    "Frenzy",
    "Cucuy The Boogeyman",
    "Karma",
    "Broken Ghost",
    "Rust Creek",
    "Purgatory Road",
    "No Escape Room",
    "President Evil",
    "Dear God No",
    "Dead Kansas",
    "Malevolence Killer",
    "House of Forbidden Secrets",
    "House of the Witch",
    "The Tokoloshe",
    "Fake Blood",
    "Fox Trap",
    "Mother Krampus",
    "Unhinged",
    "Party Hard Die Young",
    "Black Hollow Cage",
    "Perfect",
    "Dreaming Purple Neon",
    "Sleepless Nights",
    "Hi Death",
    "Horror Independent",
    "Spirits",
    "Stray",
    "The Devils Doorway",
    "Bait",
    "Bonehill Road",
    "Dont Speak",
    "Wolfmans Got Nards",
    "Vuelven",
    "Out of the Shadows",
    "Inner Ghosts",
    "Luz",
    "Sleep Has Her House",
    "Creep",
    "In a Strangers House",
    "The Cleaning Lady",
    "Framed",
    "Aterrados",
    "Nightmare Cinema",
    "Cutterhead",
    "Hell Is Where the Home Is",
    "Endzeit",
    "Aniara",
    "Dachra",
    "Endzeit",
    "Black Mountain Side",
    "Hellraiser: Judgment",
    "Empire of the Sharks",
    "Betsy",
    "The Dark Tapes",
    "Transference",
    "Destruction Los Angeles",
    "Curvature",
    "Inside",
    "Die in One Day",
    "Demon Tongue",
    "Solis",
    "The Crucifixion",
    "Strange Events",
    "Cynthia",
    "Skin Creepers",
    "Boarding School",
    "Writers Retreat",
    "Dead Sea",
    "Wrecker",
    "The Rake",
    "The Field Guide to Evil",
    "Primal Rage",
    "Lake Placid vs Anaconda",
    "Feral",
    "The Heretics",
    "Ghost Stories",
    "Our House",
    "Nevesta",
    "Edges of Darkness",
    "Rise of the Undead",
    "Night of the Wild",
    "Let Her Out",
    "Gnaw",
    "Island Zero",
    "Deep in the Darkness",
    "Deep Dark",
    "Haunted",
    "Starve",
    "The Devils Rock",
    "Frankensteins Army",
    "Outpost Black Sun",
    "Outpost Rise of the Spetsnaz",
    "Woensdag Gehaktdag",
    "Outpost",
    "The Bunker",
    "The Dark",
    "Calvaire",
    "Sheitan",
    "Vinyan",
    "Ils",
    "Tonight She Comes",
    "Alena",
    "Sequence Break",
    "Observance",
    "Jurassic Galaxy",
    "Sweetheart",
    "THE PREY Legend of Karnoctus",
    "Sky Sharks",
    "Stoker Hills",
    "Candy Corn",
    "Honeyspider",
    "Slaughterhouse Rulez",
    "Dont Fuck in the Woods",
    "Killer Campout",
    "Wicked Ones",
    "The Wicked One",
    "Strip Club Massacre",
    "Nightmare on Elmos Street",
    "Space Babes from Outer Space",
    "Plank Face",
    "Harvest Lake",
    "The Bad Man",
    "Found",
    "Time to Kill",
    "Headless",
    "Frankenstein Created Bikers",
    "La chiesa",
    "End of the World",
    "Alien Expedition",
    "Alien Predator",
    "Preston Castle",
    "Megan",
    "What Still Remains",
    "Creature from Cannibal Creek",
    "Countrycide",
    "Schoolhouse",
    "Johnny Gruesome",
    "New York Vampire",
    "Slime City Massacre",
    "Attack of the Tattie-Bogle",
    "The Legend of Six Fingers",
    "Killer Rack",
    "Haunted Ship",
    "House on Hooter Hill",
    "Lake Effect",
    "Slime City",
    "Neon Maniacs",
    "Slaughterhouse Rock",
    "Hide and Go Shriek",
    "The Survivor",
    "Fatal Games",
    "The Final Terror",
    "Blood Frenzy"
]

var movie = document.getElementById('display__content');
let answer = '';
let guessed = [];
let wordStatus = null;
let maxWrong = 6;

function randomMovie() {  
    answer = movieList[Math.floor(Math.random() * movieList.length)].toLowerCase();
}

var guess = document.getElementById('guesses')
guess.innerHTML = maxWrong;

function guessedWord() {
    wordStatus = answer.split("").map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('display__content').innerHTML = wordStatus;
    document.getElementsByClassName('total__words')[0].innerHTML = answer.length + ' letters';
}

function handleGuess(letter) {
    guessed.indexOf(letter) === -1 ? guessed.push(letter) : null;

    console.log(answer)

    if (answer.indexOf(letter) >= 0) {
        guessedWord();
    } else if ( answer.indexOf(letter) === -1 ) {
        maxWrong = maxWrong - 1;
        if ( maxWrong < 0) {
            guess.innerHTML = 0;
            window.removeEventListener('keydown', lostGame());
            alert("Please stop entering the input");
        }
        guess.innerHTML = maxWrong;
    }
}

function lostGame() {
    movie.innerHTML = "You have lost the game";
    document.getElementsByClassName('total__words')[0].innerHTML = "The correct movie is: " + " " + answer.split(" ").join("_");
}

function resetGame() {
    alert("Time is up!!!");
}

function startGame() {
    var button = document.getElementsByClassName('btn')[0];

    if (button.innerHTML === "Reset Game") {
        location.reload();
    }

    button.innerHTML = "Reset Game";
    randomMovie();
    guessedWord();
    window.addEventListener('keydown', function(e) {
        handleGuess(e.key);
    });
} 

