/*
This componet will filter a selection of items and only display ones matching your search. 

This needs to be used with a search bar or a button. 
Ex. <button type="button" id="filterClass_1" class="filter_Select btn btn-outline-light" onclick="filterSelection('filterClass_1')">Filter Items</button>

The class of the HTML items you want to display can have selectors with either on or mutilple selectors.
Ex. <div class="card filterDiv filterClass_1 filterClass_2 filterClass_4">

Example filterDiv (Bootstrap Card):
    <div class="card filterClass_1 filterClass_2 filterClass_4">
        <img class="card-img-top" src="Images/images/image.png" alt="Project Placeholder">
        <div class="card-body">
            <h4 class="card-title text-dark">Title</h4>
            <p class="card-text text-dark">Description <br></p>
        </div>
    </div>

*/

let filterClass_1 = document.querySelectorAll("#filterClass_1"); //Dont Remove The #
let filterClass_2 = document.querySelectorAll("#filterClass_2"); 
let filterClass_3 = document.querySelectorAll("#filterClass_3");
let filterClass_4 = document.querySelectorAll("#filterClass_4");


function filterSelection(filter) {
    let x;
    currentDisplay = document.querySelectorAll("." + filter);
    filterDiv = document.querySelectorAll(".filterDiv");
    for (x = 0; x < filterDiv.length; x++) {
        filterDiv[x].style.display = "none";
    }
    for (x = 0; x < currentDisplay.length; x++) {
        currentDisplay[x].style.display = "inline-block";
    }
}