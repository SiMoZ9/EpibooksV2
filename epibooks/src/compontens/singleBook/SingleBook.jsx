import BookCard from "../card/BookCard";
import {useState} from "react";

const SingleBook = ({book}) => {

    const [selected, setIsSelected] = useState(false)

    const handleClick = () => {
        setIsSelected(!selected)
        console.log(book.asin)
    };

    const style = {
        width: '18rem',
        border: selected ? '10px solid red' : ''
    }


    return (
        <>
            <BookCard
                title={book.title}
                category={book.description}
                btn="Vai al prodotto"
                img={book.img}
                asin={book.asin}
                style={style}
                clickFunc={handleClick}
            />
        </>
    );
}

export default SingleBook