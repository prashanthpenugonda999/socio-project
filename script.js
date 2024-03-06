var settings = document.querySelector(".settings");
var mode = document.querySelector(".nightmode")
const like = document.getElementsByClassName(".activity-img")




function SettingsMenuToggle(){
    settings.classList.toggle("settings-height")
    
    
};
function nightmode(){
    mode.classList.toggle("night-mode-on")
    document.body.classList.toggle("theme");
    like.classList.add(".activity-img1")
   
}
