var function1 = function(arr){ // module.exports.function2 = function2;
    return ' there is an'+ arr.length +' elements in this array';

};
 var function2 = function(a, b){ // module.exports.function1 = function1;
     return 'addition os values is ---- '+ (a+b); 
 };
pi = 3.142; //module.exports.pi = pi;
//  module.exports.function1 = function1;
// module.exports.function2 = function2;
//  module.exports.pi = pi;

module.exports = {
    function1: function1,
    function2: function2,
    pi: pi
}


//there are three ways to module exports as above