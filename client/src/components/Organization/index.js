import React from 'react';
import PropTypes from 'prop-types';


const Organization = ({ name, description, address, link, goal, contactInfo }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                {address && <p className="card-text">{address}</p>}
                {link && <a href={link} className="card-link">{link}</a>}
                {goal && <p className="card-text">{goal}</p>}
                {contactInfo && <p className="card-text">{contactInfo}</p>}
            </div>
        </div>
    );
};

Organization.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string,
    link: PropTypes.string,
    goal: PropTypes.string,
    contactInfo: PropTypes.string,
};

export default Organization;