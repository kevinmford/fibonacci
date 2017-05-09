function fibonacci(n) {
  if(n < 1){
    return false;
  }
  let a = 0;
  let b = 1;
  console.log(a,b)
  while(b < n){
    if((a + b) < n){
      console.log(a+b);
    }
    b = a + b;
    a = b;
  }
}