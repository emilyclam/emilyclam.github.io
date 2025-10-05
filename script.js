let header = document.getElementsByClassName('header')[0];
let space = document.getElementsByClassName('space')[0];
let h = screen.height - header.offsetHeight - 150;
space.style.height = h + 'px';
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
        header.classList.add('small-header')
    } else {
        header.classList.remove('small-header')
    }
}

let MAX_PROJECT_PICS = 5;
const frame = document.getElementsByClassName('frame')[0];
const project = document.getElementsByClassName('project')[0];
let currentProjKey = "";
let currentImg = 0;
let projectData = {
    "scheduleMaker": {
        "imgs": [
            "assets/scheduleMaker1.JPG"
        ],
        "link": "http://github.com/emilyclam/scheduleMaker",
        "title": "Schedule Maker",
        "langs": [
            "HTML",
            "CSS",
            "JS"
        ],
        "desc": "A chrome extension that helps you schedule your time. Features a todo list, a timer, and numbers."
    },
    "leetMon": {
        "imgs": [
            "assets/leetmon1.gif",
            "assets/leetmon2.gif",
            "assets/leetmon3.png",
            "assets/leetmon4.png",
        ],
        "link": "https://github.com/emilyclam/leetmon",
        "title": "LeetMon",
        "langs": [
            "HTML",
            "TypeScript",
        ],
        "desc": "A chrome extension where you catch pokemon when you do LeetCode."
    },
    "pogoBot": {
        "imgs": [
            "assets/bot-example.png"
        ],
        "link": "https://github.com/emilyclam/PogoBot",
        "title": "PoGo Bot",
        "langs": [
            "python",
            "BeautifulSoup",
            "RegEx"
        ],
        "desc": "A discord bot that gives updates about the current and upcoming events in the Pokemon Go app."
    },
    "recipeBook": {
        "imgs": [
            "assets/recipebook1.png",
            "assets/recipebook2.png",
            "assets/recipebook3.png",
            "assets/recipebook4.png",
        ],
        "link": "https://github.com/emilyclam/recipe_book",
        "title": "Recipe Book",
        "langs": [
            "React",
            "Django",
            "Postgres"
        ],
        "desc": "A full-stack web application where users can search, view, and save recipes."
    },
}

const imgIndicator = document.getElementById("img-indicators");
let indicators = [];
for (let i = 0; i < MAX_PROJECT_PICS; i++) {
    const indicator = document.createElement("div");
    indicator.className = 'indicator';
    imgIndicator.appendChild(indicator);
    indicators.push(indicator);
}

function openFrame(projectKey) {
    let fImg = document.querySelector(".frame-img img");
    let link = projectData[projectKey]["link"];
    let fTitle = document.getElementsByClassName("proj-title")[0];
    let fLangs = document.getElementsByClassName("languages")[0];
    let fDesc = document.getElementsByClassName("description")[0];
    const numImgsInProject = projectData[projectKey]["imgs"].length;

    fImg.src = projectData[projectKey]["imgs"][0];
    
    fTitle.innerHTML = projectData[projectKey]["title"] + ` <a href='${link}'  target='_blank' rel='noopener noreferrer'>🞂🞂</a>`;
    fLangs.innerHTML = "";
    projectData[projectKey]["langs"].forEach(lang => {
        fLangs.insertAdjacentHTML('beforeend', `<li>${lang}</li>`)
    });
    fDesc.children[1].innerHTML = projectData[projectKey]["desc"];

    frame.style.display = "flex";
    currentProjKey = projectKey;
    currentImg = 0;
    for (let i = 0; i < MAX_PROJECT_PICS; i++) {
        const indicator = indicators[i];
        if (i == 0) {
            indicator.classList.add('active');
        }
        if (i < numImgsInProject) {
            indicator.style.display = 'block';
        } else {
            indicator.style.display = 'none';
        }
    }
}

function closeFrame() {
    frame.style.display = "none";
    for (let i = 0; i < MAX_PROJECT_PICS; i++) {
        indicators[i].classList = 'indicator';
    }
}

function nextImg(direction) {
    const fImg = document.querySelector(".frame-img img");
    const numImgsInProject = projectData[currentProjKey]["imgs"].length;
    indicators[currentImg].classList.remove('active');
    currentImg = (currentImg += direction) % numImgsInProject;
    if (currentImg < 0) {
        currentImg = numImgsInProject-1;
    }
    fImg.src = projectData[currentProjKey]["imgs"][currentImg];
    indicators[currentImg].classList.add('active');
}


let galleryItems = document.getElementsByClassName('gallery-item');
for (let i = 0; i < galleryItems.length; i++) {
    galleryItems[i].onclick = () => {
        openFrame(galleryItems[i].classList[1]);
    }

}


// if the frame is open, you could also close it by clicking anywhere outside the frame
window.addEventListener('mousedown', function(e){   
    if (frame.style.display == "flex") {
        if (!project.contains(e.target)){
          closeFrame();
        }
    }
});

