export function tagsCreator(text: string | undefined) {
    return text && text.split(' ').filter((el: string) => el[0] === '#' && el.length > 1);
}