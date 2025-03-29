export function MovieCard({movie}){
    function handleLikes(){


    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
            </div>
            <button className="like-btn" onClick={handleLikes}>
                ♥
            </button>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>

    )   


}
export default MovieCard




