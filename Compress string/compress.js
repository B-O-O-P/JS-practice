function compress(str) {
    const result = [];
    let previousLetter = '';
    let counter = 0;

    str.split('').forEach(letter => {
        if (previousLetter === letter) {
            counter++;
        } else {
            result.push(previousLetter);

            if (counter) {
                result.push(counter)
            }

            counter = 1;
        }
        if (result.length > str.length) {
            return str;
        }
        previousLetter = letter;
    });

    return result.concat([previousLetter, counter]).join('');
}
