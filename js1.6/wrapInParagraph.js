function wrapInParagraph(text) {
    const lines = text.split('\n');
    return lines.map(line => `<p>${ line }</p>`).join('\n');
}

const text1 = `Some
simple multiline
text`;

console.log(wrapInParagraph(text1));

const text2 = 'some\ntext';

console.log(wrapInParagraph(text2));

