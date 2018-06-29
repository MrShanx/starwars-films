import React from 'react';
import ReactModal from 'react-modal';
import './Film.css';
//for modal placement, which div
ReactModal.setAppElement('#root');

// const customStyles = {
//   overlay : {
//     position          : 'fixed',
//     top               : 0,
//     left              : 0,
//     right             : 0,
//     bottom            : 0,
//     backgroundColor   : 'rgba(0, 0, 0, .8)'
//   },
//   content : {
//     position                   : 'absolute',
//     top                        : '40px',
//     left                       : '100px',
//     right                      : '100px',
//     bottom                     : 'auto',
//     background                 : '#fff',
//     overflow                   : 'auto',
//     WebkitOverflowScrolling    : 'touch',
//     borderRadius               : '0px',
//     outline                    : 'none',
//   }
// };

const customStyles = {
  overlay : {
    position		 : 'fixed', /* Stay in place */
    zIndex			 : 1, /* Sit on top */
    paddingTop		 : '50px', /* Location of the box */
    left 			 : 0,
    top 			 : 0,
    width 			 : '100%', /* Full width */
    height 			 : '100%', /* Full height */
    overflow   		 : 'auto', /* Enable scroll if needed */
    backgroundColor  : 'rgba(255,255,255,0.4)', 
	},
  content : {
  	position		 : 'relative',
    backgroundColor  : 'black',
    margin			 : 'auto',
    padding          : 0,
    marginBottom     : '50px',
    border           : '1px solid #888',
    width            : '80%',
    boxShadow        : '0 4px 8px 0 rgba(0,0,0,0.1),0 6px 20px 0 rgba(0,0,0,0.19)',
  	animation        : 'animatetop 0.4s'
  }
};

class Film extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		}
	}

	openModal = () => {
		this.setState({showModal: true})
	}

	closeModal = () => {
		this.setState({showModal: false})
	}

	render() {
		const { showModal } = this.state;
		const { id, img } = this.props;

		return (
			<div 
				className="
					Film-card
					br3
					tc
					dib
					ma2
					grow
					bw2"
				>
				<button 
				className="
					Film-button"
					value={id} 
					onClick={this.openModal}
				>
					<img alt='movie poster' src={`${img}`} />
					{/*<h3>{name}</h3>
					 <p className="Film-episode">Episode {id}</p>*/}
				</button>

				<Modal 
					showModal={showModal} 
					closeModal={this.closeModal} 
					movie={this.props} 
				/> 
			</div>
		);
	}
}

const Modal = ({ showModal, closeModal, movie }) => (
	<ReactModal
	    className="modal"
	    isOpen={showModal}
	    onRequestClose={closeModal}
	    shouldCloseOnOverlayClick={true}
	    style={customStyles}
    	>
		<p onClick={closeModal} className="close-modal">X</p>
		<img src={movie.imgBig} alt={movie.name} />
			<div className="modal-content">
				<div className="modal-movie-title">
					<h1>{movie.name}</h1>
					<div className="modal-genre">
						<p className="genre">{`Episode ${movie.id}`}</p>
						<p className="rating-desc">{`IMDB: `} <span className="rating">{`${movie.imdbRating}`}</span></p>
					</div>
					<div className="movie-numbers">
						<div className="modal-rating">
							<div>
								<h4>{movie.director}</h4>
							</div>
							<p>Director</p>
						</div>
						<div className="score">
							<div>
								 <h4>{movie.producer}</h4> 
							</div>
							<p>Producer(s)</p>
						</div>
						<div className="awards">
							<div>
								<h4>{movie.release}</h4>
							</div>
							<p>Release date</p>
						</div>
					</div>
				</div>
				<div className="movie-description-container">
					<p className="movie-description appear">
						{movie.desc}
					</p>
					<div className="resource-links">
						<a className="" href={movie.url}>SWAPI</a>
						<a className="movie-imdb-link" href={movie.imdbLink}>IMDb</a>
					</div>
				</div>
			</div>
	</ReactModal>
);

export default Film;