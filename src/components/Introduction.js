import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '../assets/profile.jpg';

function Introduction () {

    return (
        <nav className="navbar column-flex align-text-left">
            <ul className="nav">
                <li className="col-12 display-4">Personal and Professional Projects</li>
                <li className="col-12 display-6">Fernando Rocha Corrêa Urbano</li>
                <li className="col-12 lead">MS in Financial Mathematics Student at The University of Chicago</li>
                <li className="col-12 lead">UChicago e-mail: fernandourbano@uchicago.edu</li>
                <li className="col-12 lead">Personal e-mail: fernando.rocha.urbano@gmail.com</li>
                <div className="d-flex justify-content-center col-12">
                    <img src={profilePic} alt="Profile" className="img-fluid" style={{ maxWidth: '325px', margin: 'auto' }} />
                </div>
                <div className='d-flex justify-content-center col-12'>
                    <div class="alert alert-success m-2" role="alert">
                        This App was built by <strong>me</strong> using <strong>Node + React</strong>
                    </div>
                </div>
                <div className='d-flex justify-content-center col-12'>
                    <button
                        className="btn btn-primary m-1"
                        onClick={() => { window.open('https://www.linkedin.com/in/fernando-rochaurbano/', '_blank'); }}
                    >
                        Linked-In
                    </button>
                    <button
                        className="btn btn-primary m-1"
                        onClick={() => { window.open('https://github.com/Fernando-Urbano', '_blank'); }}
                    >
                        GitHub
                    </button>
                </div>
            </ul>
        </nav>
    )

}

export default Introduction;