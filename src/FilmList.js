import React from 'react';
import Film from './Film.js';

const FilmList = ({ movies, images }) => {
	return (
		<div className="Film-card-list">
			{
				movies.map((movie) => {
					return (
						<Film
						//from SWAPI - REST API
							key={movie[1].episode_id}
							id={movie[1].episode_id}
						    name={movie[1].title}
						    director={movie[1].director}
						    producer={movie[1].producer}
						    release={movie[1].release_date}
							desc={movie[1].opening_crawl}
							url={movie[1].url}
						//from images.js - local file
							img={images[movie[1].episode_id - 1].img_big}
							imgBig={images[movie[1].episode_id - 1].img_big}
							imdbRating={images[movie[1].episode_id - 1].imdb_rating}
							imdbLink={images[movie[1].episode_id - 1].imdb_link}
						/>
					);
				})
			}
		</div>
	);
}

export default FilmList;
