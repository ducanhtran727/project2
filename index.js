import "./view/screen/screengame.js";
import "./view/components/form-input.js";
import "./view/screen/login.js";
import "./view/screen/register.js";
import "./model/auth.js"
import "./view/screen/fogot.js"
const screenMap = {
    screenGame : "<screen-game></screen-game>",
    login:"<login-screen></login-screen>",
    register:"<register-screen></register-screen>",
    forgot:"<forgot-password></forgot-password>",
}
function setScreen (screenName){
    document.getElementById('app').innerHTML = screenMap[screenName];
}
setScreen('screenGame');
export {setScreen};

