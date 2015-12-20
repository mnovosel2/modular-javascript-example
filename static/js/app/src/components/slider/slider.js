import template from './slider.tmpl.html';
import $ from 'jquery';
import slick from 'slick-carousel';

class Slider {
    constructor(container) {
        this.container = $(container);
        this.config = {
            variableWidth: true,
            dots: true,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1,
            arrows: false,
            infinite: true
        }
    }
    bind() {
        this.container.append(template);
        return this;
    }
    init(el, config) {
        let sliderConfig = config || this.config;
        $(el).slick(sliderConfig);
        return this;
    }
}
export {Slider};

