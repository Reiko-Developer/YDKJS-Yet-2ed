//pick a day in and day out in a 24 hours day 'hh:mm'
//for starting the work and end
// and meeting duration.
const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(hour, duration) {
    hour = stringToHoraMin(hour);

    if (validTime(hour) && validTime(somaMinutosAHora(hour, duration))){
        console.log(true);
        
        return true;
    }

    console.log(false);
    return false;
}

function validTime(meeting) {
    let start = stringToHoraMin(dayStart);
    let end = stringToHoraMin(dayEnd);

    if (meeting.hour < start.hour || meeting.hour > end.hour)
        return false;
    else
        if (meeting.hour == end.hour && meeting.min > end.min)
            return false;
        else
            if (meeting.hour == start.hour && meeting.min < start.min)
                return false;

    return true;
}

//                        07:30, 30
function somaMinutosAHora(time, minutosEncontro) {
    time.min += minutosEncontro;
    const aux = parseInt(time.min / 60);
    time.hour += aux;
    time.min %= 60;

    return time;
}

//modelos: h:m, hh:m, h:mm, hh:mm
function stringToHoraMin(horaString) {
    let passouDoMeio = false;
    let horaTmp = '';
    let minTmp = '';
    for (let i = 0; i < horaString.length; i++) {
        if (horaString[i] == ':') {
            passouDoMeio = true;
            continue;
        }

        if (passouDoMeio)
            minTmp += horaString[i];
        else
            horaTmp += horaString[i];
    }
    let time = { hour: parseInt(horaTmp), min: parseInt(minTmp) }
    return time;
}

//07:30 17:45
scheduleMeeting("7:00",15);     // false
scheduleMeeting("07:15",30);    // false
scheduleMeeting("7:30",30);     // true
scheduleMeeting("11:30",60);    // true
scheduleMeeting("17:00",45);    // true
scheduleMeeting("17:30",30);    // false
scheduleMeeting("18:00",15);    // false