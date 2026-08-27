// ==========================================
// ECO PULSE JAVASCRIPT
// ==========================================


// ---------- MOBILE MENU ----------

function toggleMenu() {

    const nav = document.querySelector("nav");

    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "75px";
        nav.style.right = "5%";
        nav.style.background = "#0c1c17";
        nav.style.padding = "20px";
        nav.style.borderRadius = "15px";
    }
}


// ---------- CAROUSEL ----------

let currentSlide = 0;

const cards = document.querySelectorAll(".energy-card");
const dots = document.querySelectorAll(".dot");


function showSlide(index) {

    if (cards.length === 0) {
        return;
    }

    if (index >= cards.length) {
        currentSlide = 0;
    }

    if (index < 0) {
        currentSlide = cards.length - 1;
    }

    cards.forEach(function(card) {
        card.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });

    cards[currentSlide].classList.add("active");

    if (dots[currentSlide]) {
        dots[currentSlide].classList.add("active");
    }
}


function changeSlide(direction) {

    currentSlide += direction;

    showSlide(currentSlide);
}


// Automatically move carousel every 6 seconds

if (cards.length > 0) {

    setInterval(function() {

        currentSlide++;

        showSlide(currentSlide);

    }, 6000);
}


// ---------- TOPIC DATABASE ----------

const topics = {

    solar: {

        title: "Solar Energy",

        intro:
            "Solar energy uses sunlight as a renewable source of energy. Solar photovoltaic panels convert light from the sun into electrical energy.",

        how:
            "When sunlight reaches photovoltaic cells inside a solar panel, the energy from the light causes electrons to move. This produces direct-current electricity, which can then be converted into alternating current for many everyday electrical systems.",

        why:
            "Solar energy provides a way to produce electricity without directly burning fossil fuels. Rooftop and utility-scale solar systems can be used in different settings, from homes and schools to large power installations.",

        student:
            "Students can learn about photovoltaic technology, monitor energy use around campus, participate in solar-energy awareness projects, or build educational projects using small solar panels and sensors.",

        image:
            "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80",

        video:
            "https://www.youtube.com/embed/xKxrkht7CpY"

    },


    wind: {

        title: "Wind Energy",

        intro:
            "Wind energy uses the movement of air to produce electricity. Wind turbines transform the kinetic energy of moving air into mechanical and then electrical energy.",

        how:
            "Wind pushes against the blades of a turbine, causing them to rotate. The rotating system drives a generator, which converts mechanical energy into electricity.",

        why:
            "Wind is naturally replenished and can provide electricity without directly burning fossil fuels. Wind farms can be built on land or offshore where suitable wind resources are available.",

        student:
            "Students can explore wind-turbine design, build small educational turbine models, study wind speed, or create sensor systems that collect information about local environmental conditions.",

        image:
            "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",

        video:
            "https://www.youtube.com/embed/xy9nj94xvKA"

    },


    hydro: {

        title: "Hydroelectric Power",

        intro:
            "Hydroelectric power generates electricity by using the movement of water. Water flowing from a higher elevation can turn a turbine connected to an electrical generator.",

        how:
            "Water is directed through a hydroelectric system and flows toward a turbine. The moving water rotates the turbine, which drives a generator and produces electricity.",

        why:
            "Hydropower can provide renewable electricity and, in some systems, can also help support grid reliability. Its environmental effects depend on how individual projects are designed and operated.",

        student:
            "Students can study water cycles, turbine design, energy conversion, and environmental impacts. They can also explore educational hydropower simulations and STEM activities.",

        image:
            "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1600&q=80",

        video:
            "https://www.youtube.com/embed/phrCx_oow1E"

    }

};


// ---------- DETAILS PAGE ----------

const params = new URLSearchParams(window.location.search);

const topicName = params.get("topic");


if (topicName && topics[topicName]) {

    const topic = topics[topicName];

    const title = document.getElementById("topic-title");
    const intro = document.getElementById("topic-intro");
    const how = document.getElementById("topic-how");
    const why = document.getElementById("topic-why");
    const student = document.getElementById("topic-student");
    const image = document.getElementById("topic-image");
    const video = document.getElementById("topic-video");

    if (title) {
        title.textContent = topic.title;
    }

    if (intro) {
        intro.textContent = topic.intro;
    }

    if (how) {
        how.textContent = topic.how;
    }

    if (why) {
        why.textContent = topic.why;
    }

    if (student) {
        student.textContent = topic.student;
    }

    if (image) {
        image.style.backgroundImage =
            `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.3)), url("${topic.image}")`;
    }

    if (video) {
        video.src = topic.video;
    }

    document.title =
        "EcoPulse | " + topic.title;

        }
