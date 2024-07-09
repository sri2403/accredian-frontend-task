import React from 'react';

const Nav = () => {
    return (
        <nav className=" p-2 navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><h3>Accredian</h3></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#refer">Refer</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#benefits">Benefits</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#faqs">FAQs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#support">Support</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
