function lodashSet(object, path, value) {
    path = Array.isArray(path) ? path : path.replace(/(\[(\d)*])/g, ".$2").split('.');
    if (path.length > 1) {
        object[path[0]] = object[path[0]] || {};
        object = object[path[0]];
        lodashSet(object, path.slice(1), value)
    } else {
        object[path[0]] = value
    }
}
