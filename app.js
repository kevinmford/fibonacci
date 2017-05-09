"use strict"

$(document).ready(function() {
  function Fibonacci() {
    this.fib = function(n){
      if(n <= 2) {
        return 1;
      } 
      else {
        return this.fib(n - 1) + this.fib(n - 2);
      }
    }
  }
});