let header = document.getElementsByClassName('header')[0];
let space = document.getElementsByClassName('space')[0];
let h = screen.height - header.offsetHeight - 100 + 'px';
console.log(h)
space.style.height = h;
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        header.classList.add('small-header')
    } else {
        header.classList.remove('small-header')
    }
}

let frame = document.getElementsByClassName('frame')[0];
let currentProjKey = ""
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
    "blockyJump": {
        "imgs": [
            "assets/blockyJump1.JPG",
            "assets/blockyJump2.png",
            "assets/blockyJump3.JPG",
            "assets/blockyJump4.JPG",
        ],
        "link": "http://github.com/emilyclam/blockyJump",
        "title": "Blocky Jump",
        "langs": ["python"],
        "desc": "Kind of like Doodle Jump. You are the blue square, and you can shoot the red enemy sqaures."
    },
    "gradientGame": {
        "imgs": [
            "assets/gradientGame1.png",
            "assets/gradientGame2.png",
            "assets/gradientGame3.png",
            "assets/gradientGame4.png",
        ],
        "link": "http://github.com/emilyclam/Gradient-Game",
        "title": "Gradient Game",
        "langs": ["python"],
        "desc": "Fun game were you unscramble the tiles."
    },
    "gratitudeTracker": {
        "imgs": [
            "assets/gratitudeTracker1.jpg",
            "assets/gratitudeTracker2.jpg",
            "assets/gratitudeTracker3.jpg",
            "assets/gratitudeTracker4.jpg",
        ],
        "link": "http://github.com/emilyclam/gratitudeTracker",
        "title": "Gratitude Tracker",
        "langs": ["python"],
        "desc": "A lil gratitude tracker. You can look back on what you said on previous days. Stores data."
    },
    "minesweeper": {
        "imgs": [
            "assets/minesweeper1.png",
            "assets/minesweeper2.png",
        ],
        "link": "http://github.com/emilyclam/minesweeper",
        "title": "Minsweeper",
        "langs": ["python"],
        "desc": "Minesweeper. A classic!"
    },
    "filler": {
        "imgs": [
            "assets/filler1.png",
            "assets/filler2.png",
        ],
        "link": "http://github.com/emilyclam/FillerGame",
        "title": "Filler Game",
        "langs": ["python"],
        "desc": "Similar to the game Filler on game pigeon. Also very aesthetically pleasing."
    }
}

function openFrame(projectKey) {
    let fImg = document.querySelector(".frame-img .thumbnail");
    let link = projectData[projectKey]["link"];
    let fTitle = document.getElementsByClassName("proj-title")[0];
    let fLangs = document.getElementsByClassName("languages")[0];
    let fDesc = document.getElementsByClassName("description")[0];

    fImg.src = projectData[projectKey]["imgs"][0];
    
    fTitle.innerHTML = projectData[projectKey]["title"] + ` <a href='${link}'  target='_blank' rel='noopener noreferrer'>🞂🞂</a>`;
    fLangs.innerHTML = "";
    projectData[projectKey]["langs"].forEach(lang => {
        fLangs.insertAdjacentHTML('beforeend', `<li>${lang}</li>`)
    });
    fDesc.children[1].innerHTML = projectData[projectKey]["desc"];

    frame.style.display = "flex";
    currentProjKey = projectKey;
}

function closeFrame() {
    frame.style.display = "none";
}

function nextImg(direction) {
    let fImg = document.querySelector(".frame-img .thumbnail");
    let currImgNum = fImg.src[fImg.src.length-5] - 1;
    let imgsLength = projectData[currentProjKey]["imgs"].length;
    currImgNum = (currImgNum += direction) % imgsLength;
    if (currImgNum < 0) {
        currImgNum = imgsLength-1;
    }
    console.log(currImgNum)
    fImg.src = projectData[currentProjKey]["imgs"][currImgNum];
}

let galleryItems = document.getElementsByClassName('gallery-item');
for (let i = 0; i < galleryItems.length; i++) {
    galleryItems[i].onclick = () => {
        openFrame(galleryItems[i].classList[1]);
    }

}