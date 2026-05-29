interface ProductProps {
    name: string;
    price: number;
}

export const ProductCard = ({ name, price }: ProductProps) => {
    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
        </div>
    );
};