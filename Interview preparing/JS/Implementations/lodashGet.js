function lodashGet(object, keys, defaultValue) {
    keys = Array.isArray(keys) ? keys : keys.replace(/(\[(\d)*])/g, ".$2").split('.');
    if (object[keys[0]] && keys.length > 1) {
        return lodashGet(object[keys[0]], keys.slice(1), defaultValue);
    } else {
        return object[keys[0]] === undefined ? defaultValue : object[keys[0]];
    }
}
