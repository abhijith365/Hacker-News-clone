
import React from 'react'

function NewsCard(props) {
    return (

        <div className='card-container' >

            <div className="card">
                <div className="inner-card">
                    <h2 className='header'>
                        {props.header}
                    </h2>

                    <div className="btn">
                        <a href={props.url} >Read More </a>
                    </div>

                    <div className='auth'>
                        <span className='by'>By:{'  '}{props.auth}</span>
                        <span className='posted'>Posted:{` `} {props.time}{` `}ago</span>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default NewsCard;
