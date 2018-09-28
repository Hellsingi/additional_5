module.exports = function check(str, bracketsConfig) {
  // your solution
  let stackArray=[];
  //let repeatArray=[];
  if (str.length % 2)   return false;
  for(let i=0;i<str.length;i++)
  {
    if(str[0]===")"||str[0]==="}"||str[0]==="]"||str[0]==="2"||str[0]==="4"||str[0]==="6")
        return false;
    if(str[i]==="("||str[i]==="["||str[i]==="{"||str[0]==="1"||str[0]==="3"||str[0]==="5")
         stackArray.push(str[i]);
    if(   (str[i]===")"&&stackArray[stackArray.length - 1] === "(")
        ||(str[i]==="]"&&stackArray[stackArray.length - 1] === "[") 
        ||(str[i]==="}"&&stackArray[stackArray.length - 1] === "{")
        ||(str[i]==="2"&&stackArray[stackArray.length - 1] === "1")
        ||(str[i]==="4"&&stackArray[stackArray.length - 1] === "3")
        ||(str[i]==="6"&&stackArray[stackArray.length - 1] === "5")
      )  
      stackArray.pop();
   
      /*  For same brackets does not work
    if(str[i]==="|"||str[i]==="7"||str[i]==="8")
          repeatArray.push(str[i]);
    if(   (str[i]==="|"&&repeatArray[repeatArray.length-1] === "|")
        ||(str[i]==="7"&&repeatArray[repeatArray.length-1] === "7")
        ||(str[i]==="8"&&repeatArray[repeatArray.length-1] === "8")
      )
        {
         // repeatArray.remove(-2);
         // repeatArray.slice(-2);
          delete repeatArray[repeatArray.length];
          repeatArray.pop();
         // repeatArray.pop();
          //repeatArray.remove(-2,-1);
           }
        */                     
  }
    if (stackArray.length === 0)  return true;
  else 
    return false;
   /* if (repeatArray.length === 0)  return true;
  else 
    return true;
    */
    
}
