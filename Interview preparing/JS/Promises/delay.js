function delay(ms) {
    return new Promise((func) => setTimeout(func, ms));
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));
