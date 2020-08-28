class FormInput extends HTMLElement{
    constructor(){
        super();
        this.key = this.attachShadow({mode:'open'});
        this.key.appendChild(document.getElementById('form-input').content.cloneNode(true));
        this.$input = this.key.querySelector("#input");
        this.$label = this.key.querySelector("#label");
        this.$error = this.key.querySelector("#errorMessage");
        this.$container = this.key.querySelector("#container");
    };
    static get observedAttributes(){
        return ["type","value","label","error"]
    };
    attributeChangedCallback(){
        this.render();
    }
    set value(newval){
        this.setAttribute("value",newval);
    }
    get value (){
        return this.$input.value;
    }
    set error (newerror){
        return this.setAttribute('error',newerror);
    };
    get error (){
        return this.getAttribute('error');
    }
    render(){
        this.$input.type = this.getAttribute("type");
        this.$label.innerHTML = this.getAttribute("label");
        if(this.error){
            this.$error.innerHTML = this.error;
            this.$container.classList.add('error');
        }else{
            this.$error.innerHTML = "";
            this.$container.classList.remove('error');
        }
    }
}
customElements.define("form-input",FormInput);