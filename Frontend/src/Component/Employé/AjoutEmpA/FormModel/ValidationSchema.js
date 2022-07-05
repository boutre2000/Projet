import * as Yup from "yup";
import CheckOutFormModel from "./CheckOutFormModel";
const {
  formField: {
    Nom,
    Prenom,
    numSs,
    numCni,
    prenomAr,
    nomAr,
    sexe,
    dateNaiss,
    situationFamiliale,
    nomEps,
    prenomEps,
    Enfant,
    nbrEnfant,
    nomMere,
    prenomMere,
    prenomPere,
    prenomEpsAr,
    nomEpsAr,
    ccp,
    rib,
    adresse,
    mobile,
    email,
    managId,
    idP,
    droitCong,
    Role,
    password,
    RépéterLeMotDePasse,
  },
} = CheckOutFormModel;
//const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default Yup.object().shape({
  [Nom.name]: Yup.string().required(`${Nom.requiredErrorMsg}`),
  [Prenom.name]: Yup.string().required(`${Prenom.requiredErrorMsg}`),
  [numSs.name]: Yup.string()
    .required(`${numSs.requiredErrorMsg}`)
    .test("len", `${numSs.invalidErrorMsg}`, (val) => val && val.length === 15),
  [numCni.name]: Yup.string()
    .nullable()
    .required(`${numCni.requiredErrorMsg}`)
    .test(
      "len",
      `${numCni.invalidErrorMsg}`,
      (val) => val && val.length === 18
    ),
  [prenomAr.name]: Yup.string().required(`${prenomAr.requiredErrorMsg}`),

  [nomAr.name]: Yup.string().nullable().required(`${nomAr.requiredErrorMsg}`),
  [sexe.name]: Yup.string().required(`${sexe.requiredErrorMsg}`),
  [dateNaiss.name]: Yup.string()
    .nullable()
    .required(`${dateNaiss.requiredErrorMsg}`),
  [situationFamiliale.name]: Yup.string().required(
    `${situationFamiliale.requiredErrorMsg}`
  ),
  [nomEps.name]: Yup.string().required(`${nomEps.requiredErrorMsg}`),
  [prenomEps.name]: Yup.string()
    .nullable()
    .required(`${prenomEps.requiredErrorMsg}`),
  [Enfant.name]: Yup.string().required(`${Enfant.requiredErrorMsg}`),
  [nbrEnfant.name]: Yup.string().required(`${nbrEnfant.requiredErrorMsg}`),
  // .test(
  //   "len",
  //   `${nbrEnfant.invalidErrorMsg}`,
  //   (val) => val && val.length < 1
  // ),
  [nomMere.name]: Yup.string()
    .nullable()
    .required(`${nomMere.requiredErrorMsg}`),
  [prenomMere.name]: Yup.string()
    .nullable()
    .required(`${prenomMere.requiredErrorMsg}`),
  [prenomPere.name]: Yup.string()
    .nullable()
    .required(`${prenomPere.requiredErrorMsg}`),
  [prenomEpsAr.name]: Yup.string()
    .nullable()
    .required(`${prenomEpsAr.requiredErrorMsg}`),
  [nomEpsAr.name]: Yup.string()
    .nullable()
    .required(`${nomEpsAr.requiredErrorMsg}`),
  [ccp.name]: Yup.string()
    .required(`${ccp.requiredErrorMsg}`)
    .test("len", `${ccp.invalidErrorMsg}`, (val) => val && val.length === 16),
  //.matches(visaRegEx, ccp.invalidErrorMsg),
  [rib.name]: Yup.string()
    .required(`${rib.requiredErrorMsg}`)
    .test("len", `${rib.invalidErrorMsg}`, (val) => val && val.length === 27),
  //.matches(visaRegEx, rib.invalidErrorMsg),
  [adresse.name]: Yup.string().required(`${adresse.requiredErrorMsg}`),
  [mobile.name]: Yup.string()
    .required(`${mobile.requiredErrorMsg}`)
    .test(
      "len",
      `${mobile.invalidErrorMsg}`,
      (val) => val && val.length === 10 //0555119667
    ),
  [managId.name]: Yup.string().required(`${managId.requiredErrorMsg}`),
  [idP.name]: Yup.string().required(`${idP.requiredErrorMsg}`),
  [droitCong.name]: Yup.string().required(`${droitCong.requiredErrorMsg}`),

  [Role.name]: Yup.string().required(`${Role.requiredErrorMsg}`),
  [password.name]: Yup.string().required(`${password.requiredErrorMsg}`),
  //.matches(visaRegEx, password.invalidErrorMsg),
  [RépéterLeMotDePasse.name]: Yup.string()
    .nullable()
    .required(`${RépéterLeMotDePasse.requiredErrorMsg}`),
  //.matches(visaRegEx, RépéterLeMotDePasse.invalidErrorMsg),
  [email.name]: Yup.string().nullable().required(`${email.requiredErrorMsg}`),
  //.matches(visaRegEx, Email.invalidErrorMsg),
});
