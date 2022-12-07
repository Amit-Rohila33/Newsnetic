import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props
        return (
            <>
                <div className='my-3'>
                    <div className="card " style={{ width: "18rem" }}>
                        <img src={!imageUrl ? "https://hollywoodlife.com/wp-content/uploads/2022/09/Shakira-Breaks-Silence-On-Split-ftrr.jpg" : imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}....<span className="badge rounded-pill  " style={{ backgroundColor: "#05FBB8", color: "black", fontFamily: "cursive" }} >{source}</span>
                            </h5>
                            <p className="card-text">{description}.....</p>
                            <p className="card-text"><small>By {!author ? "unknown" : author} on {new Date(date).toUTCString()}</small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm " style={{ backgroundColor: "black", color: "white" ,fontFamily:"cursive",fontStyle:"italic"}}>Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
