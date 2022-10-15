// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// const items = document.querySelectorAll('.item');
// console.log('');
// console.log(`Number of categories: ${items.length}`);
// console.log('');
// items.forEach((item)=>{
//     const group = [...item.children];

//     group.forEach(element => {
//     if (element.tagName === 'H2') {
//         console.log(`Elements: ${element.textContent}`);
//     }
// });
// group.forEach(element => {
//     if (element.tagName === 'UL') {
//         console.log(`Elements: ${element.children.length}`);
//     }
// });
// console.log(' ');
// });


const list = document.querySelector('#categories');
const items = list.querySelectorAll('.item');
console.log(`В списке ${items.length} категории:`);
items.forEach(node => {
const h2 = node.querySelector('h2');
const nodeItems = node.querySelectorAll('li');
console.log(` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`);
});