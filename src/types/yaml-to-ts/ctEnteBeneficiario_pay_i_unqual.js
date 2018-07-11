"use strict";
/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */
exports.__esModule = true;
var ctIdentificativoUnivocoPersonaG_pay_i_1 = require("./ctIdentificativoUnivocoPersonaG_pay_i");
var stText70_pay_i_1 = require("./stText70_pay_i");
var stText35_pay_i_1 = require("./stText35_pay_i");
var stText16_pay_i_1 = require("./stText16_pay_i");
var stNazioneProvincia_pay_i_1 = require("./stNazioneProvincia_pay_i");
var t = require("io-ts");
// required attributes
var ctEnteBeneficiario_pay_i_unqualR = t.interface({
    identificativoUnivocoBeneficiario: ctIdentificativoUnivocoPersonaG_pay_i_1.ctIdentificativoUnivocoPersonaG_pay_i,
    denominazioneBeneficiario: stText70_pay_i_1.stText70_pay_i
});
// optional attributes
var ctEnteBeneficiario_pay_i_unqualO = t.partial({
    codiceUnitOperBeneficiario: stText35_pay_i_1.stText35_pay_i,
    denomUnitOperBeneficiario: stText70_pay_i_1.stText70_pay_i,
    indirizzoBeneficiario: stText70_pay_i_1.stText70_pay_i,
    civicoBeneficiario: stText16_pay_i_1.stText16_pay_i,
    capBeneficiario: stText16_pay_i_1.stText16_pay_i,
    localitaBeneficiario: stText35_pay_i_1.stText35_pay_i,
    provinciaBeneficiario: stText35_pay_i_1.stText35_pay_i,
    nazioneBeneficiario: stNazioneProvincia_pay_i_1.stNazioneProvincia_pay_i
});
exports.ctEnteBeneficiario_pay_i_unqual = t.exact(t.intersection([ctEnteBeneficiario_pay_i_unqualR, ctEnteBeneficiario_pay_i_unqualO], "ctEnteBeneficiario_pay_i_unqual"));
