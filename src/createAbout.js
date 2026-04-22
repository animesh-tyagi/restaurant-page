export
function createAbout() {
    const frag = document.createDocumentFragment();
    const content = document.querySelector(".content");
    content.innerHTML = "";     //clear everything inside first

    const heading = document.createElement("p");
    heading.classList.add("heading");
    heading.innerHTML = "About...";
    frag.appendChild(heading);
    
    const aboutInfo = document.createElement("p");
    aboutInfo.innerHTML = "tf bro, mind your own business. Ever head of this thing called privacy?";
    frag.appendChild(aboutInfo);

    content.appendChild(frag);
};