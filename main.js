// const friends = ['Mango','Poly', 'Kiwi', 'Ajax'];
// let string = '';
// for (let i = 0; i < friends.length; i++) {
//     string += friends[i];
//     if (i < friends.length - 1) {
//         string += ', ';
//     }    
// }
// let string = friends.join(', ');
// console.log(string);


//==================================================

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];
const cardToRemove = 'Карточка-3';
cards.splice(cards.indexOf(cardToRemove), 1);
console.log(cards);

const cardToInsert = 'Карточка-6';
cards.push('Карточка-6');
console.log(cards);

const cardToUpdate = 'Карточка-4';
cards.splice(cards.indexOf(cardToUpdate), 1, 'Новая карточка-4');
console.log(cards);
