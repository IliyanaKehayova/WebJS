const list1 = document.getElementById("prescriptor");
const list2 = document.getElementById("projet");
const submitBtn = document.getElementById("submitBtn");
const errorParagraphe = document.getElementById("errorParagraphe");
const form = document.getElementById("form");

let errors = [];


const tabDiffusion =[
    "Par l'un de nos clients",
    "Par relation",
    "Par troisième truc",
    "Par un moteur de recherche",
    "Par hasard"
]

tabDiffusion.forEach(el =>{
    //console.log(el);
    const myOption = new Option();
    myOption.value=el;
    myOption.textContent=el;
    list1.appendChild(myOption);
   

});

machaine="un site plaquette, un site communal, un catalogue en ligne, une boutique en ligne (e-commerce), le référencement, de l\'e-mailing, un intranet ou extranet, une GED (gestion électronique de document), un relookage de votre site,une formation, la réalisation d\'un cahier des charges, un audit accessibilité, le dépôt d'un nom de domaine en .fr, en savoir plus sur la solution ia souveraine";



let tabData = machaine.split(", ");

for(let i=0; i<tabData.length; i++){
    const myOption = new Option(); 
    myOption.value=i+1;
    myOption.textContent=tabData[i];
    list2.options[i]=myOption;
}

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const mail = document.getElementById("mail");
const phone = document.getElementById("phone");
const company = document.getElementById("company");
const message = document.getElementById("message");

form.addEventListener ("submit", function (event){
    event.preventDefault();
    

    const myFirstName = firstName.value;
    console.log("Prénom : "+myFirstName);
    const myLastName = lastName.value;
    console.log("Nom : "+myLastName);
    const myEmail = mail.value;
    console.log("Email : "+myEmail);
    const myPhone = phone.value;
    console.log("Numéro de téléphone : "+myPhone);
    const myCompany = company.value;
    console.log("Société/colléctivité : "+myCompany);
    const myMessage = message.value;
    console.log("Message : "+myMessage);





});












/*
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const company = document.getElementById("company").value;
const message = document.getElementById("message").value;


class Response {
    constructor (firstName, lastName, email, phone, company, message){
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.phone=phone;
        this.company=company;
        this.message=message;
    }
    displayForm(){
        console.log("First name : "+this.firstName);
        console.log("Last name : "+this.lastName);
        console.log("Email : "+this.email);
        console.log("Phone number : "+this.phone);
        console.log("Company/entity : "+this.company);
        console.log("Massage : "+this.message);

    }
};



const response1 = new Response (firstName);
response1.displayForm();







const firstNameValue=firstName.value;

const regex = /^[a-zA-Zàâäéèêëîïôöùûüç'-]{3,60}$/;

if(regex.test(firstNameValue)){
    //le prénom est valide mais je ne sais pas quoi mettre ici
}else{
    errors.push("Prénom invalide, doit contenir au moins trois caractères");
}

console.log(form);


form.addEventListener("submit", 
    function (event){
       console.log("Formulaire soumis !");
    }
)*/