function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
}

async function loadJsonAsync(url) {
    let response = await fetch(url);

    if (response.status === 200) {
        return await response.json();
    } else {
        throw new Error(response.status);
    }
}
