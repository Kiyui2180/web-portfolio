// Sleep function
function Sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// example
    // Sleep([0]).then(() => 
    // {
    //     // Place your first block of code here (first execution).
    //     return Sleep(1000);
    // }).then(() => {
    //     // For chaining, place your second block of code here (second execution).
    //         return Sleep(1000);                
    // }); // Add [.then(() => {});] if you need more chain executions.

    // Make the [enter number in ms] to 0 if you want the block of code's execution to be instant.

// Debug function call
function DebugCall() 
{
    alert("Successfully called!");
}