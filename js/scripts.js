let reviews = [{
    image: "https://res.cloudinary.com/transformers/image/upload/v1648035800/16_uu17cg.jpg ",
    title: 'Christine Chila',
    occupation: 'Technical Mentor',
    text: "One of the easiest ways to get noticed or hired as a junior developer in the tech industry is by documenting everything you are learning. Build great projects, but don't forget to document your journey along the way.",
},
{
    image: "https://res.cloudinary.com/transformers/image/upload/v1648035819/img09_vnh2yh.jpg",
    title: 'David Terry',
    occupation: 'Pharmacist',
    text: "In my experience, requirements change quite often, or new situations will arise that weren’t anticipated at the start of the project. If the situation can be addressed with a plugin, I just whip open the standalone plugin page, make the updates and pop the new plugin back in. Because the plugin is self-contained, it’s easy to recreate the problem, fix it, and get it back into the codebase.",
},
{
    image: "https://res.cloudinary.com/transformers/image/upload/v1648035804/13_tvzylw.jpg ",
    title: 'Bella villa',
    occupation: 'Teller',
    text: "Ultimately, I try to think of my application’s main codebase as just stringing together various components and code from many sources. It just controls logic and flow. The real nitty-gritty is handled behind the scenes. This is why frameworks like Backbone are so important — they hide a lot of the details in the background and allow you to just focus on the flow and control of your application.",
},
{
    image: "https://res.cloudinary.com/transformers/image/upload/v1648035807/27_evttie.jpg ",
    name: 'Terry Charlton s.j',
    occupation: 'Orator',
    text: "One of the easiest ways to get noticed or hired as a junior developer in the tech industry is by documenting everything you are learning. Build great projects, but don't forget to document your journey along the way.",
}
];
// getting a set of data on class list by their ID
const photo = document.getElementById('person-img');
const job = document.getElementById('job');
const author = document.getElementById('author');
const info = document.getElementById('info');

// querying the buttons and random values
const btnPrev= document.querySelector('.prev-btn');
const btnNext= document.querySelector('.next-btn');
const randomBtn= document.querySelector('.random-btn');

//  initial value
let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    showPerson();
});
// show person based on item
function showPerson(){
    const item = reviews[currentItem];
    photo.src = item.image;
    author.textContext = item.title;
    job.textContext= item.occupation;
    info.textContext = item.text;
};

btnPrev.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length -1) {
        currentItem = 0;
    }
    showPerson();
});

btnNext.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = 0;
    }
    showPerson();
});

// random buttons
randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random()*reviews.length);

    showPerson();
})


