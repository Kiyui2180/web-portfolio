// Script for the webpage's tile expand and contents.

// init variables 
let tilesAndNavStyle = document.createElement("style");
// selectedTile is for the selected tile itself, the UI. While selectedTileName 
// is for the webpage to dynamically pass the selected tile's name for the 
// special effects to undo and redo.
let selectedTile = document.createElement("style");
let selectedTileName;

let expandTile = document.createElement("style");
let undoTilesAndNavStyle = document.createElement("style");

// Function for clicking the [about-me-div].
function SelectAboutMeDiv() 
{
    selectedTileName = "about-me-div";

    TilesAndNavScale();
    SelectedTileColdFunction();

    // In here, since expand-tile is dynamic, using "html (+css)" is better;
    // we put NEW content in here and NEW style, therefore "html (+css)" solves it.
    // In addition, this is  the tile where it will present the contents of 
    // whatever the tile is selected.
    document.getElementById("expand-tile").innerHTML = aboutMeDivContent;
}
// Function for clicking the [picture-div].
function SelectPictureDiv()
{
    selectedTileName = "picture-div";

    TilesAndNavScale();
    SelectedTileColdFunction();

    document.getElementById("expand-tile").innerHTML = placeholderDiv; // Place pictureDivContent here.;
}
// Function for clicking the [certificates-div].
function SelectCertificatesDiv()
{
    selectedTileName = "certificates-div";

    TilesAndNavScale();
    SelectedTileColdFunction();

    document.getElementById("expand-tile").innerHTML = certificatesDivContent;
}
function SelectUserNameAndPictureDiv()
{
    selectedTileName = "username-and-picture-div";

    TilesAndNavScale();
    SelectedTileColdFunction();

    document.getElementById("expand-tile").innerHTML = placeholderDiv; // Add a unique expanding tile here.
}
function SelectTechStackDiv()
{
    selectedTileName = "tech-stack-div";

    TilesAndNavScale();
    SelectedTileColdFunction();

    document.getElementById("expand-tile").innerHTML = techStackDivContent;
}
function SelectSkillsDiv()
{
    selectedTileName = "skills-div";

    TilesAndNavScale();
    SelectedTileColdFunction();

    document.getElementById("expand-tile").innerHTML = skillsDivContent;
}
function SelectEducationDiv()
{
    selectedTileName = "education-div";

    TilesAndNavScale();
    SelectedTileColdFunction();

    document.getElementById("expand-tile").innerHTML = placeholderDiv; // Place educationDivContent here.;
}
function SelectProfessionalReferencesDiv()
{
    selectedTileName = "professional-references-div";

    TilesAndNavScale();
    SelectedTileColdFunction();

    document.getElementById("expand-tile").innerHTML = placeholderDiv;
}





// 
// cold functions
// These functions are blocks of codes that are used so often.
// This reduces scroll time, promotes separation of concerns, and OOP.
//
// When a user clicks a tile, this is an animation where the tiles other than it scales down, 
// blurs, and navigation bar will scale up.
function TilesAndNavScale()
{
    // "css" is better as it supports multiple calls of classes and IDs dynamically.
    tilesAndNavStyle.innerHTML =
    `
        nav {
            transition: 0.75s ease-in-out;
            transform: scale(1.10)
        }    
        .tiles {
            transition: 0.5s ease-in-out;
            filter: blur(4px);
            pointer-events: none;
            transform: scale(0.95);
        }
    `;
    document.head.appendChild(tilesAndNavStyle);

    NavBarToBack();
}
// On the selected tile, it has special properties for better user feedback.
function ExpandTile() 
{
    // If we use "html (+css)" in here, we also erase the the whole tiles.
    // Therefore we want to preserve it, hence the use of "css" only.
    expandTile.innerHTML =
    `
        .expand-tile {
            transition: 0.75s ease-in-out;
            opacity: 0.90;
            transform: scale(1.025);
            pointer-events: all;
        }
    `;
    document.head.appendChild(expandTile);
}
// After the user dismisses a tile, this fucntion will undo all the appended codes.
function UndoTilesAndNav()
{
    undoTilesAndNavStyle.innerHTML = 
    `
        #nav-bar {
            transition: 0.75s ease-in-out;
            transform: scale(1)
        }    
        .tiles {
            transition: 0.5s ease-in-out;
            filter: blur(0px);
            pointer-events: none;
            transform: scale(1);
        }
        .${selectedTileName} {
            transition: 0.75s ease-in-out;
            opacity: 1;
            transform: scale(1);
        }
        .expand-tile {
            transition: 0.75s ease-in-out;
            opacity: 0;
            transform: scale(0.9025);
            pointer-events: none;
        }
    `;

    document.head.appendChild(undoTilesAndNavStyle);

    UndoNavBar();
    
    Sleep(750).then(() => {
        // Although I'm not sure, I just removed the appended modifications.
        // Good practice and good measures I suppose. Still not sure how JS does its
        // memory allocation.
        document.head.removeChild(tilesAndNavStyle);

        document.head.removeChild(selectedTile);
        
        document.head.removeChild(expandTile);
        document.head.removeChild(undoTilesAndNavStyle);

        // Clearing the contents of the expanded tile
        document.getElementById("expand-tile").innerHTML = "";
    });
}
function NavBarToBack()
{
    // I used "html (+css)" here as I want new content inside the navigation bar and 
    // new style. Creating an entire new event.
    const navBar_A_s = 
    `
        <!-- Using <a> as <p> makes the button bigger; but this has one problem, 
        it gets bigger by 1-5 pixels, but not really visible unless looked at and 
        not too sure as well. -->
        <div onclick="UndoTilesAndNav()">
            <a href="#">Back</a>
        </div>
    `;

    Sleep([0]).then(() => 
    {
        document.getElementById("nav-bar").innerHTML =
        `
            <style>
            #nav-bar {
                /* Resizing the nav bar's width to suit the text with it. */
                width: 5%;

                pointer-events: none;
            }
            </style>
        `;
        return Sleep(0);
    }).then(() => {
        document.getElementById("nav-bar").innerHTML += navBar_A_s;
        return Sleep(375);
    }).then(() => {
        document.getElementById("nav-bar").innerHTML +=
        `
            <style>
            #nav-bar {
                cursor: pointer;
                pointer-events: all; 
            } 
            </style>
        `;
        return Sleep(375);
    }); 
}
function UndoNavBar()
{
    const navBar_A_s_1 = `<a href="#">Home</a>`;
    const navBar_A_s_2 = ` <a href="#">Projects</a>`;
    const navBar_A_s_3 = ` <a href="#">Contact</a>`;

    // Added sleep so it doesn't make the navigation bar big from the start as 
    // the elements inside are three texts. Appending the elements one by one instead.
    Sleep(0).then(() => 
    {
        document.getElementById("nav-bar").innerHTML =
        `
            <style>
            #nav-bar {
                width: 20em;
                pointer-events: none; 
            } 
            </style>
        `;
        return Sleep(0);
    }).then(() => {
        document.getElementById("nav-bar").innerHTML += navBar_A_s_1;
        return Sleep(300);
    }).then (() => {
        document.getElementById("nav-bar").innerHTML += navBar_A_s_2;
        return Sleep(300);
    }).then (() => {
        document.getElementById("nav-bar").innerHTML += navBar_A_s_3;
        return Sleep(300);
    }).then (() => {
        // After adding all the three options, it will now enable the cursor's pointer events to true.
        // Being able to click on the options again.
        document.getElementById("nav-bar").innerHTML +=
        `
            <style>
            #nav-bar {
                pointer-events: all; 
            } 
            </style>
        `;
    });
}
function SelectedTileColdFunction()
{
    // Using "css" to preserve the content and only editing the style.
    // Using "html (+css)" does not preserve it, therfore "css" is much better.
    selectedTile.innerHTML =
    `
        .${selectedTileName} {
            transition: 0.75s ease-in-out;
            transform: scale(0.95);
            opacity: 0.25;
        }
    `;
    document.head.appendChild(selectedTile);

    ExpandTile();
}
function CheckScreenSize()
{
    const getScreenSize = window.innerWidth;

    if (getScreenSize <= 600)
    {
        alert("You are viewing on a mobile display, please visit it on a device with a larger display such as a tablet, laptop, or desktop monitor. Sorry for the inconvenience, I am working on the mobile display optimization. Click [OK] to view page anyway.\n— Euge Kyle");
    }
}

// main method
// Load upon start of web portfolio.
alert("Web Portfolio is still under development, expect some unoptimized screen sizes and missing contents, thank you for your patience! Click [OK] to view page anyway.\n— Euge Kyle");

CheckScreenSize();