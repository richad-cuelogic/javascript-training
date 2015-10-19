function unixTimeToUTCDateConverter(unixTimestamp){
  var milliseconds = new Date(unixTimestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var utcTime = milliseconds.getDate() + '-' + months[milliseconds.getMonth()] + '-' + milliseconds.getFullYear() + ' ' + milliseconds.getHours() + ':' + milliseconds.getMinutes() + ':' + milliseconds.getSeconds() ;
  return utcTime;
}

console.log(unixTimeToUTCDateConverter(1444999527));