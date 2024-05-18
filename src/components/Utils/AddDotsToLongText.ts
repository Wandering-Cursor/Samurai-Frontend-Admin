export function cropText(text: string, length: number) {
    let result = text.slice(0, length);
    if (text.length > length) {
        result += "...";
    }
    return result;
}