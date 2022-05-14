const removeSNames = (names) => {
    return names.filter(element => element.toLowerCase().charAt(0) !== 's');
    //let expectedOutput = names;
    //names.forEach(element => {
    //    if(element.toLowerCase().charAt(0) === 's') {
    //        const index = expectedOutput.indexOf(element);
    //        expectedOutput.splice(index,1);
    //    }
    //});
    //return expectedOutput;
}

module.exports = removeSNames;