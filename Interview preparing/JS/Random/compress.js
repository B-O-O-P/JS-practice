function compress(str) {
    if (!str.length) {
        return str;
    }

    let result = '';
    let previousLetter = str[0];
    let counter = 1;

    for (let i = 1; i < str.length - 1; ++i) {
        if (str[i] === previousLetter) {
            counter++;
        } else {
            result = `${result}${previousLetter}${counter}`;
            previousLetter = str[i];
            counter = 1;
        }
    }

    return `${result}${previousLetter}${counter}`;
}
