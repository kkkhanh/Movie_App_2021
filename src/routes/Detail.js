import React, { Component } from 'react'
import './Detail.css'
import {useLocation} from 'react-router-dom';

function Detail() {
        const location = useLocation();
        //console.log(location);
        const {poster, title, year, genres, summary} = location.state
        return (
            <div className="detail">
                <img src={poster} alt={title} title={title} />
                <div className="detail_data">
                    <h3 className="detail_title">{title}</h3>
                    <h4 className="detail_year">{year}</h4>
                    <ul className="detail_genres">
                        <li className="detail_genre">
                            {
                                genres.map((genre,index) => {
                                    return (
                                        <li key={index} className="detail_genre">{genre}</li>
                                    );
                                })
                            }
                        </li>
                    </ul>
                    <p className="detail_summary">{summary.slice(0,180)}...</p>
                </div>
            </div>
        )
}

export default Detail;