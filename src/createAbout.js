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
    aboutInfo.innerHTML = "you lowkey don't need to know anymore information about us.";
    frag.appendChild(aboutInfo);

    content.appendChild(frag);
};