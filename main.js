window.addEventListener("scroll", function(){
    let navgbar = document.getElementById("sticky-nav-bar");
    let  heropd = document.getElementById("hero-sec");
    let buttond = document.getElementById("button-none");
    let buttond2 = document.getElementById("button-none-2");
    let img_lo  = document.getElementById("img-lo");
    if (window.pageYOffset >=5) {
        navgbar.classList.add("sticky-nav");
        heropd.classList.add("hero-md");
        buttond.classList.remove("nav-btn-an-d");
        buttond2.classList.remove("nav-btn-an-d");
        img_lo.classList.add("logo-img");
    }else{
        navgbar.classList.remove("sticky-nav");
        heropd.classList.remove("hero-md");
        buttond.classList.add("nav-btn-an-d");
        buttond2.classList.add("nav-btn-an-d");
        img_lo.classList.remove("logo-img");
    }
});
// slideshow

let flag = 0;
function controler(x){
    flag = flag + x ;
    slideshow(flag);
};

slideshow(flag);
function slideshow(num){
    let sleid = document.getElementsByClassName("carousel-contein");
    if (num == sleid.length) {
        flag = sleid.length -1;
        num = sleid.length -1;
    }
    if (num < 0) {
        flag = 0 ;
        num = 0 ;
    }
    for (let y of sleid) {
        y.style.display = "none";
        
    }
    sleid[num].style.display = "block";
}