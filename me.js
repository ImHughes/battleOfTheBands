let bandNumber = 0

const takeNumber = function (bandNames) {
    bandNumber++
    return bandNumber + bandNames

}

const butt = takeNumber("Butthole Serfers")
console.log(butt)

const scum = takeNumber("Galactic Scum")
console.log(scum)  

const under = takeNumber("Underdogs")
console.log(under)