const gridContainer = document.querySelector("#gridContainer");
const reset = document.querySelector("#reset");

// Create a webpage with a 16x16 grid of square divs.

// function initializeGrid() {
// Create 16 flex-container divs and add them to #gridContainer
    for (let containerIndex = 1; containerIndex <= 16; containerIndex++) {
        const container = document.createElement("div");
        // set display to flex and justify content to space evenly with no padding
        container.style.display = "flex";
        container.style.justifyContent = "center";
        container.style.maxWidth = "100%";
    
        // add 16 divs into each container
        for (let squareIndex = 1; squareIndex <= 16; squareIndex++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            square.addEventListener("mouseover", () => {
                square.classList.add("black");
                });
            square.innerText = squareIndex;
            square.style.width = "30px"; // Adjust the width as needed
            square.style.height = "30px"; // Adjust the height as needed
            square.style.border = "1px solid #ccc"; // Add border for visualization
        
        // add square to container
         container.appendChild(square);
        }
    // add container to #gridContainer
    gridContainer.appendChild(container);
    }

// }

// initializeGrid();



// set up event listener on reset element. on click, set background color of square elements to white. Maybe rerun the initialization sequence above?






// It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).


// Be careful with borders and margins, as they can adjust the size of the squares!

// Open your browser’s developer tools.

// Check if there are any errors in the JavaScript console.



// Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. 

// Research button tags in HTML and how you can make a JavaScript function run when one is clicked.

// Also check out prompts.

// You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.




// Push your project to GitHub!





// Extra credit
// Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.

// Rather than a simple color change from black to white, each interaction should randomize the square’s RGB value entirely.




// Additionally, implement a progressive darkening effect where each interaction adds 10% more black or color to the square. The objective is to achieve a completely black square only after ten interactions.

// You can choose to do either one or both of these challenges, it’s up to you.