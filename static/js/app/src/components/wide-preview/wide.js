import $ from 'jquery';
import template from './wide.tmpl.html';

class WidePreview{
    constructor(container){
        this.container=$(container);
    }
    bind(){
        this.container.append(template);
        return this;
    }
}
export {WidePreview};