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

//
//  Tiles
//

// Function for clicking the [about-me-div].
function SelectAboutMeDiv() {
    selectedTileName = "about-me-div";

    TilesAndNavScale();
    SelectedTileColdFunction();

    // In here, since expand-tile is dynamic, using "html (+css)" is better;
    // we put NEW content in here and NEW style, therefore "html (+css)" solves it.
    // In addition, this is  the tile where it will present the contents of 
    // whatever the tile is selected.
    document.getElementById("expand-tile").innerHTML = aboutMeDivContent;
}
// Function for clicking the [certificates-div].
function SelectCertificatesDiv() {
    selectedTileName = "certificates-div";

    TilesAndNavScale();
    SelectedTileColdFunction();

    document.getElementById("expand-tile").innerHTML = certificatesDivContent;
}
function SelectTechStackDiv() {
    selectedTileName = "tech-stack-div";

    TilesAndNavScale();
    SelectedTileColdFunction();

    document.getElementById("expand-tile").innerHTML = techStackDivContent;
}
function SelectSkillsDiv() {
    selectedTileName = "skills-div";

    TilesAndNavScale();
    SelectedTileColdFunction();

    document.getElementById("expand-tile").innerHTML = skillsDivContent;
}
function SelectEducationDiv() {
    selectedTileName = "education-div";

    TilesAndNavScale();
    SelectedTileColdFunction();

    document.getElementById("expand-tile").innerHTML = educationDivContent;
}
function SelectProfessionalReferencesDiv() {
    selectedTileName = "professional-references-div";

    TilesAndNavScale();
    SelectedTileColdFunction();

    document.getElementById("expand-tile").innerHTML = placeholderDiv;
}



//
// Navigation Bar's Functions
//
function ViewHome() {
    document.getElementById("tiles-container").scrollIntoView({ 
        behavior: "smooth" 
    });
}
function ViewProjects() {
    document.getElementById("projects-container").scrollIntoView({ 
        behavior: "smooth" 
    });
}
function ViewContact() {
    document.getElementById("contact-container").scrollIntoView({ 
        behavior: "smooth" 
    });
}



//
// expanding tiles scripts
//
// These functions are used for tiles that are more dynamic such as the [education-div] and [references-div].
// Since you can only append html and css modifications in [.innerHTML], I have thought of placing it here instead.

// education-div [FIX]
let imgViewer = document.createElement("style");
let selectedEducationIcon = document.createElement("style");

function ViewSTICollege() {    
    // Calling the [Education_IMGViewerSelectAnimation] function to display a transition animation whenever a user 
    // clicks on a picture. This applies to all functions in the [education-div].
    Education_IMGViewerSelectAnimation();
    SelectedEducationIcon("sti-icon");
    
    // I delayed the change of the [#img-viewer]'s [img] to 750ms so that when the [img] gets to [width: 0vw;], it'll 
    // transition smoothly. Finally, after 500ms, it'll wait another 750ms to execute the last line of code; this line 
    // of code is to remove the added style in [head], so whenever the viewer clicks on another picture, the styles won't 
    // stack up to another.  
    Sleep([750]).then(() => {
        document.getElementById("img-viewer").src = "resources/educations/sti.jpg";
        document.getElementById("education-title").innerHTML = `College: STI College Santa Rosa`;
        document.getElementById("education-description").innerHTML = `Batch of 2021-2025 (Graduating)<br>Program: Bachelor of Science in Information Technology`;

        return Sleep(750);
    }).then(() => {
        document.head.removeChild(imgViewer);
        RemoveStyleEducationDiv();
    });
}
function ViewMCLCollege() {
    Education_IMGViewerSelectAnimation();
    SelectedEducationIcon("mcl-icon");
    
    Sleep([750]).then(() => {
        document.getElementById("img-viewer").src = "resources/educations/mcl.png";
        document.getElementById("education-title").innerHTML = `Senior High School: Mapua Malayan Colleges Laguna`;
        document.getElementById("education-description").innerHTML = `Batch of 2018-2020 (Graduated)<br>Strand: Pre-Baccalaureate Maritime`;

        return Sleep(750);
    }).then(() => {
        document.head.removeChild(imgViewer);
        RemoveStyleEducationDiv();
    });
}
function ViewPracticum() {
    Education_IMGViewerSelectAnimation();
    SelectedEducationIcon("ojt-icon");

    Sleep([750]).then(() => {
        document.getElementById("img-viewer").src = "resources/educations/practicum.jpg";
        document.getElementById("education-title").innerHTML = `IT Practicum: Obtaining Internship...`;
        document.getElementById("education-description").innerHTML = `It could be your organization soon! :D`;

        return Sleep(750);
    }).then(() => {
        document.head.removeChild(imgViewer);
        RemoveStyleEducationDiv();
    });
}
function Education_IMGViewerSelectAnimation() {
    Sleep([0]).then(() => {
        imgViewer.innerHTML =
        `
            #sub-container {
                pointer-events: none;
            }
            .options-icons img {
                pointer-events: none;
            }
        `;
        document.head.appendChild(imgViewer);

        return Sleep(0);
    }).then(() => {

        // Do animation.
        imgViewer.innerHTML +=
        `
            #sub-container img {
                animation: img-viewer-select-animation 1.5s ease-in-out;
            }

            /*
                I don't know what happened here, fix this soon. [FIX]
                What I want to happen: it shouldn't be able to click on other icons or else it'll stack and 
                break the animations. Try replicating the problem: click on the 3 icons simultaneously.
                #options-icons img {
                    animation: options-icons-pointer-events 6s;
                }
            */
        `;

        // In order for the animation to work, it'll add it in the [head] of the [html]. I used 
        // the [styles] method since I only require style changes and no html elements are added, removed, 
        // or overhauled.
        document.head.appendChild(imgViewer);

        return Sleep(1500);                
    }).then(() => {
        imgViewer.innerHTML +=
        `
            .sub-container {
                pointer-events: all;
            }
            .options-icons img {
                pointer-events: all;
            }    
        `;
        document.head.appendChild(imgViewer);
    }); 
}
function SelectedEducationIcon(input) {
    selectedEducationIcon.innerHTML = 
    `
        #${input} {
            opacity: 1 !important;
            transform: scale(1.25) !important;
            
        }
        .options-icons img:not(${input}) {
            transform: scale(1) !important;
            opacity: 0.5 !important;
        }
    `;
    document.head.appendChild(selectedEducationIcon); 
}
function RemoveStyleEducationDiv() {
    document.querySelector("#sti-icon, #mcl-icon, #ojt-icon, #nav-bar").addEventListener("click", function() {
        try {
            document.head.removeChild(selectedEducationIcon);
        }
        catch(err) {
            console.log("Error Message: " + err + "\n- Fix this some time. I don't get this part at all." +
                "\n- I do get that this error msg shows up because there's no more existing [selectedEducationIcon]"
            )
        }
    });
}

// 
// "cold" functions
//
// These functions are blocks of codes that are used so often.
// This reduces scroll time, promotes separation of concerns, and OOP.
//

// When a user clicks a tile, this is an animation where the tiles other than it scales down, 
// blurs, and navigation bar will scale up.
function TilesAndNavScale() {
    // [css] is better as it supports multiple calls of classes and IDs dynamically.
    // Since we are not gonna change the whole tiles and nav or add and remove elements, I used it. 
    tilesAndNavStyle.innerHTML =
    `
        /* 
            Increasing the scale of the nav bar.
        */
        nav {
            transition: 0.75s ease-in-out;
            transform: scale(1.10)
        }    
        /*
            Increasing the scale, blurring the tiles, and turning off [pointer-events] of the tiles to 
            prevent viewers to click on the tiles and mess up the webpage. 
        */
        .tiles {
            transition: 0.5s ease-in-out;
            filter: blur(4px);
            pointer-events: none;
            transform: scale(0.95);
        }
    `;
    // Appending the style for it to activate.
    document.head.appendChild(tilesAndNavStyle);

    // After chaning the the tiles and nav, the layout of the nav bar should be changed as a [back] button.
    NavBarToBack();
}
// On the selected tile, it has special properties for better user feedback.
function ExpandTile() {
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
function UndoTilesAndNav() {
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
function NavBarToBack() {
    // I used "html (+css)" here as I want new content inside the navigation bar and 
    // new style. Creating an entire new event.
    const navBar_A_s = 
    `
        <!-- 
            Using <a> as <p> makes the button bigger; but this has one problem, 
            it gets bigger by 1-5 pixels, but not really visible unless looked at and 
            not too sure as well. 
        -->
        <a onclick="UndoTilesAndNav()">Back</a>
    `;

    Sleep([0]).then(() => {
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
            #nav-bar a {
                cursor: pointer;
                pointer-events: all; 
            } 
            </style>
        `;
        return Sleep(375);
    }); 
}
function UndoNavBar() {
    const navBar_A_s_1 = `<a onclick="ViewHome()">Home</a>`;
    const navBar_A_s_2 = `<a onclick="ViewProjects()">Projects</a>`;
    const navBar_A_s_3 = `<a onclick="ViewContact()">Contact</a>`;

    // Added sleep so it doesn't make the navigation bar big from the start as 
    // the elements inside are three texts. Appending the elements one by one instead.
    Sleep(0).then(() => {
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
function SelectedTileColdFunction() {
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
function CheckScreenSize() {
    const getScreenSize = window.innerWidth;

    if (getScreenSize <= 600) {
        alert("You are viewing on a mobile display, please visit it on a device with a larger display such as a tablet, laptop, or desktop monitor. Sorry for the inconvenience, I am working on the mobile display optimization. Click [OK] to view page anyway.\n— Euge Kyle");
    }
}
function ClipEmailAddress() {
    navigator.clipboard.writeText("ekof08@gmail.com");
}
function LinkedInClickContactDiv() {
    window.open("https://www.linkedin.com/in/euge-kyle-fabella-782b9834a/").focus();
}

//
// main method
//
// Load upon start of web portfolio.
//alert("Expect some unoptimized screen sizes and missing contents, I'm still working on my web portfolio, thank you for your patience! Click [OK] to view page anyway.\n— Euge Kyle");

CheckScreenSize();
