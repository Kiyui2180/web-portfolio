// Sleep function
function Sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// example
    // Sleep([enter number in ms]).then(() => 
    //     {
    //         // Place your first block of code here (first execution).
    //         return Sleep(1000);
    //     }).then(() => {
    //         // For chaining, place your second block of code here (second execution).
    //     }); // Add [.then(( => {}));] if you need more chain executions.


// Debug function call
function DebugCall() 
{
    alert("Successfully called!");
}