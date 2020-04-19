export class Element{
    constructor(what, where){
        this.what = what;
        this.where = where;
    }

    createElement(){
        let el = document.createElement(this.what);
        document.querySelector(this.where).append(el);
    }
}
