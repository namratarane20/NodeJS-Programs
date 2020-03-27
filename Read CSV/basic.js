// setTimeout(function(){
//     console.log('time after 5 second');
// },5000)
var time =0;
// setInterval(() => {
//     time+=2;
//     console.log('I am printing after every 2 seconds')
// }, 2000);

var timer =setInterval(() => {
    time+=2;
    console.log('I am printing after every 2 seconds'+ " "+time)
    if(time >10){
        clearInterval(timer);
    }
}, 2000);