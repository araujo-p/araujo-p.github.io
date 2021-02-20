const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    }
}

imagesToLoad.forEach((img) => {
    loadImages(img);
})

//Threshold effect
//const imgOptions = {
//    threshold: 0,
//    rootMargin: '0px 0px 50px 0px'
//};

if('IntersectionObserver' in window){
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) =>{
            if(entry.isIntersecting){
                loadImages(entry.target);
                imgObserver.unobserve(entry.target);
            }
        });
    });
    imagesToLoad.forEach((img) =>{
        imgObserver.observe(img);
    });
}
else {
        imagesToLoad.forEach((img) => {
            loadImages(img);
        });
}
