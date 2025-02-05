const conEmail = document.getElementById('conEmail');
console.log(conEmail);

const conPassword = document.getElementById('conPassword');
console.log(conPassword);

const conBTN = document.getElementById('conBTN');
console.log(conBTN);

const insEmail = document.getElementById('insEmail');
console.log(insEmail);

const insEmailConfirm = document.getElementById('insEmailConfirm');
console.log(insEmailConfirm);

const insPassword = document.getElementById('insPassword');
console.log(insPassword);

const insBTN = document.getElementById('insBTN');
console.log(insBTN);

const errorBox = document.getElementById('errorBox');
console.log(errorBox);

const divError = document.getElementById('divError');
console.log(divError);

conBTN.addEventListener('click', (e) => {
    e.preventDefault();
    if(conEmail.value == ''){
        divError.style.display = 'flex';
        errorBox.innerHTML = '<p>Veuillez renseigner votre email</p>';
    }

    if(conPassword.value == ''){
        divError.style.display = 'flex';
        errorBox.innerHTML = '<p>Veuillez renseigner votre mot de passe</p>';
    }
    
    if(conEmail.value == '' && conPassword.value == ''){
        divError.style.display = 'flex';
        errorBox.innerHTML = '<p>Veuillez remplir tous les champs</p>';
    }
});

insBTN.addEventListener('click', (e) => {
    e.preventDefault();
    if(insEmail.value == ''){
        errorBox.style.display = 'flex';
        errorBox.innerHTML = '<p>Veuillez renseigner votre email</p>';
    }

    if(insEmailConfirm.value == ''){
        errorBox.style.display = 'flex';
        errorBox.innerHTML = '<p>Veuillez confirmer votre email</p>';
    }

    if(conPassword.value == ''){
        errorBox.style.display = 'flex';
        errorBox.innerHTML = '<p>Veuillez renseigner votre mot de passe</p>';
    }

    if(insEmail.value != insEmailConfirm.value){
        errorBox.style.display = 'flex';
        errorBox.innerHTML = '<p>Veuillez renseigner votre email</p>';
    }
    
    if(conEmail.value == '' && conPassword.value == '' && insEmailConfirm.value == ''){
        errorBox.style.display = 'flex';
        errorBox.innerHTML = '<p>Veuillez remplir tous les champs</p>';
    }
});

const divSelecteur = document.getElementById('selecteur');
console.log(divSelecteur);

const bareSelecteur = document.getElementById('bareSelecteur');
console.log(bareSelecteur);

const connexion = document.getElementById('connexion');
console.log(connexion);

const inscription = document.getElementById('inscription');
console.log(inscription);

var etatSelecteur = false;

clickConnexion = () =>{
    etatSelecteur = false;
    bareSelecteur.style.left = '197px';
    bareSelecteur.style.transition = '0.5s ease-in-out';
    inscription.style.display = 'none';
    connexion.style.display = 'flex';
}

clickInscription = () =>{
    etatSelecteur = true;
    bareSelecteur.style.left = '405px';
    bareSelecteur.style.transition = '0.5s ease-in-out';
    inscription.style.display = 'flex';
    connexion.style.display = 'none';
}

divSelecteur.addEventListener('click', () => {
    if(etatSelecteur === true){
        clickConnexion();
    }else if(etatSelecteur === false){
        clickInscription();
    }
});