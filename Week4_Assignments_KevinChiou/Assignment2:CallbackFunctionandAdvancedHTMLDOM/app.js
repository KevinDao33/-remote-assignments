let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const ajax = (src, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', src);
    xhr.send();
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === 4){
            callback(xhr.responseText);
        }
    }
}

const render = (finalData) => {
    const body = document.getElementById('root');
    let div = document.createElement('div');
    let createText = document.createTextNode(finalData);
    const productDiv = div.appendChild(createText);
    body.appendChild(productDiv);
}

ajax('https://appworks-school.github.io/Remote-Aassigiment-Data/products', (rawData) => {
            const products = JSON.parse(rawData);
            const productData = products.map(product => `Product : ${product.name}/ Price : $${product.price}/ Description : ${product.description}`);
            const stringData = productData.toString();

            render(stringData);
    }
);