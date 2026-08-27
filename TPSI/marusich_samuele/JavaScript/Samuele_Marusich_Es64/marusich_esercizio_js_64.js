// Funzione per il conteggio delle vocali
const count_vocals = (str) => {
    // Espressione regolare per trovare tutte le vocali (case-insensitive)
    const match = str.match(/[aeiou]/gi);
    return match ? match.length : 0;
};