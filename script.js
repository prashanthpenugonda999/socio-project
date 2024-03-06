var settings = document.querySelector(".settings");
var mode = document.querySelector(".nightmode")
var like = document.querySelectorAll(".activity-img")
console.log(like)
console.log(mode)





function SettingsMenuToggle(){
    settings.classList.toggle("settings-height")
    
    
};
function nightmode(){
    mode.classList.toggle("night-mode-on")
    document.body.classList.toggle("theme");
    for( let i of like){
        console.log(i)
        i.classList.toggle("activity-img1")
    }
    
   
   
}
