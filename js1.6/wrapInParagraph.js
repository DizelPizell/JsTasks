function wrapInParagraph(text){
    const lines = text.split('\n');
    return lines.map(line => '<p>${ line }</p>').join('');
}

const text1 = 'Some\nsimple multiline\ntext';

const text2 = 'some\ntext';

console.log(wrapInParagraph(text1));
console.log(wrapInParagraph(text2));

