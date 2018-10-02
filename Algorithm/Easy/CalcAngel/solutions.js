var calcAngel = function(hour, minute) {
  if (hour === 12) {
    hour = 0;
  }
  if (minute === 60) {
    minute = 0;
  }
  
  var minuteAngel = minute * 6;
  var hourAngel = 1 / 2 * (hour * 60 + minute);
  var angel = Math.abs(minuteAngel - hourAngel);

  return Math.min(360 - angel, angel);
} 