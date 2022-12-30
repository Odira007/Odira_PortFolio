const technologies = [
    {
        name: "javascript",
        logo: "../assets/logos/c.png"
    },
    {
        name: "react",
        logo: ""
    },
    {
        name: "CSS",
        logo: ""
    },
    {
        name: "Bootstrap",
        logo: ""
    },
    {
        name: "html",
        logo: ""
    },
    {
        name: "Tailwind",
        logo: ""
    },
    {
        name: "Python",
        logo: ""
    },
    {
        name: "C",
        logo: ""
    }
]

// Variables

const contactButton = document.getElementById('contact');
const contactText = document.getElementById('contacts');
const skills = document.querySelector('.skills-container');
const mediaIcons = document.querySelector('.media-icons');

let skillsSect = document.createElement('div');

skillsSect.classList.add('skills-section');

skills.appendChild(skillsSect);

const mySkills = technologies.map(t => t.logo);

skillsSect.append(mySkills);

console.log(mySkills);


function showMediaIcons() {
    if (mediaIcons.classList.contains('media-icons')) {
        mediaIcons.classList.remove('media-icons')
        mediaIcons.style.display = 'none'
    } else {
        mediaIcons.classList.add('media-icons')
        mediaIcons.style.display = 'flex'
    }
}

contactButton.addEventListener('click', showMediaIcons);
contactText.addEventListener('click', showMediaIcons);

window.addEventListener('click', (e) => {
    if (e.target === contactButton) {
        
    }
})
// let str = "I love my Mom";
// let splitted = str.split(" ");
// let joined = splitted.join(" ")
// console.log(joined)