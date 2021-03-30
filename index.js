/* 4) Define a function with one parameter, which will be a string. The function must do the following:
a) Have a clear, descriptive name.
b) Retrieve only the last character from strings with lengths of 3 or less.
c) Retrieve only the first 3 characters from strings with lengths larger than 3. 
d) Use a template literal to return the phrase, "We put the '___' in '___'." Fill the first blank with the modified string, and fill the second blank
with the original string.
*/



/* Now test your function:
e) Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
*/
function funPhrae(str){
  let str1='';
  let ind=str.length
  console.log("ind",ind)
  if(ind<=3)
  {
 //   console.log("inside if")
  str1=str.slice((ind-1))
  }else{
    str1=str.slice(0,3)
  } 
  console.log(` We put the ${str1} in ${str}.`)
 // console.log(str1)
}
let test='Functions rock!'
funPhrae(test)