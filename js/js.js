const errorMessage = document.getElementById('errorMessage');
const convertText = document.getElementById('convertText');
const hourInput = document.getElementById('hourInput');
const minuteInput = document.getElementById('minuteInput');

var hoursArray = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve'
};
var minutesArray = {
    0: "o' clock",
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
    30: 'thirty',
    31: 'twenty nine',
    33: 'twenty eight',
    33: 'twenty seven',
    34: 'twenty six',
    35: 'twenty five',
    36: 'twenty four',
    37: 'twenty three',
    38: 'twenty two',
    39: 'twenty one',
    40: 'twenty',
    41: 'nineteen',
    42: 'eighteen',
    43: 'seventeen',
    44: 'sixteen',
    45: 'fifteen',
    46: 'fourteen',
    47: 'thirteen',
    48: 'twelve',
    49: 'eleven',
    50: 'ten',
    51: 'nine',
    52: 'eight',
    53: 'seven',
    54: 'six',
    55: 'five',
    56: 'four',
    57: 'three',
    58: 'two',
    59: 'one'
};

function buttonClick() {
    const hours = parseInt(hourInput.value);
    const minutes = parseInt(minuteInput.value);
    errorMessage.style.display = 'none';
    convertText.style.display = 'none';
    const error = errorText(hours, minutes);
    if (error == '') {
        convertText.innerHTML = convertTimeToWords(hours, minutes);
        convertText.style.display = 'block';
    } else {
        errorMessage.innerHTML = error;
        errorMessage.style.display = 'block';
    }
}

function convertTimeToWords(hours, minutes) {
    if (minutes === 0) {
        return `${hoursArray[hours]} ${minutesArray[minutes]}`;
    } else if (minutes === 15) {
        return `quarter past ${hoursArray[hours]}`;
    } else if (minutes === 30) {
        return `half past ${hoursArray[hours]}`;
    } else if (minutes === 45) {
        return `quarter to ${hoursArray[addHour(hours)]}`;
    } else if (minutes < 30) {
        return `${minutesArray[minutes]} ${pluralMinutes(minutes)} past ${hoursArray[hours]}`;
    } else if (minutes > 30) {
        return `${minutesArray[subtractMinute(minutes)]} ${pluralMinutes(subtractMinute(minutes))} to ${hoursArray[addHour(hours)]}`;
    }
}

function addHour(hours) {
    return (hours == 12) ? 1 : hours + 1;
}

function pluralMinutes(minutes) {
    return (minutes == 1) ? 'minute' : 'minutes';
}
function subtractMinute(minutes) {
    return 60 - minutes;
}

function errorText(hours, minutes) {
    let errorText;
    if (hoursArray.hasOwnProperty(hours) && minutesArray.hasOwnProperty(minutes)) {
        return '';
    } else if (!hoursArray.hasOwnProperty(hours) && !minutesArray.hasOwnProperty(minutes)) {
        return 'Invalid hour. Please enter a value between 1-12.<br/>Invalid minute. Please enter a value between 0-59.';;
    } else if (!hoursArray.hasOwnProperty(hours)) {
        return 'Invalid hour. Please enter a value between 1-12.';
    } else if (!minutesArray.hasOwnProperty(minutes)) {
        return 'Invalid minute. Please enter a value between 0-59.';
    }
}