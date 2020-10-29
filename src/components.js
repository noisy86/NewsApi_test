export function generateNewsBox(title, author, description) {
    //creating form and elements
    let container = document.getElementById("myId");
    let wrapper = document.createElement("div");
    let header = document.createElement("div");
    let titleEl = document.createElement("h5");
    let cardWrapper = document.createElement("div");
    let descriptionEl = document.createElement("p");
    //generating text from objects
    let titleText = document.createTextNode(title);
    let authorText = document.createTextNode(author);
    let descriptionText = document.createTextNode(description);
    //adding bootstrap classes
    wrapper.classList.add("card", "mb-3", "bg-light");
    cardWrapper.classList.add("card-header");
    titleEl.classList.add("card-title");
    descriptionEl.classList.add("card-text");
    //text append
    header.appendChild(authorText);
    titleEl.appendChild(titleText);
    descriptionEl.appendChild(descriptionText);
    //append
    container.appendChild(wrapper);
    wrapper.appendChild(header);
    wrapper.appendChild(cardWrapper);
    cardWrapper.appendChild(titleEl);
    cardWrapper.appendChild(descriptionEl);
}
