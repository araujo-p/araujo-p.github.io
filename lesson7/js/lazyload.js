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
    threshold: 0,
    rootMargin: '0px 0px 300px 0px'
};

if('IntersectionObserver' in window){
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) =>{
            if(entries.isIntersecting){
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
