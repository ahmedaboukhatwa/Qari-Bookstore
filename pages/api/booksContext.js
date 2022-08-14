import React,{useState,useEffect,createContext, Fragment} from 'react';
import MyApp from '../_app';
import Categories from '../categories/index';
import Home from '../index';
const booksApi = [
    {
        name: "Rich Dad Poor Dad",
        img: "/images/books/rich dad.png",
        author:"Robert t Kiyosaki",
        category: "Financial",
        price:50,
        isFavorited:false,
        inCart:false
    },
    {
        name: "48 Laws Of Power",
        img: "/images/books/48 laws of power.png",
        author:"Robert Greene",
        category: "Political",
        price:100,
        isFavorited:false,
        inCart:false
    },
    {
        name: "Atomic Habits",
        img: "/images/books/atomic habits.jpg",
        author:"James Clear",
        category: "Self Improvment",
        price:250,
        isFavorited:false,
        inCart:false
    },
    {
        name: "Animal Farm",
        img: "/images/books/animal farm.jpg",
        author:"George Orwell",
        category: "Novel",
        price:125,
        isFavorited:false,
        inCart:false
    },
    {
        name: "1984",
        img: "/images/books/1984.jpg",
        author:"George Orwell",
        category: "Novel",
        price:150,
        isFavorited:false,
        inCart:false
    },
    {
        name: "Tools of Titans",
        img: "/images/books/tools of titans.jpg",
        author:"Tim Ferriss",
        category: "Self Improvment",
        price:70,
        isFavorited:false,
        inCart:false
    },
    {
        name: "33 strategies of war",
        img: "/images/books/33 strategies of war.webp",
        author:"Robert Greene",
        category: "Political",
        price:100,
        isFavorited:false,
        inCart:false
    },
    
];
export const BooksContext = createContext();

export default function BooksProvider({children}) {
    const [books,setBooks] = useState(booksApi);
    const [favoritedBooks ,setFavoritedBooks] = useState(books.filter(book =>{
        return book.isFavorited == true;
    }));
    const [category,setCategory]=useState("All");
    const [filterdBooks,setFilterdBooks] = useState(books.filter(book=> 
        { 

            return(book.category == category)
        
        }));
    const [inCartBooks ,setInCartBooks] = useState(books.filter(book =>{
        return(book.inCart == true)
    }
        ));
    const [favoritedCount,setFavoritedCount] = useState(favoritedBooks.length);
    const [inCartCount,setInCartCount] = useState(inCartBooks.length);

    const clickFavorite = (book) => {
        book.isFavorited = !book.isFavorited;  
        setBooks(books.map(book=>book));
        setFavoritedBooks(books.filter(book =>{
            return book.isFavorited == true;
        }));
    };
    const addToCart = (book) => {
        book.inCart = !book.inCart;  
        setBooks(books.map(book=>book));
        setInCartBooks(books.filter(book =>{
            return book.inCart == true;
        }));
    };
    const selectCategory = (e)=>{
        setCategory(e.target.value);
        setBooks(books.map(book=>book));
        setFilterdBooks(books.filter(book=> 
            { 

                return(book.category == category)
            
            }))
        console.log(filterdBooks);
    }
    useEffect(()=>{
        setFavoritedCount(favoritedBooks.length);
        setInCartCount(inCartBooks.length);

    },[books])
    
    return (
        <BooksContext.Provider value={{
            books,
            favoritedBooks,favoritedCount,clickFavorite,
            inCartCount,addToCart,
            filterdBooks,category,selectCategory,
            }}>
            {children}
        </BooksContext.Provider >
    )
}

