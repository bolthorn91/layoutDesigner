document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener("scroll", function () {
        const scrolled = this.scrollY;
        parallax(scrolled)


    });

    addEventsOnGallery()

})

function parallax(scrollPos) {
    let incrementPosition = scrollPos * 0.003
    let verticalBackgroundPos = 50 / 100 + incrementPosition
    document.querySelector("header").style.backgroundPosition = `center ${verticalBackgroundPos * 100}%`
}

const projectsObj = [
    {
        tag: 'clinic',
        title: 'Clínica Estética',
        content: 'Diseño web para clínica de estética',
        year: '2015'
    },
    {
        tag: 'packy',
        title: 'Packy',
        content: 'Diseño multiplataforma (web, android y iOS). Proyecto final de Bootcamp de UX/UI multiplataforma',
        year: 2018
    },
    {
        tag: 'portfolio',
        title: 'portfolio',
        content: 'muere portfolio'
    }
]
function addEventsOnGallery() {

    projectsObj.forEach(element => {
        const tag = document.querySelector('.' + element.tag)
        tag.addEventListener("mouseenter", function () {
            const trigger = true
            changeText(tag, element, trigger)
        })
        tag.addEventListener("mouseleave", function () {
            const trigger = false
            changeText(tag, element, trigger)
        })
    })
}



function changeText(tag, project, trigger) {
    if (trigger === true) {
        event.target.innerHTML = `<h3>${project.title}<h3/>
        <h4>${project.content}<h4/>
        <h4>${project.year}<h4/>`
        event.target.style.backgroundColor = "blue";
        console.log(tag, project, trigger)
    }
    if (trigger === false) {
        event.target.innerHTML = `<p>prueba</>`
        event.target.style.backgroundColor = "white";
        console.log(tag, project, trigger)
    }

}