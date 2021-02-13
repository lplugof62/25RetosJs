const result = document.getElementById('boxRetos')
const filter = document.getElementById('filter')
const listItems = []
const obj = [
    {"src": "ExpandingCards.JPG", "title": "Expanding Cards", "href":"1-ExpandingCarts"},
    {"src": "ProgressSteps", "title": "Progress Steps", "href": "2- ProgressSteps"},
    {"src": "RotatingNavigation", "title": "Rotating Navigation", "href": "3- Rotating Navigation"},
    {"src": "HiddenSearch", "title": "Hidden Search", "href": "4-Hidden Search"},
    {"src": "BlurryLoading", "title": "Blurry Loading", "href": "5-Blurry Loading"},
    {"src": "DrangNDrop", "title": "Drag and Drop", "href": "6-Drag N Drop"},
    {"src": "autoTex", "title": "Auto Text", "href": "7-AutoText"},
    {"src": "HoverBoard", "title": "Hover Board", "href": "8-Hoverboard"},
    {"src": "ScrollAnimation", "title": "Scroll Animation", "href": "9 - Scroll Animation"},
    {"src": "FormInput", "title": "Form Input Wave", "href": "10 - Form input wave"},
    {"src": "DadJokes", "title": "Dad Jokes", "href": "11 - Dad Jokes"},
    {"src": "SoundBoard", "title": "Sound Board","href": "12 - Sound Board"},
    {"src": "LiveUserFilter", "title": "Live User Filter", "href": "13 - Live User Filter"},
    {"src": "ButtonRipple", "title": "Button Ripple Effect", "href": "14 - Button Ripple Effect"},
    {"src": "BackgroundSlider", "title": "Background Slider","href": "15 - Background Slider"},
    {"src": "KineticLoader", "title": "Kinetic Loader", "href": "16 - Kinetic loader"},
    {"src": "NetflixMobile", "title": "Netflix Navigation", "href": "17 - Netflix Navigation"},
    {"src": "TestimonialBoxSwitcher", "title": "Testimonial Box Switcher", "href": "18 - Testimonial Box Switcher"},
    {"src": "Pokedex", "title": "Pokedex", "href": "19 - Pokedex"},
    {"src": "DobleClickHeart", "title": "Doble Click Heart", "href": "20 - Doble click Heart"},
    {"src": "EventKeyCode", "title": "Event Keycodes", "href": "21 - Event Keycodes"},
    {"src": "MobileTabNavigation", "title": "Mobile Nav Navigation", "href": "22 - Mobile Nav Navigation"},
    {"src": "DrinkWater", "title": "Drink Water", "href": "23 - Drink Water"},
    {"src": "FeedbackUIDesing", "title": "Feedback UI Desing", "href": "24 - Feedback UI Desing"},
    {"src": "GithubProfile", "title": "GitHub Profile", "href": "25 - GitHub Profile"}
]

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

function getData() {

    // Clear result
    result.innerHTML = ''

    obj.forEach(element => {
        const div = document.createElement('div')

        listItems.push(div)

        div.innerHTML = `
            <div class="card text-center text-info bg-dark" style="width: 18rem;">
                <img class="card-img-top" src="img2/${element.src}.png" alt="Card image cap">
                <div class="card-body bg-dark">
                    <h5 class="card-title bg-dark">${element.title}</h5>
                    <a class="btn btn-info" href="retos/${element.href}/index.html" role="button">Click me</a>
                </div>
            </div>
            <br>
        `
        result.appendChild(div)
    })
}
console.log(listItems)

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}