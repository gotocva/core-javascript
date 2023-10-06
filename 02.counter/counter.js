




// Using sub functions

/** 
* @param {number} n
* @return {Function} counter
*/
const Counter = function(n) {
   return function() {
       return n++;
   };
};


/** 
* const counter = Counter(25)
* counter() // 25
* counter() // 26
* counter() // 27
*/