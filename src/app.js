import $ from 'jquery';
import Rx from 'rxjs/Rx';
import data from './data';
/*

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
    },
    error=>{
        console.log(error);
    },
    ()=>{
        console.log('Completed');
    }
);


const numbers = [1,2,3,4,5,6,7,8,9,10];

const numberStream = Rx.Observable.from(numbers);

numberStream.subscribe(
    value=>{
        console.log(value);
    },
    error=>{
        console.log(error);
    },
    ()=>{
        console.log('Completed');
    }
)

console.log(data);

const source = new Rx.Observable(ob=>{
    console.log('Creating Observable');
    ob.next('Hello World');
    ob.next('Another Value');
    ob.error(new Error('Something wrong'));
    setTimeout(()=>{
        ob.next('Yet, another value');
        ob.complete();
    },3000);
});

source
.catch(err => Rx.Observable.of(err))
.subscribe(
    x=>{
        console.log(x);
    },
    err=>{
        console.log(err);
    },
    complete=>{
        console.log('Completed');
    }
)

const myPromise = new Promise((resolve,reject)=>{
    console.log('Creating Promise');
    setTimeout(()=>{
        resolve('Hello from promise');
    },3000);
})

myPromise.then(x=>{
    console.log(x);
})


const source = Rx.Observable.fromPromise(myPromise);

source.subscribe(x=>console.log(x));


function getUser(username){
    return $.ajax({
        url:'https://api.github.com/users/'+username,
        dataType:'jsonp'
    }).promise();
}

Rx.Observable.fromPromise(getUser('zymethyang'))
.subscribe(x=>console.log(x));

const source = Rx.Observable.interval(1000);
source.subscribe(x=>console.log(x));


const source = Rx.Observable.timer(5000,2000).take(5);

source.subscribe(
    x=>console.log(x),
    error => console.log(error),
    ()=>console.log('Completed')
)


const source = Rx.Observable.range(25,100);
source.subscribe(
    x=>console.log(x),
    err=>console.log(err),
    ()=>console.log('Completed')
)




//Get value, apply function after that return to array.
const source = Rx.Observable.interval(1000)
.take(10)
.map(val=> val*val );

source.subscribe(
    x=>console.log(x),
    error => console.log(error),
    ()=>console.log('Completed')
)



//Get one property you want
const users = [
    {name:'Will',age:34},
    {name:'Mike',age:33},
    {name:'Paul',age:35}
]

const usersStream = Rx.Observable.from(users)
    .pluck('name');
usersStream.subscribe(x=>console.log(x));


//Merge two Observable when it run
Rx.Observable.of('Hello')
.merge(Rx.Observable.of('Everyone'))
.subscribe(x=>console.log(x));



const source_1 = Rx.Observable.interval(2000).map(v=>'Merge 1 '+v);
const source_2 = Rx.Observable.interval(1000).map(v=>'Merge 2 '+v);
Rx.Observable.merge(source_1,source_2)
.take(25)
.subscribe(x=> console.log(x));
*/
//concat like merge but it run after source_1 finished

const source_1 = Rx.Observable.range(0,5).map(v=>'Merge 1 '+v);
const source_2 = Rx.Observable.range(6,5).map(v=>'Merge 2 '+v);
Rx.Observable.concat(source_1,source_2)
.take(25)
.subscribe(x=> console.log(x));