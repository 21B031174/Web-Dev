//1

//////1)
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }
//////2)
function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }

//answer: NO

//2
function checkAge(age) {
    return (age>18)?true:confirm('Did parents allow you?');
}
function checkAge(age) {
    return age>18 || confirm('Did parents allow you?');
}
//3
function min(a,b){
    return (a>b)?a:b;
}
//4
function pow(a,b){
    return a**b;
}
