// Rendering List
export const ProductList = () => {
    const products = [
        {id: 1, name: "Laptop", price : 999},
        {id: 2, name: "Smartphone", price : 499},
        {id: 3, name: "Headphones", price : 199},
        {id: 4, name: "Smartwatch", price : 299},
        {id: 5, name: "Tablet", price : 399} 
    ]
    const productElements = products.filter((product) => {
        return product.price > 300;
    }).map(product => (
        <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
        </div>
    ));
    return (
        <div>
            <div>
                Our Products
            </div>
           {productElements}
        </div>
    );
};
