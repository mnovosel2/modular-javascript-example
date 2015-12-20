import $ from 'jquery';
import template from './video.tmpl.html';

class VideoPreview{
    constructor(container){
        this.container=$(container);
    }
    bind(){
        this.container.append(template);
        return this;
    }
}

export {VideoPreview};