export function readTime(post) {
    let wordCount = post.split(" ").length;
    let timeToRead = wordCount / 100 * 0.3;
    return Math.round(timeToRead) + " minuten";
}