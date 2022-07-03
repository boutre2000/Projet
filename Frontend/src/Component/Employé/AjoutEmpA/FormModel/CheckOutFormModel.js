const data = {
  formId: "checkoutForm",
  formField: {
    Nom: {
      name: "Nom",
      label: "Nom employé ",
      requiredErrorMsg: "First name is required",
    },
    Prenom: {
      name: "Prenom",
      label: "Prenom employé ",
      requiredErrorMsg: "Last name is required",
    },
    numSs: {
      name: "numSs",
      label: "Numéro Sécurité Social ",
      requiredErrorMsg: "Number is required",
    },
    numCni: {
      name: "numCni",
      label: "Numéro d’identifiant nationale ",
    },
    prenomAr: {
      name: "prenomAr",
      label: "اللقب ",
      requiredErrorMsg: "اللقب is required",
    },
    nomAr: {
      name: "nomAr",
      label: "الاسم",
      requiredErrorMsg: "nomAr is required",
    },
    sexe: {
      name: "sexe",
      requiredErrorMsg: "sexe is required",
    },
    dateNaiss: {
      name: "dateNaiss",
      requiredErrorMsg: "Date De Naissance is required",
    },
    situationFamiliale: {
      name: "situationFamiliale",
      label: "Situation Familiale ",
      requiredErrorMsg: "Situation Familiale is required",
    },
    nomEps: {
      name: "nomEps",
      label: "Nom épouse ",
    },
    prenomEps: {
      name: "prenomEps",
      label: "Prénom épouse ",
    },
    Enfant: {
      name: "Enfant",
      label: "Enfant ",
      requiredErrorMsg: "The response is required",
    },
    nbrEnfant: {
      name: "nbrEnfant",
      label: "Nombre d’enfants ",
    },
    nomMere: {
      name: "nomMere",
      label: "NomMère ",
      requiredErrorMsg: "NomMère is required",
    },
    prenomMere: {
      name: "prenomMere",
      label: "PrenomMère ",
      requiredErrorMsg: "PrenomMère is required",
    },
    prenomPere: {
      name: "prenomPere",
      label: "PrenomPère ",
      requiredErrorMsg: "PrenomPère is required",
    },
    prenomEpsAr: {
      name: "prenomEpsAr",
      label: "لقب الزوجة ",
    },
    nomEpsAr: {
      name: "nomEpsAr",
      label: "اسم الزوجة",
    },
    ccp: {
      name: "ccp",
      label: "Numéro compte CCP ",
      requiredErrorMsg: "Numéro compte CCP is required",
      //invalidErrorMsg: "NuméroCompteCCP is not valid (e.g. 70000)",
    },
    rib: {
      name: "rib",
      label: "Numéro de compte bancaire (RIB) ",
      requiredErrorMsg: "Numéro de compte bancaire (RIB) is required",
      // invalidErrorMsg:
      //"Numéro de compte bancaire (RIB) is not valid (e.g. 70000)",
    },
    adresse: {
      name: "adresse",
      label: "Adresse ",
      requiredErrorMsg: "Adresse is required",
    },
    mobile: {
      name: "mobile",
      label: "Mobile ",
      requiredErrorMsg: "Mobile is required",
      invalidErrorMsg: "Mobile is not valid (e.g. 70000)",
    },
    email: {
      name: "email",
      label: "Email ",
      requiredErrorMsg: "Email is required",
    },
    managId: {
      name: "managId",
      label: "managId ",
      requiredErrorMsg: "managId is required",
    },
    idP: {
      name: "idP",
      label: "idP ",
      requiredErrorMsg: "idP is required",
    },
    Role: {
      name: "role",
      label: "Role ",
      requiredErrorMsg: "Role is required",
    },
    droitCong: {
      name: "droitCong",
      label: "Droit de congé ",
      requiredErrorMsg: "Droit De Congé is required",
    },
    password: {
      name: "password",
      label: "Mot de passe ",
      requiredErrorMsg: "Mot De Passe is required",
    },
    RépéterLeMotDePasse: {
      name: "RépéterLeMotDePasse",
      label: "Répéter le mot de passe ",
      requiredErrorMsg: "Email is required",
    },
  },
};

export default data;
