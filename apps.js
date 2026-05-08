let  items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails  = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

next.onclick = function(){
 itemActive = itemActive + 1;
 if(itemActive >= countItem){
     itemActive = 0;
 }
 showSlider();
} 

prev.onclick = function(){
    itemActive =itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

let refreshionInterval = setInterval(() =>{
    next.click();
}, 3000)
function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    clearInterval(refreshionInterval);
    refreshionInterval = setInterval(() => {
        next.click();
    }, 5000)
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})


let menu =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menu.onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

let filterItem = document.querySelector('.items-links');
let filterImages = document.querySelectorAll('.project-img');


window.addEventListener('load',()=>{
    filterItem.addEventListener('click', (selectedItem)=>{
        if(selectedItem.target.classList.contains('item-link')){
            document.querySelector('.menu-active').classList.remove('menu-active');
            selectedItem.target.classList.add('menu-active');
            let filterName = selectedItem.target.getAttribute('data-name');
            filterImages.forEach((image)=>{
                let filterImages = image.getAttribute('data-name');
                if((filterImages == filterName) || filterName == 'all'){
                    image.style.display='block'
                }else{
                    image.style.display='none'
                }
            })
        }
    })

})

let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic")

function showRewiew(){
    for(userPic of userPics){
        userPic.classList.remove("active-pic");
    }
    for(userText of userTexts){
        userText.classList.remove("active-text");
    }
    let i = Array.from(userPics).indexOf(event.target);

    userPics[i].classList.add("active-pic");
    userTexts[i].classList.add("active-text");
}

