function StringLength(element) {

    let totalNumber = 0;

    for(var i in element) {

        if (element[i].length > 50) {
            totalNumber = totalNumber + 1;
        }
    }

    return totalNumber;
}

module.exports = StringLength;
