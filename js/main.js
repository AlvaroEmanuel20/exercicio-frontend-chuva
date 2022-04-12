class InteractionManager {
    constructor() {
        this.hamburger = document.getElementById("hamburger");
        this.sidebar = document.getElementById("sidebar");
        this.createTopicField = document.getElementById("create-topic");
        this.profileImage = document.getElementById("profile-image");
        this.answersContainer = document.getElementById("answers-container");
        this.form = document.getElementById("form");
        this.topicBtn = document.getElementsByClassName("topic-btn")[0];
        this.initialContentDiscussions = document.getElementsByClassName("initial-content")[0];
        this.topicAdded = document.getElementById("topic-added");
        this.successForm = document.getElementsByClassName("success-form")[0];
        this.btnNewTopic = document.getElementById("new-topic-btn");
    }
}

const interactions = new InteractionManager();

function openSidebar() {
    interactions.sidebar.style.display = "block";
    interactions.sidebar.style.background = "white";
    interactions.createTopicField.style.zIndex = "-1";
}

function closeSidebar() {
    interactions.sidebar.style.display = "none";
    interactions.createTopicField.style.zIndex = "1";
}

window.addEventListener("resize", function() {
    if (window.innerWidth >= 840) {
        interactions.sidebar.style.display = "block";
        interactions.createTopicField.style.zIndex = "1";
    } else {
        interactions.sidebar.style.display = "none";
        interactions.createTopicField.style.zIndex = "1";
    }
});

//SEE MORE RESUME
function seeMore() {
    const resumeField = document.getElementById("resume-box");
    const resumeContent = document.getElementById("resume-content");

    resumeContent.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, 
    egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. 
    Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, 
    ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et 
    non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida 
    eros vestibulum.<br/>
    <br/>
    Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat 
    feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, 
    ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit 
    non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. 
    Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, 
    pharetra libero non, ornare enim. Etiam in laoreet odio.<br/>
    <br/>
    Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. 
    Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. 
    Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur 
    facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla 
    pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, 
    viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, 
    orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur 
    lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa.<br/>
    <br/>
    Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra 
    felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. 
    Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, 
    viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. 
    Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. <span id="see-less">ver menos</span>`;

    document.getElementById("see-less").addEventListener("click", function() {
        resumeContent.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, 
        egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. 
        Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, 
        ut viverra lorem vestibulum ut.  Phasellus condimentum orci id leo condimentum lobortis 
        et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac 
        gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. 
        Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum. 
        Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant... <span onclick="seeMore()" 
        id="read-more">ver mais</span>`
    });
}

//ANSWERS CONTAINER
function openAnswers() {
    interactions.answersContainer.className = "answers-container show";

    interactions.answersContainer.addEventListener("click", function () {
        interactions.answersContainer.className = "answers-container hide";
    });
}

//FORM
function preventDefault() {
    event.preventDefault();
}

function openForm() {
    interactions.form.style.display = "block";
    interactions.topicBtn.style.display = "none";
    interactions.initialContentDiscussions.style.display = "none";
}

function sendForm() {
    interactions.topicAdded.style.display = "block";
    interactions.form.style.display = "none";
    interactions.successForm.style.display = "block";
    interactions.btnNewTopic.style.display = "block";
}

function backForm() {
    interactions.btnNewTopic.style.display = "none";
    interactions.successForm.style.display = "none";
    interactions.form.style.display = "block";
}