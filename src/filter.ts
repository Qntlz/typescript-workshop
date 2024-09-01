// Filter words more than 5 letters
export const filterWords = (words: string[]): string[] => {
    const filWords = words.filter(word => word.length > 5);
    return filWords;
}
