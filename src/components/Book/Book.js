import './Book.css';

export const Book = ({ name, year, price, children }) => {
    const add = children
        ? (
            <div>
                <hr />
                <p className='Additional'>{children}</p>
            </div>
        )
        : null;

    return (
        <div className="Book">
            <h2>{name}</h2>
            <p>{year}</p>
            <p>{price}</p>
            {add}
        </div>
    )
}