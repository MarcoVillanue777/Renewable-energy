// =====================================
// ECOPULSE
// =====================================


// =====================================
// CAROUSEL
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".energy-card");
    const dots = document.querySelectorAll(".dot");

    const nextButton = document.getElementById("nextBtn");
    const prevButton = document.getElementById("prevBtn");

    const carousel = document.getElementById("energyCarousel");

    let currentSlide = 0;


    // Stop if carousel doesn't exist
    if (cards.length > 0) {

        function showSlide(number) {

            // Go back to first slide
            if (number >= cards.length) {
                currentSlide = 0;
            }

            // Go to last slide
            if (number < 0) {
                currentSlide = cards.length - 1;
            }


            // Hide all cards
            cards.forEach(function (card) {
                card.classList.remove("active");
            });


            // Remove active dots
            dots.forEach(function (dot) {
                dot.classList.remove("active");
            });


            // Show current card
            cards[currentSlide].classList.add("active");


            // Highlight current dot
            if (dots[currentSlide]) {
                dots[currentSlide].classList.add("active");
            }
        }


        // NEXT BUTTON

        if (nextButton) {

            nextButton.addEventListener("click", function () {

                currentSlide++;

                showSlide(currentSlide);

            });

        }


        // PREVIOUS BUTTON

        if (prevButton) {

            prevButton.addEventListener("click", function () {

                currentSlide--;

                showSlide(currentSlide);

            });

        }


        // DOT BUTTONS

        dots.forEach(function (dot) {

            dot.addEventListener("click", function () {

                currentSlide =
                    Number(dot.getAttribute("data-slide"));

                showSlide(currentSlide);

            });

        });


        // =====================================
        // PHONE SWIPE
        // =====================================

        let startX = 0;
        let endX = 0;


        if (carousel) {

            carousel.addEventListener("touchstart", function (event) {

                startX =
                    event.touches[0].clientX;

            });


            carousel.addEventListener("touchend", function (event) {

                endX =
                    event.changedTouches[0].clientX;


                const distance =
                    startX - endX;


                // Swipe left
                if (distance > 50) {

                    currentSlide++;

                    showSlide(currentSlide);

                }


                // Swipe right
                if (distance < -50) {

                    currentSlide--;

                    showSlide(currentSlide);

                }

            });

        }


        // =====================================
        // AUTOMATIC SLIDE
        // =====================================

        setInterval(function () {

            currentSlide++;

            showSlide(currentSlide);

        }, 5000);


        // Start with slide 1
        showSlide(0);

    }


    // =====================================
    // DETAILS PAGE
    // =====================================

    const topicTitle =
        document.getElementById("topic-title");


    // If there is no topic title,
    // this is the homepage.
    if (!topicTitle) {
        return;
    }


    const params =
        new URLSearchParams(window.location.search);


    const topic =
        params.get("topic");


    // =====================================
    // TOPIC INFORMATION
    // =====================================

    const information = {

        solar: {

            title: "Solar Energy",

            intro:
                "Solar energy uses sunlight as a renewable source of energy. Solar photovoltaic panels convert sunlight into electrical energy.",

            how:
                "Solar panels contain photovoltaic cells. When sunlight reaches these cells, the energy from the light causes electrons to move, producing electricity.",

            why:
                "Solar power provides a renewable way to generate electricity without directly burning fossil fuels. Solar panels can be used on homes, schools, businesses, and large solar farms.",

            student:
                "Students can learn about solar technology, monitor energy use at school, participate in sustainability campaigns, or create small solar-powered projects.",

            image:
                "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80",

            video:
                "https://www.youtube.com/embed/xKxrkht7CpY"

        },


        wind: {

            title: "Wind Energy",

            intro:
                "Wind energy uses moving air to produce electricity. Wind turbines convert the movement of wind into mechanical energy and then electrical energy.",

            how:
                "Wind pushes against the turbine blades and causes them to rotate. The rotating blades turn a generator, which produces electricity.",

            why:
                "Wind is naturally replenished and can generate electricity without directly burning fossil fuels. Wind farms can be built on land or offshore.",

            student:
                "Students can study wind turbine design, build small turbine models, measure wind conditions, or create technology projects that monitor environmental data.",

            image:
                "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",

            video:
                "https://www.youtube.com/embed/xy9nj94xvKA"

        },


        hydro: {

            title: "Hydroelectric Power",

            intro:
                "Hydroelectric power uses the movement of water to generate electricity. Water can turn turbines that are connected to electrical generators.",

            how:
                "Moving water flows toward a turbine and causes it to rotate. The turbine is connected to a generator, which converts the mechanical movement into electricity.",

            why:
                "Hydropower can provide renewable electricity and can contribute to reliable energy systems. However, hydropower projects need to consider their effects on local ecosystems.",

            student:
                "Students can study water movement, turbine designs, energy conversion, and environmental impacts. They can also create small educational water-turbine models.",

            image:
                "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=80",

            video:
                "https://www.youtube.com/embed/phrCx_oow1E"

        }

    };


    // =====================================
    // CHECK TOPIC
    // =====================================

    if (!topic || !information[topic]) {

        topicTitle.textContent =
            "Topic Not Found";

        return;
    }


    const data =
        information[topic];


    // =====================================
    // INSERT CONTENT
    // =====================================

    topicTitle.textContent =
        data.title;


    const intro =
        document.getElementById("topic-intro");

    const how =
        document.getElementById("topic-how");

    const why =
        document.getElementById("topic-why");

    const student =
        document.getElementById("topic-student");

    const image =
        document.getElementById("topic-image");

    const video =
        document.getElementById("topic-video");


    if (intro) {
        intro.textContent = data.intro;
    }


    if (how) {
        how.textContent = data.how;
    }


    if (why) {
        why.textContent = data.why;
    }


    if (student) {
        student.textContent = data.student;
    }


    if (image) {

        image.style.backgroundImage =
            `url("${data.image}")`;

    }


    if (video) {

        video.src =
            data.video;

    }


    // Change browser title

    document.title =
        "EcoPulse | " + data.title;

});
