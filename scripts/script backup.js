// Script for the webpage's tile expand and contents.

//init
let tilesAndNavStyle = document.createElement("style");
let selectedTile = document.createElement("style");
let expandTile = document.createElement("style");
let undoTilesAndNavStyle = document.createElement("style");

// divs instantiation
const about_me_div = "about-me-div";

// Function for clicking the [about-me-div].
function SelectAboutMeDiv() 
{
    TilesAndNavScale();
    selectedTile.innerHTML =
    `
        .${about_me_div} {
            transition: 0.75s ease-in-out;
            transform: scale(0.95);
        }
    `;
    document.head.appendChild(selectedTile);

    ExpandTile();

    document.getElementById("expand-tile").innerHTML =
    `
        <h1>
        Who am I?
        </h1>
        <p>
            Hi! I’m Euge Kyle Fabella, a passionate IT student currently pursuing a Bachelor of Science in Information Technology at 
            STI Colleges of Santa Rosa City. I have a growing interest in IT support, system administration, and development, and 
            I am eager to expand my knowledge and skills in these areas. With a strong dedication to learning and problem-solving, 
            I’m excited to explore the world of technology and contribute to meaningful solutions in the future.
        </p>
        <h3>
            Want to Learn More about Me?
        </h3>
        <p>
            [tell more about yourself, add later]
        </p>
    `;
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
    expandTile.innerHTML =
    `
        .expand-tile {
            transition: 0.75s ease-in-out;
            opacity: 0.90;
            transform: scale(1);
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
            pointer-events: all;
            transform: scale(1);
        }
        .${about_me_div} {
            transition: 0.75s ease-in-out;
            transform: scale(1);
        }
        .expand-tile {
            transition: 0.75s ease-in-out;
            opacity: 0;
            transform: scale(0.9);
            pointer-events: none;
        }
    `;

    document.head.appendChild(undoTilesAndNavStyle);

    UndoNavBar();
    
    Sleep(500).then(() => {
        document.head.removeChild(tilesAndNavStyle);
        document.head.removeChild(selectedTile);
        document.head.removeChild(expandTile);
    });
}

function NavBarToBack()
{
    document.getElementById("nav-bar").innerHTML =
    `
        <!-- Using <a> as <p> makes the button bigger; but this has one problem, 
        it gets bigger by 1-5 pixels, but not really visible unless looked at and 
        not too sure as well. -->
        <div onclick="UndoTilesAndNav()">
            <a href="#">Back</a>
        </div>

        <style>
            #nav-bar {
                /* Resizing the nav bar's width to suit the text with it. */
                width: 5%;

                cursor: pointer;
            }
        </style>
    `;
}
function UndoNavBar()
{
    document.getElementById("nav-bar").innerHTML =
    `
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>

        <style>
        #nav-bar {
            width: 15%;
        } 
        </style>

        <script type="text/javascript" src="scripts/libtest.js">
            Sleep(250).then(() => {
                DebugCall();
            });
        </script>
    `;
}




// main method





// NOTE:
