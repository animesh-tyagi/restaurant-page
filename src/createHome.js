export 
function createHome() {
    const frag = document.createDocumentFragment();
    const content = document.querySelector(".content");
    content.innerHTML = "";     //clear everything inside first

    const heading = document.createElement("p");
    heading.classList.add("heading");
    heading.innerHTML = "Real Restaurant btw";
    frag.appendChild(heading);

    const homeInfo = document.createElement("p");
    homeInfo.classList.add("homeInfo");
    homeInfo.innerHTML = "This is a real restaurant btw. Just making sure we're on the same page gng. Feel free to navigate through our real menu or learn more real information about us"
    frag.appendChild(homeInfo);
    content.appendChild(frag);
    
}
