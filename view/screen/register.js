
import {setScreen} from "../../index.js";
import {register} from "../../controller/auth.js"
class RegiserScreen extends HTMLElement{
    constructor(){
        super();
        this.key = this.attachShadow({mode:'open'});
        this.key.appendChild(document.getElementById('registerScreen').content.cloneNode(true));
        this.key.querySelector('#linkToLogin').addEventListener('click',()=>{
            setScreen('login')
        });
        this.$form = this.key.querySelector("#formRegister");
        this.$email = this.$form.querySelector('form-input[name="email"]');
        this.$password = this.$form.querySelector('form-input[name="password"]');
        this.$displayname = this.$form.querySelector('form-input[name="displayname"]');
        this.$confirmpassword = this.$form.querySelector('form-input[name="confirmpassword"]');
        this.$form.addEventListener('submit',(event)=>{
            event.preventDefault();
            this.register()
        })
    }
   async register(){
        const email = this.$email.value;
        const password = this.$password.value;
        const displayname = this.$displayname.value;
        const confirmpassword = this.$confirmpassword.value;
        const result = await register(email,password,displayname,confirmpassword);
         if (result.hasError) {
           this.$email.error = result.error.email;
           this.$password.error = result.error.password;
           this.$confirmpassword.error = result.error.confirmpassword;
           this.$displayname.error = result.error.displayname;
         } else {
           this.$email.error = "";
           this.$password.error = "";
           this.$displayname.error = "";
           this.$confirmpassword.error = "";
          
        //    this.$email = "";
        //    this.$password= "";
        //    this.$displayname = "";
        //    this.$confirmpassword = "";
            this.$email.$input.value = "";
            this.$password.$input.value = "";
            this.$displayname.$input.value = "";
            this.$confirmpassword.$input.value ="";
            alert("register success")
           
         }
    }
}
customElements.define('register-screen',RegiserScreen);