function isDefined(check) {
    if (check === undefined) {
        return "undefined"
    }else{
        return "not undefined"
    }
}

var tesVar;
console.log(isDefined());