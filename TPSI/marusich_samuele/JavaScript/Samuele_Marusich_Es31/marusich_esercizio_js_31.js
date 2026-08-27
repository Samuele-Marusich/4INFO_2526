const search_words = (ph) => {
    if (ph.includes("coding") == true || ph.includes("creativo") == true) {
        return ph
    }
    else {
        return "parole non trovate"
    }
};