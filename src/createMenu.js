import brickImage from "../images/brick.jpg";
import cementImage from "../images/cement.jpg";
import tarImage from "../images/tar.jpg";

export
function createMenu() {
    const frag = document.createDocumentFragment();
    const content = document.querySelector(".content");
    content.innerHTML = "";     //clear everything inside first

    const heading = document.createElement("p");
    heading.classList.add("heading");
    heading.innerHTML = "Hand Picked Delicacies...";
    frag.appendChild(heading);

    //cement
    const item1 = document.createElement("div");
    item1.classList.add("item");
    
    const title1 = document.createElement("p");
    title1.innerHTML = "Cement";
    const image1 = document.createElement("img");
    image1.src = cementImage;

    item1.appendChild(title1);
    item1.appendChild(image1);

    frag.appendChild(item1);

    //brick
    const item2 = document.createElement("div");
    item2.classList.add("item");
    
    const title2 = document.createElement("p");
    title2.innerHTML = "Brick";
    const image2 = document.createElement("img");
    image2.src = brickImage;

    item2.appendChild(title2);
    item2.appendChild(image2);

    frag.appendChild(item2);

    //tar
    const item3 = document.createElement("div");
    item3.classList.add("item");
    
    const title3 = document.createElement("p");
    title3.innerHTML = "Tar";
    const image3 = document.createElement("img");
    image3.src = tarImage;

    item3.appendChild(title3);
    item3.appendChild(image3);

    frag.appendChild(item3);

    content.appendChild(frag);
};