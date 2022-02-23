// var ImageList = [
//     "photos/image1.jpg",
//     "photos/image2.jpg",
//     "photos/image3.jpg"
// ]

// var image = document.querySelector('.photo');
// image.src = ImageList[0];

// var currentSlide = 0;
// var next = document.querySelector('.next');
// var prev = document.querySelector('.prev');


// next.onclick = function() {
//     currentSlide++;

//     if(currentSlide > ImageList.length - 1){
//         currentSlide=0
//     }

//     image.src = ImageList[currentSlide];
// }

// prev.onclick = function() {
//     currentSlide--;
//     if(currentSlide == -1) {
//         currentSlide = ImageList.length - 1
//     }
//     image.src = ImageList[currentSlide];
// }

// function AutoPlay() {
//     currentSlide--;
//     if(currentSlide == -1) {
//         currentSlide = ImageList.length - 1
//     }
//     image.src = ImageList[currentSlide];
// }


// setInterval(AutoPlay,2000);

AOS.init();