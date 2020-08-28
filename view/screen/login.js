import {setScreen} from "../../index.js";
import {login} from "../../controller/auth.js"; 
class LoginScreen extends HTMLElement {
  constructor() {
    super();
    this.key = this.attachShadow({ mode: "open" });
    this.key.appendChild(
      document.getElementById("loginScreen").content.cloneNode(true)
    );
    this.$form = this.key.querySelector("#form-login");
    this.$email = this.$form.querySelector('form-input[name="email"]');
    this.$password = this.$form.querySelector('form-input[name="password"]');
    this.key.querySelector("#linkToRegister").addEventListener("click", () => {
      setScreen("register");
    });
    this.key.querySelector("#linkToForgotpassword").addEventListener("click",()=>{
      setScreen("forgot");
    })
    this.$form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.login();
    });
  }
  // connectedCallback(){
  //   const user = firebase.auth().currentUser;
  //   if(!user){
  //     setScreen("screenGame");
  //   }
  // }
  login() {
    const email = this.$email.value;
    const password = this.$password.value;
    const result = login(email, password);
    if (result.hasError) {
      this.$email.error = result.error.email;
      this.$password.error = result.error.password;
    } else {
      this.$email.error = "";
      this.$password.error = "";
      setScreen("screenGame");
      alert("login success");
    }
  }
}
customElements.define('login-screen',LoginScreen);