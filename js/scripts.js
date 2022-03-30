let reviews = [{
    id: 0,
    image: "https://res.cloudinary.com/transformers/image/upload/v1648035800/16_uu17cg.jpg ",
    name: 'Christine Chila',
    job: 'Technical Mentor',
    text: "One of the easiest ways to get noticed or hired as a junior developer in the tech industry is by documenting everything you are learning. Build great projects, but don't forget to document your journey along the way.",
},
{
    id: 1,
    image: "https://res.cloudinary.com/transformers/image/upload/v1648035819/img09_vnh2yh.jpg",
    name: 'David Terry',
    job: 'Pharmacist',
    text: "In my experience, requirements change quite often, or new situations will arise that weren’t anticipated at the start of the project. If the situation can be addressed with a plugin, I just whip open the standalone plugin page, make the updates and pop the new plugin back in. Because the plugin is self-contained, it’s easy to recreate the problem, fix it, and get it back into the codebase.",
},
{
    id: 2,
    image: "https://res.cloudinary.com/transformers/image/upload/v1648035804/13_tvzylw.jpg ",
    name: 'Bella villa',
    job: 'Teller',
    text: "Ultimately, I try to think of my application’s main codebase as just stringing together various components and code from many sources. It just controls logic and flow. The real nitty-gritty is handled behind the scenes. This is why frameworks like Backbone are so important — they hide a lot of the details in the background and allow you to just focus on the flow and control of your application.",
},
{
    id: 3,
    image: "https://res.cloudinary.com/transformers/image/upload/v1648035807/27_evttie.jpg ",
    name: 'Terry Charlton s.j',
    job: 'Orator',
    text: "One of the easiest ways to get noticed or hired as a junior developer in the tech industry is by documenting everything you are learning. Build great projects, but don't forget to document your journey along the way.",
}
];
// getting a set of data on class list by their ID
const image = document.getElementById('image');
const job = document.getElementById('job');
const name = document.getElementById('name');
const info = document.getElementById('info');

// Query the 
const btnPrev= document.querySelector('.prev-btn');
const btnNext= document.querySelector('.next-btn');
const randomBtn= document.querySelector('.random-btn');

// initial value/ item

let currentValue= 0;

window.addEventListener('DOMContentLoaded', function(){
    let item= [currentValue]

    getRandom();

});

function getRandom(){
    
}
