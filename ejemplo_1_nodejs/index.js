console.log('Loading Information');

exports.handler = async (event) => {
    let min = event.min;
    let max = event.max;
    let generatedNumber = Math.floor(Math.random() * max) + min;
    return generatedNumber;
};
