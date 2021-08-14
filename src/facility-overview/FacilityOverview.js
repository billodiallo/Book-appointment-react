import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FacilityOverview = ({ setFacility }) => {
    const facilities = useSelector(state => state.facility.facilityCollection);

    return (
        <div>

        </div>
    )
}

export default FacilityOverview;