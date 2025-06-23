// src/components/Cards/Card/Card.js
import React from "react";
import "./Card.css";

function Card({ title, category, area, thumb, tags }) {
    return (
        <div className="Card">
            <img src={thumb} alt={title} />
            <div className="Card-body">
                <h3 className="Card-title">{title}</h3>
                <p className="Card-meta">
                    Hi! I belong to <strong>{category}</strong> and I am from <strong>{area}</strong>!
                </p>
                <div className="Card-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="Card-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
