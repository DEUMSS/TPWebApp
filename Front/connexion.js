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

const divValid = document.getElementById('divValid');
console.log(divValid);

const validBox = document.getElementById('validBox');
console.log(validBox);

conBTN.addEventListener('click', (e) => {
    e.preventDefault();

    if(conEmail.value == ''){
        divValid.style.display = 'none';
        divError.style.display = 'flex';
        errorBox.innerHTML = '<p>Veuillez renseigner votre email</p>';
    }else if(conPassword.value == ''){
        divValid.style.display = 'none';
        divError.style.display = 'flex';
        errorBox.innerHTML = '<p>Veuillez renseigner votre mot de passe</p>';
    }else if(conEmail.value == '' && conPassword.value == ''){
        divValid.style.display = 'none';
        divError.style.display = 'flex';
        errorBox.innerHTML = '<p>Veuillez remplir tous les champs</p>';
    }else{    
        let data = localStorage.getItem(conEmail.value);
        if (data) {
            let user = JSON.parse(data);
            if (user.password == conPassword.value) {
                divError.style.display = 'none';
                divValid.style.display = 'flex';
                validBox.innerHTML = '<p>Connexion réussie</p>';
                window.location.href = 'index.html';
            }else{
                divValid.style.display = 'none';
                divError.style.display = 'flex';
                errorBox.innerHTML = '<p>Mot de passe incorrect</p>';
            }
        } else {
            divValid.style.display = 'none';
            divError.style.display = 'flex';
            errorBox.innerHTML = '<p>Utilisateur introuvable</p>';
        }
    }
});


insBTN.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');

    const emailInscription = insEmail.value;
    const emailConfirmInscription = insEmailConfirm.value;
    const passwordInscription = insPassword.value;

    if(emailInscription == ''){
        console.log('1');
        divValid.style.display = 'none';
        divError.style.display = 'flex';
        errorBox.innerHTML = '<p>Veuillez renseigner votre email</p>';
    }else if(emailConfirmInscription == ''){
        console.log('2');
        divValid.style.display = 'none';
        divError.style.display = 'flex';
        errorBox.innerHTML = '<p>Veuillez confirmer votre email</p>';
    }else if(passwordInscription == ''){
        console.log('3');
        divValid.style.display = 'none';
        divError.style.display = 'flex';
        errorBox.innerHTML = '<p>Veuillez renseigner votre mot de passe</p>';
    }else if(emailInscription != emailConfirmInscription){
        console.log('4');
        divValid.style.display = 'none';
        divError.style.display = 'flex';
        errorBox.innerHTML = '<p>Veuillez renseigner votre email</p>';
    }else if(emailInscription == '' && passwordInscription == '' && emailConfirmInscription == ''){
        console.log('5');
        divValid.style.display = 'none';
        divError.style.display = 'flex';
        errorBox.innerHTML = '<p>Veuillez remplir tous les champs</p>';
    }else if(emailInscription == emailConfirmInscription && passwordInscription != ''){
        console.log('6');
        let userData = {
            email: emailInscription,
            password: passwordInscription
        }
        localStorage.setItem(emailInscription, JSON.stringify(userData));
        divError.style.display = 'none';
        divValid.style.display = 'flex';
        validBox.innerHTML = '<p>Inscription réussie</p>';
    }else{
        console.log('7');
        divValid.style.display = 'none';
        divError.style.display = 'flex';
        errorBox.innerHTML = '<p>Erreur lors de l\'inscription, vérifier que les deux adresses email soient identiques</p>';
    }
});

const divSelecteur = document.getElementById('selecteur');
console.log(divSelecteur);

const bareConnect = document.getElementById('connect');
console.log(bareConnect);

const bareSuscribe = document.getElementById('suscribe');
console.log(bareSuscribe);

const connexion = document.getElementById('connexion');
console.log(connexion);

const inscription = document.getElementById('inscription');
console.log(inscription);

var etatSelecteur = false;
bareConnect.style.borderBottom = '3px solid violet';

clickConnexion = () =>{
    etatSelecteur = false;
    bareSuscribe.style.borderBottom = 'inherit';
    bareConnect.style.borderBottom = '3px solid violet';
    connexion.style.display = 'flex';
    inscription.style.display = 'none';
}

clickInscription = () =>{
    etatSelecteur = true;
    bareConnect.style.borderBottom = 'inherit';
    bareSuscribe.style.borderBottom = '3px solid violet';
    connexion.style.display = 'none';
    inscription.style.display = 'flex';
}

divSelecteur.addEventListener('click', () => {
    if(etatSelecteur === true){
        clickConnexion();
        divError.style.display = 'none';
    }else if(etatSelecteur === false){
        clickInscription();
        divError.style.display = 'none';
    }
});


