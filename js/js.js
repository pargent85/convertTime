var hoursArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
var minutesArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine'];

function buttonClick() {
    var hours = parseInt(document.getElementById('hourInput').value);
    var minutes = parseInt(document.getElementById('minuteInput').value);
    var error = '';
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('convertText').style.display = 'none';
    if (isNaN(hours) || hours > 12 || hours < 1) {
        error = 'Invalid hour. Please enter a value between 1-12.';
    }
    if (isNaN(minutes) || minutes > 59 || minutes < 0) {
        if (error !== '') {
            error += '<br/>';
        }
        error += 'Invalid minute. Please enter a value between 0-59.';
    }
    if (error !== '') {
        document.getElementById('errorMessage').innerHTML = error;
        document.getElementById('errorMessage').style.display = 'block';
    } else {
        convertTimeToWords(hours, minutes);
    }
}

function convertTimeToWords(hours, minutes) {
    var text = '';
    var minuteText;
    if (minutes === 0) {
        text = `${hoursArray[hours]} o' clock`;
    } else if (minutes === 15) {
        text = `quarter past ${hoursArray[hours]}`;
    } else if (minutes === 30) {
        text = `half past ${hoursArray[hours]}`;
    } else if (minutes === 45) {
        hours = addHour(hours);
        text = `quarter to ${hoursArray[hours]}`;
    } else if (minutes < 30) {
        if (minutes === 1) {
            minuteText = 'minute';
        } else {
            minuteText = 'minutes';
        }
        text = `${minutesArray[minutes]} ${minuteText} past ${hoursArray[hours]}`;
    } else if (minutes > 30) {
        hours = addHour(hours);
        minutes = subtractMinute(minutes);
        if (minutes === 1) {
            minuteText = 'minute';
        } else {
            minuteText = 'minutes';
        }
        text = `${minutesArray[minutes]} ${minuteText} to ${hoursArray[hours]}`;
    }
    document.getElementById('convertText').innerHTML = text;
    document.getElementById('convertText').style.display = 'block';
}

function addHour(hours) {
    if (hours === 12) {
        hours = 1
    } else {
        hours += 1;
    }
    return hours;
}

function subtractMinute(minutes) {
    return 60 - minutes;
}