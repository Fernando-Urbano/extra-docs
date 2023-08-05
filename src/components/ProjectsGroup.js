import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"; 
import SingleProject from './SingleProject';

function ProjectsGroup (props) {

    const projects = props.projects

    const [expanded, setExpanded] = useState(false)

    const plusSign = (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
    )

    const minusSign = (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-file-minus" viewBox="0 0 16 16">
            <path d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
        </svg>
    )

    return (
        <div className="form-control col-12 col-sm-6 col-md-4 p-2 m-2">
            <h1>
            <span className='display-6 m-3'>{props.name}</span>
                <button
                    className={expanded ? "btn btn-outline-success" : "btn btn-success"}
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? (minusSign) : (plusSign)}
                </button>
            </h1>
            {expanded && (
                <div className='col-12'>
                    {Object.values(projects).map((project, index) => (
                        <SingleProject
                            key={index}
                            title={project.title}
                            text={project.text}
                            links={project.links}
                            video={project.video}
                            date={project.date}
                        />
                    ))}
                </div>
            )}
        </div>
    )

}

export default ProjectsGroup;