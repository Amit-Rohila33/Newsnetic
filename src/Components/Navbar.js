
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {


    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:"black"}}>
                    <Link className="navbar-brand" style={{fontFamily:"cursive",fontStyle:"italic"}} to="/">Newsnetic</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <Link className="nav-link" style={{fontFamily:"cursive",fontStyle:"italic"}} to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{fontFamily:"cursive",fontStyle:"italic"}} to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{fontFamily:"cursive",fontStyle:"italic"}} to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{fontFamily:"cursive",fontStyle:"italic"}} to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{fontFamily:"cursive",fontStyle:"italic"}} to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{fontFamily:"cursive",fontStyle:"italic"}} to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{fontFamily:"cursive",fontStyle:"italic"}} to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{fontFamily:"cursive",fontStyle:"italic"}} to="/technology">Technology</Link>
                            </li>
                            
                            
                        </ul>
                        
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar