import {setScreen} from "../../index.js"
class ScreenGame extends HTMLElement{
    constructor(){
        super();
        this.key = this.attachShadow({mode:'open'});
        this.key.appendChild(document.getElementById("gameScreen").content.cloneNode(true));
        this.$displayName = this.key.querySelector('#displayName');
        this.key.querySelector('#linkToLogin').addEventListener('click',()=>{
            setScreen("login");
        })
        this.key.querySelector("#linkToRegister").addEventListener('click',()=>{
            setScreen("register")
        })
        
    }  
    connectedCallback(){
        const user = firebase.auth().currentUser;
        if(user){
            name = user.displayName;
            if(name){
                this.$displayName.innerHTML = `Hello ${name}`;
                this.key.querySelector("#linkToLogin").innerHTML = "Logout";
                this.key.querySelector("#linkToLogin").addEventListener('click',()=>{
                firebase.auth().signOut();              
            })
            }

            
        }
    }
    

}
customElements.define('screen-game',ScreenGame);