// typing Animation script

let typed = new Typed(".typing", {
    strings: ["Developer", "Designer", "Helper"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// readmore btn


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

// const readMoreBtn = document.querySelector('.read-more-btn');
// const para = document.querySelector('.para');

// readMoreBtn.addEventListener('click',(e)=>{
//    para.classList.toggle('show-more');
//    if(readMoreBtn.innerText === 'Read More'){
//        readMoreBtn.innerText = 'Read Less';
//    }else{
//        readMoreBtn.innerText = 'Read More';
//    }
// })