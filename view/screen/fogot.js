import { setScreen } from "../../index.js";
import { register } from "../../controller/auth.js";
class ForgotPs extends HTMLElement{
    constructor(){
        super();
        this.key = this.attachShadow({mode:'open'});
        this.key.appendChild(document.getElementById('forgotPasswordScreen').content.cloneNode(true));
        this.$form = this.key.querySelector('#formForgot');
        this.$email = this.$form.querySelector('form-input[name="email"]');
        this.key.querySelector("#linkToLogin").addEventListener("click", () =>{
          setScreen("login");
        });
        this.$form.addEventListener("submit", (event) => {
          event.preventDefault();
          firebase.auth().sendPasswordResetEmail(this.$email.value);
          alert("Success");
          this.$email.$input.value = "";
          
        });
    }
    
}
customElements.define('forgot-password',ForgotPs);