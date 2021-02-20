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


//function preloadImage(img){
//    const src = img.getAttribute("data-src");
//    if(!src){
//        return;
//    }
//    img.src = src;
//}
//
const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px -500px 0px'
};

if('IntersectionObserver' in window){
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) =>{
            if(item.isIntersecting){
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        } , imgOptions);
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
