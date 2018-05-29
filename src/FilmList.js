import React from 'react';
import Film from './Film.js';

const FilmList = ({ movies, images }) => {
	return (
		<div>
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
						//from images.js - local file
							img={images[movie[1].episode_id - 1].img_link}
							imgBig={images[movie[1].episode_id - 1].img_big}
						/>
					);
				})
			}
		</div>
	);
}

export default FilmList;
