import React from "react"
import { Link } from "react-router-dom";
import "./Card.css";



function Component({title, description, id}) {
    return (
        <div className="cards">
            <Link className="link" to={`/cards/:id`}>
                <div className="cards-container">
                <p className="cards-title"> {title} </p>
                <p className="cards-desc"> {description}</p>
                </div>
            </Link>

        </div>
    )
}

export default Component; 