import React from 'react'

const Newitem = (props) => {

    let { title, description, imageUrl, url, date } = props;
    return (
        <div >
            <div className="card my-3">
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{new Date(date).toString()}</p>
                    <p className="card-text">{description && description.slice(0, 20)}</p>
                    <a href={url} className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )

}
export default Newitem
