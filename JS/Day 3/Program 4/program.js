function unixTimeToUTCDateConverter(unixTimestamp){
  var day = new Date(unixTimestamp * 1000);
  var dayUTC = new Date(day.getUTCFullYear(), day.getUTCMonth(), day.getUTCDate(), 
                  day.getUTCHours(), day.getUTCMinutes(), day.getUTCSeconds()).getTime();
  return dayUTC;
}
console.log("Unix timestamp : 1444999527 converted to UTC timestamp : ",unixTimeToUTCDateConverter(1444999527));