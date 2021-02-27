const imagesToLoad = document.querySelectorAll("[data-srcset]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-srcset"));
    image.onload = () => {
        image.removeAttribute("data-srcset");
    }
}

imagesToLoad.forEach((img) => {
    loadImages(img);
})

//Threshold effect
const imgOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

if('IntersectionObserver' in window){
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) =>{
            if(item.isIntersecting){
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        }, imgOptions);
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
