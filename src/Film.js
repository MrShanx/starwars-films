import React from 'react';
import ReactModal from 'react-modal';
import './Film.css';
//for modal placement, which div
ReactModal.setAppElement('#root');

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, .8)'
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '100px',
    right                      : '100px',
    bottom                     : 'auto',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '0px',
    outline                    : 'none',
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
		const { id, img, name } = this.props;

		return (
			<div 
				className="
					Film-card
					br3
					tc
					dib
					ma2
					grow
					bw2
					shadow-5"
				>
				<button 
				className="
					Film-button
					br3"
					value={id} 
					onClick={this.openModal}
				>
					<img alt='movie poster' src={`${img}`} />
					<h3>{name}</h3>
					<p className="Film-episode">Episode {id}</p>
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
			<div>
				<div className="modal-movie-title">
					<h1>{movie.name}</h1>
					<div className="modal-genre">
						<p className="genre">{`Episode ${movie.id}`}</p>
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
					<a href="https://swapi.co/">SWAPI</a>
				</div>
			</div>
	</ReactModal>
);

export default Film;