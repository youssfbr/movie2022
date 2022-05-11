import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="movie-nav-content">
                    <h1>Movie</h1>
                    <a href="https://github.com/youssfbr/movie2022">
                        <div className='movie-contact-container'>
                            <GithubIcon />                                            
                            <span className='movie-contact-link'>/youssfbr</span>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;