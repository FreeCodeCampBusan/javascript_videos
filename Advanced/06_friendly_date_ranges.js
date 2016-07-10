// YouTube: https://youtu.be/Q1qlJkPb9Nk

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function makeOrdinals(num) {
  switch (num) {
    case 1:
    case 21:
    case 31:
      return num.toString() + 'st';
    case 2:
    case 22:
      return num.toString() + 'nd';
    case 3:
    case 23:
      return num.toString() + 'rd';
    default:
      return num.toString() + 'th';
  }
}

function monthAndDay(d) {
  return months[d.getMonth()] + ' ' + makeOrdinals(d.getDate());
}

function fullDate(d) {
  return monthAndDay(d) + ', ' + d.getFullYear();
}

function makeFriendlyDates(arr) {

  var currentYear = new Date().getFullYear();
  var start = new Date(Date.parse(arr[0]));
  var end = new Date(Date.parse(arr[1]));
  var yearInMS = 31536000000;

  // if start and end are the same date
  if (end - start === 0) {
    return [fullDate(start)];
  }

  // current year and same month
  if (start.getFullYear() === currentYear && start.getMonth() === end.getMonth()) {
    return [monthAndDay(start), makeOrdinals(end.getDate())];
  }

  // current year and less than one year apart
  if (start.getFullYear() === currentYear && end - start < yearInMS) {
    return [monthAndDay(start), monthAndDay(end)];
  }

  // not current year, but less than a year apart
  if (end - start < yearInMS) {
    return [fullDate(start), monthAndDay(end)];
  }

  // dates are a year or more apart
  if (end - start >= yearInMS) {
    return [fullDate(start), fullDate(end)];
  }
}

makeFriendlyDates(["2016-07-01", "2016-07-04"]);
