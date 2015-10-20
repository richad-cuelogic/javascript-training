function unixTimeToUTCDateConverter(unixTimestamp){
  var day = new Date(unixTimestamp * 1000);
  var getOffset = day.getTimezoneOffset();
  console.log("get offset",getOffset);
  var utcDate= new Date().getTime() + getOffset;
  console.log("utcDate",utcDate);
}

console.log(unixTimeToUTCDateConverter(1444999527));