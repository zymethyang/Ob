import $ from 'jquery';
import Rx from 'rxjs/Rx';

console.log('RxJS Boiler Running...');

const btn = $('.btn');
const btnStream = Rx.Observable.fromEvent(btn,'click');

btnStream.subscribe(
    e =>{
        console.log('Clicked');
    },
    err =>{
        console.log(err);
    },
    ()=>{
        console.log('Completed');
    }
);
