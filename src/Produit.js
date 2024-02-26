export default class Produit {
    constructor(id, nom, qte, photo) {
        this._id = id;
        this._nom = nom;
        this._qte = qte;
        this._photo = photo;
    }
    get nom() {
        return this._nom;
    }
    get id() {
        return this._id;
    }
    get qte() {
        return this._qte;
    }
    get photo() {
        return this._photo;
    }

    set nom(nom) {
        this._nom = nom;
    }
    set qte(qte) {
        this._qte = qte;
    }

    decrementer() {
        this._qte--;
    }
    incrementer() {
        this._qte++;
    }
}