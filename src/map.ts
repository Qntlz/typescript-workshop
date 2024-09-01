export const mapNum = (numbers: number[]): number[] => {
    const sqrArr = numbers.map(num => num * num);
    return sqrArr;
}