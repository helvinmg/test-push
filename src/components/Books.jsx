import {useState,useEffect} from 'react'
let Books=()=>
{
    const [books,setBooks]=useState([])
    const [refreshcount,setRefresh]=useState(0)
    const [load,setLoad]=useState(0)
    useEffect(()=>{
        fetch("https://potterapi-fedeperin.vercel.app/en/books").then
        (res=>res.json()).then
        (data=>setBooks(data))
        console.log("refreshed");
        setLoad(1)
    },[refreshcount])
    return(
        <>
        {load?(<h1>Harry Porter Books</h1>
        <table border='1'>
        <thead>
        <tr><th>Book Title</th><th>Book Description</th><th>Book Pages</th></tr>
        </thead>
        <tbody>
        {books.map(book=>
        (<tr key={book.number}><td>{book.title}</td><td>{book.description}</td><td>{book.pages}</td></tr>))}
        </tbody>
        </table>
        <button onClick={()=>setRefresh(refreshcount+1)}>Refresh</button>):
        (<h1>Loading....</h1>)}
        </>
    )


}
export default Books;