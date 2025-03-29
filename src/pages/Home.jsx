import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { useState } from "react"
function Home(){
    const [searchQuery,setSearchQuery]= useState("");
    const movie=[
        { "id": 1, "title": "Pandiya the Panda", "release_date": "2025" },
        { "id": 2, "title": "Cyber Warriors", "release_date": "2024" },
        { "id": 3, "title": "Echoes of Tomorrow", "release_date": "2026" }
      ]
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(searchQuery)
        setSearchQuery("")
    }  

    return (
        <div className="home">

        <form onSubmit={handleSubmit}  className="search-form">
            <input 
            type="text" 
            className="search-input"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>


        <div className="movie-grid">
            {movie.map(item=>(
                item.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <MovieCard movie={item} key={item.id}/>
            ))}
        </div>
        </div>
        
    )
      
}
export default Home