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

export class ElementId extends Element{
    constructor(what, where, id) {
        super(what, where);
        this.id = id;
      }
    
      createElement(){
        let el = document.createElement(this.what);
        el.id = this.id;
        document.querySelector(this.where).append(el);
    }
}

export class ElementTxt extends Element{
    constructor(what, where, txt) {
        super(what, where);
        this.txt = txt;
      }
    
      createElement(){
        let el = document.createElement(this.what);
        el.append(this.text);
        document.querySelector(this.where).append(el);
    }
}

export class ElementIdTxt extends ElementId{
    constructor(what, where, id, text) {
        super(what, where, id);
        this.text = text;
      }
    
      createElement(){
        let el = document.createElement(this.what);
        el.id = this.id;
        el.innerHTML = this.text;
        document.querySelector(this.where).append(el);
    }
}
