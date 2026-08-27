
const articleDatabase = {
    'solar': {
        title: "Solar Photovoltaic Frameworks & Grid Modernization",
        banner: "https://unsplash.com",
        videoUrl: "https://youtube.com", // Educational Renewable Energy Guide Reference
        htmlContent: `
            <p>Solar energy deployment represents our most potent weapon against unchecked planetary carbon escalation. By leveraging modern silicon semiconductor configurations, solar grids alter light-wave capture methodologies entirely.</p>
            <p>When sunlight impacts the layered photovoltaic infrastructure, photons drive electron displacement to convert kinetic sunlight energy directly into clean raw direct current (DC). This current feeds multi-stage string inverters, seamlessly outputting alternating current (AC) directly back to neighborhood micro-grids without standard system line losses or emissions.</p>
            <p><strong>Why It Matters:</strong> Standard legacy grids depend heavily on steady coal or natural gas combustion. Scaling clean solar arrays offsets raw generation dependencies, systematically lowering baseline emissions levels during optimal daylight hours.</p>
        `
    },
    'wind': {
        title: "Kinetic Turbine Engineering & Offshore Grid Feeds",
        banner: "https://unsplash.com",
        videoUrl: "https://youtube.com",
        htmlContent: `
            <p>Modern wind turbines harness global atmospheric temperature variants to generate immense kinetic rotational mechanics. Instead of consuming materials, wind power relies on pressure discrepancies created by natural planetary cycles.</p>
            <p>As wind passes the aerodynamic lift profiles of specialized carbon-fiber blades, it forces the internal central drivetrain rotor to spin. This low-speed shaft connects straight to a multi-stage mechanical speed-multiplier gearbox, spinning copper internal magnetic coils past fixed stators at thousands of RPMs to produce massive electrical yields cleanly.</p>
            <p><strong>System Resilience:</strong> Offshore wind fields feature highly predictable, consistent wind paths. Integrating these massive installations ensures that coastal cities can source steady baseline energy without building massive carbon-heavy power stations.</p>
        `
    },
    'hydro': {
        title: "Hydroelectric Dam Dynamics & High-Output Generation",
        banner: "https://unsplash.com",
        videoUrl: "https://youtube.com",
        htmlContent: `
            <p>Hydropower converts the natural gravitational descent of water systems into exceptionally stable electrical energy profiles. Unlike sun or wind patterns, massive reservoir currents provide constant baseline grid storage control mechanics.</p>
            <p>Water flowing from high elevations travels through restricted, high-pressure intake pipes known as penstocks. It exits forcefully against the precision curved blades of deep-well water turbines, transforming fluid mechanics directly into physical rotational power. This system powers high-output synchronous generators tied directly to cross-country transmission systems.</p>
            <p><strong>Environmental Balance:</strong> Beyond generating reliable clean power, advanced run-of-river installations preserve natural aquatic flow baselines, demonstrating how advanced clean technologies protect nearby delicate ecosystems.</p>
        `
    },
    'campus-solar': {
        title: "Case Study: The Campus Micro-Grid Implementation",
        banner: "https://unsplash.com",
        videoUrl: "https://youtube.com",
        htmlContent: `
            <p>Led entirely by student engineering cohorts, the Campus Micro-Grid Project showcases how localized clean energy frameworks can scale within urban education centers.</p>
            <p>The team deployed dual-axis tracking solar modules across six unused flat dormitory rooftops. These intelligent mounts actively map the sun's location throughout the day, increasing overall structural energy yields by roughly 22% compared to standard static configurations. The captured power is stored in centralized lithium-iron-phosphate (LiFePO4) battery arrays to safely offset heavy electrical usage during evening campus hours.</p>
            <p><strong>Measurable Impact:</strong> This active installation successfully removes over 120 metric tons of carbon emissions annually, paving a scalable roadmap for neighboring municipal properties to mimic.</p>
        `
    },
    'kinetic-path': {
        title: "The Kinetic Walkway: Harvesting Pedestrian Motion",
        banner: "https://unsplash.com",
        videoUrl: "https://youtube.com",
        htmlContent: `
            <p>The Kinetic Walkway represents a brilliant design merge between urban architecture and specialized physics, capturing energy from daily pedestrian traffic.</p>
            <p>Beneath custom-engineered rubber walkway tiles lie compact electromagnetic induction generators. When a student steps on a tile, it drops minutely by 5 millimeters, forcing an internal magnetic core through induction wire coils to generate a brief electrical pulse. This current flows directly into supercapacitor banks to cleanly illuminate nearby paths and campus safety structures all night.</p>
            <p><strong>Future Scalability:</strong> Initial campus trials confirm that retrofitting high-traffic transport hubs with kinetic arrays can cleanly meet localized grid lighting needs using purely ambient human movement.</p>
        `
    },
    'open-source': {
        title: "Accessing Open-Source CleanTech Repositories",
        banner: "https://unsplash.com",
        videoUrl: "https://youtube.com",
        htmlContent: `
            <p>True ecological progress demands collaborative, open developer data spaces. The CleanTech Hub opens access to complex structural plans and software systems without restrictive licensing layers.</p>
            <p>Students can download free microcontroller firmware codebases designed to automate off-grid solar chargers, track optimal solar placement angles, and safely manage battery cells. The blueprints leverage affordable, globally accessible components, allowing engineering groups to construct high-accuracy telemetry systems anywhere on Earth.</p>
            <p><strong>Join the Codebase:</strong> Explore our public version-control repositories to submit system optimization patches, expand documentation parameters, or build custom extensions for your hometown project.</p>
        `
    },
    'incubators': {
        title: "Securing Seed Funding via Green Tech Pipelines",
        banner: "https://unsplash.com",
        videoUrl: "https://youtube.com",
        htmlContent: `
            <p>Transforming an early laboratory prototype into a highly reliable community installation requires financial support and dedicated professional coaching paths.</p>
            <p>Our incubator database connects active student research teams with sustainability grants, equity-free seed funds, and green venture pipelines. Accepted prototype teams receive dedicated workspace facilities, engineering labs, and direct advisory support from veteran cleantech founders to safely navigate manufacturing and regional grid regulations.</p>
            <p><strong>Submission Guidelines:</strong> Ensure your project application details core efficiency metrics, scalable field roadmaps, and detailed layout budgets to catch the attention of environmental grant committees.</p>
        `
    }
};

// --- SINGLE-PAGE APPLICATION ROUTER ENGINE ---
const navButtons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page-section');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetPage = button.getAttribute('data-page');
        navigateTo(targetPage);
    });
});

function navigateTo(pageId) {
    navButtons.forEach(btn => {
        if(btn.getAttribute('data-page') === pageId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
    // Reset view scrolling position on switch
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- SECURE INTERACTIVE CAROUSEL MANAGER ---
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;

    slides.forEach((slide, idx) => {
        if (idx === currentSlideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function moveSlide(direction) {
    currentSlideIndex += direction;
    showSlide(currentSlideIndex);
}

// --- DYNAMIC CONTENT DRAWER CORE INTERACTIVES ---
function openDeepDive(articleKey) {
    const article = articleDatabase[articleKey];
    if (!article) return;

    // Inject active information into text blocks smoothly
                                  
