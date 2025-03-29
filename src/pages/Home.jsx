import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { useState ,useEffect} from "react"
import {getPopularMovies,searchMovies} from "../services/api"
function Home(){
    const [searchQuery,setSearchQuery]= useState("");
    const [movies,setMovies]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const loadPopularMovies=async ()=>{
            try{
                const popularMovies=await getPopularMovies();
                setMovies(popularMovies);

            }catch(err){
                console.log(err);
                setError("Failed to load movies...")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies()
    },[])


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


        <div className="movies-grid">
            {movies.map(item=>(
                item.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <MovieCard movie={item} key={item.id}/>
            ))}
        </div>
        </div>
        
    )
      
}
export default Home