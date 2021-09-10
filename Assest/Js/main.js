const menu = document.querySelector('#mobile_menu')
const menulinks = document.querySelector('.navbar_menu')
const navlogo = document.querySelector('.navbar_logo')
const body = document.querySelector('body')

// Display Mobile Menu
const mobilemenu = () =>{
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
    body.classList.toggle('active')
};

menu.addEventListener('click',mobilemenu);

// Counter Section Animation 
// var doctor = setInterval(doctor,10)
// var departments = setInterval(departments,25)
// var lab = setInterval(lab,25)
// var awards = setInterval(awards,10)
// let count1 = 1;
// let count2 = 2;
// let count3 = 3;
// let count4 = 4;

// function doctor(){
//     count1++;
//     document.querySelector('#dctrNum').innerHTML = count1;
//     // Stop Condition
//     if(count1 == 85)
//     clearInterval(doctor)
// }

// function departments(){
//     count2++;
//     document.querySelector('#deptNum').innerHTML = count2;
//     // Stop Condition
//     if(count2 == 18)
//     clearInterval(departments)
// }

// function lab(){
//     count3++;
//     document.querySelector('#labNum').innerHTML = count3;
//     // Stop Condition
//     if(count3 == 12)
//     clearInterval(lab)
// }

// function awards(){
//     count4++;
//     document.querySelector('#awrdNum').innerHTML = count4;
//     // Stop Condition
//     if(count4 == 150)
//     clearInterval(awards)
//     break
// }

// Show Popup
// Popup 1
var openpopup = document.querySelector('#popup-btn')
var openpopups = document.querySelector('#popup-btns')
var closepopup = document.querySelector('.popup-close-btn')

openpopup.addEventListener("click", function () {
    document.body.classList.add("popup-active")
});
openpopups.addEventListener("click", function () {
    document.body.classList.add("popup-active")
});

closepopup.addEventListener("click", function () {
    document.body.classList.remove("popup-active")
});

// Gynecologist Html Page Assign Url
function GynecologistWindow(){
    window.location.assign('/Gynecologist.html')
}
