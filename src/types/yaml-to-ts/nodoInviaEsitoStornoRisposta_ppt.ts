/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { risposta_ppt } from "./risposta_ppt";
import * as t from "io-ts";

// required attributes
const nodoInviaEsitoStornoRisposta_ppt2R = t.interface({});

// optional attributes
const nodoInviaEsitoStornoRisposta_ppt2O = t.partial({
  esito: t.string
});

export const nodoInviaEsitoStornoRisposta_ppt2 = t.exact(
  t.intersection(
    [nodoInviaEsitoStornoRisposta_ppt2R, nodoInviaEsitoStornoRisposta_ppt2O],
    "nodoInviaEsitoStornoRisposta_ppt2"
  )
);

export type nodoInviaEsitoStornoRisposta_ppt2 = t.TypeOf<
  typeof nodoInviaEsitoStornoRisposta_ppt2
>;

export const nodoInviaEsitoStornoRisposta_ppt = t.intersection(
  [risposta_ppt, nodoInviaEsitoStornoRisposta_ppt2],
  "nodoInviaEsitoStornoRisposta_ppt"
);

export type nodoInviaEsitoStornoRisposta_ppt = t.TypeOf<
  typeof nodoInviaEsitoStornoRisposta_ppt
>;
