// app/product/state/service.js

export const getProducts = () => {
    return fetch('http://api.nodesense.ai/api/products')
           .then (response => response.json())
}