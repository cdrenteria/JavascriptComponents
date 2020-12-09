/* 
Example HTML:
    <div class="carouselslide">
        <div class="card w-75">
            <div class="card-body">
                <h5 class="card-title">Card title 2</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="buttonsWrapper">
                    <button class="btnSlide carouselPrev" onclick="plusDivs(-1)"><i class="fas fa-arrow-left"></i></button>
                    <button class="btnSlide carouselNext" onclick="plusDivs(1)"><i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    </div>
 */

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("carouselslide");
  showIndex = slideIndex -1
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  if (n > 3) {
    slideIndex = 1;
    showDivs(slideIndex);
    return;
  };
  if (showIndex < 0) {
    slideIndex = x.length;
    showDivs(slideIndex);
    return;
  };
  x[showIndex].style.display = "flex";  
}