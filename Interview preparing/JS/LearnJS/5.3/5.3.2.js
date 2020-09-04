'use strict';

function checkSpam(str) {
    const spam = ['viagra', 'XXX'];

    for (let spamWord of spam) {
        if (str.toLowerCase().includes(spamWord.toLowerCase())) {
            return true
        }
    }

    return false;
}

