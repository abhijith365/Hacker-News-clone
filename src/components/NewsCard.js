import React from 'react'

function NewsCard(props) {
    return (

        <div className="card-container"
            style={{
                minWidth: '100%',
            }}>

            <div className="container"
                style={{

                    backgroundColor: '#1C8D73',
                    color: 'white',
                    padding: '0 10px',
                    margin: '10px 0',

                }
                }>

                <a href={props.url}
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                    }}>

                    <h1 className='header'
                        style={{
                            paddingLeft: '3rem',
                        }}>
                        {props.header}
                    </h1>
                    <div className='auth' style={{
                        marginLeft: '3rem',
                        padding: '3px 0'
                    }}>
                        By:{'  '}{props.auth}
                    </div>
                </a>
            </div>
        </div>

    )
}

export default NewsCard;
