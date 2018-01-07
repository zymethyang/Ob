import $ from 'jquery';
import Rx from 'rxjs/Rx';

console.log('RxJS Boiler Running...');

const btn = $('.btn');
const btnStream = Rx.Observable.fromEvent(btn,'click');
const output = $('#output');
const output_1 = $('#output_1');

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


const input = $('input');
const inputStream = Rx.Observable.fromEvent(input,'keyup');

inputStream.subscribe(
    value =>{
        console.log(value.currentTarget.value);
        output.append(value.currentTarget.value);
    },
    error=>{
        console.log(error);
    },
    ()=>{
        console.log('Completed');
    }
)

const mouseStream = Rx.Observable.fromEvent(document,'mousemove')

mouseStream.subscribe(
    value =>{
        output_1.html('<h1>X: '+ value.clientX + ' Y :'+value.clientY+'</h1>');
        console.log('X: '+ value.clientX + ' Y :'+value.clientY);
    },
    error=>{
        console.log(error);
    },
    ()=>{
        console.log('Completed');
    }
)