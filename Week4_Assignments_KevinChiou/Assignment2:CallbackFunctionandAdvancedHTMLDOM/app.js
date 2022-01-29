let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = () => {
//     if(xhr.readyState === 4){
//         console.log(xhr.responseText);
//         console.log(xhr.onreadystatechange);
//     }
// }
// xhr.open('GET', 'https://appworks-school.github.io/Remote-Aassigiment-Data/products');
// xhr.send();


const ajax = (src, callback) => {
    callback(src);
}

const render = (data) => {
    const body = document.getElementById('root');
    let div = document.createElement('div');
    let productData = document.createTextNode(data);
    const productDiv = div.appendChild(productData);
    body.appendChild(productDiv);
}

ajax('https://appworks-school.github.io/Remote-Aassigiment-Data/products', () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        //this is where the render function goes (?)
        if(xhr.readyState === 4){
            const products = JSON.parse(xhr.responseText);
            const productData = products.map(product => console.log(`Product : ${product.name}/ Price : $${product.price}/ Description : ${product.description}`));
        }
    }
    xhr.open('GET', 'https://appworks-school.github.io/Remote-Aassigiment-Data/products');
    xhr.send()
    }
);

// document. is not working, needs to be fixed
// render('this is a div');

