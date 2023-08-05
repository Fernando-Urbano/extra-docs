import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import YouTubeEmbed from '../components/YouTubeEmbed';

function SingleProject (props) {

    const paragraphs = props.text.split('\n\n');

    const [expanded, setExpanded] = useState(false)

    const plusSign = (
        <svg
            xmlns="http://www.w3.org/2000/svg" width="20" height="20"
            fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"
        >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
    )

    const minusSign = (
        <svg
            xmlns="http://www.w3.org/2000/svg" width="20" height="20"
            fill="currentColor" class="bi bi-file-minus" viewBox="0 0 16 16"
        >
            <path d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
        </svg>
    )

    const expandedStyle = { backgroundColor: 'rgb(250, 250, 250)' };
    const collapsedStyle = { backgroundColor: 'rgb(250, 250, 250)' };

    return (
        <div className='form-control m-1 col-3' style={expanded ? expandedStyle : collapsedStyle}>
            <h1>
                <span className='lead m-3'>{props.title}</span>
                <button
                    className={expanded ? "btn btn-outline-success btn-sm" : "btn btn-success btn-sm"}
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? (minusSign) : (plusSign)}
                </button>
            </h1>
            {expanded && (
                <div>
                    {props.date && (<div>
                        <span class="badge bg-secondary">{props.date}</span>
                    </div>)}
                    {props.links && Object.entries(props.links).map(([name, url]) => (
                        <button
                        key={name}
                        className="btn btn-primary m-1"
                        onClick={() => { window.open(url, '_blank'); }}
                        >
                        {name}
                        </button>
                    ))}
                    {props.video && (
                        <YouTubeEmbed url={props.video}/>
                    )}
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className='m-2 p-1'>{paragraph}</p>
                    ))}
                </div>
            )}
        </div>
    );

}

export default SingleProject;