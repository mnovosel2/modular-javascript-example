import $ from 'jquery';
import {Slider} from './components/slider/slider';
import {WidePreview} from './components/wide-preview/wide';
import {VideoPreview} from './components/video-preview/video';
let mainContainer='.container';

new Slider(mainContainer).bind().init('.slider');
new WidePreview(mainContainer).bind();
new VideoPreview(mainContainer).bind();



