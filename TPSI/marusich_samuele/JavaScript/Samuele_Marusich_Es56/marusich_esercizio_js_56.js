const avg_age = (l) => {
    return l.reduce((acc, current) => acc = current.eta + acc, 0) / l.length
};