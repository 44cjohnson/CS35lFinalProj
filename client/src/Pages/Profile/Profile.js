import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import './styles.css'

const Profile = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    // will need to add functionality for saving info from textfield and sending to backend

    useEffect(() => {
        
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <div>
            <div>
                <img label="Profile Picture" className="media" alt="profile picture" src={user?.result.selectedFile} />
            </div>
            <h3 align="center">{user?.result.name}</h3>
            <h2>Bio</h2>
            <TextField name="Bio" variant="outlined" label="Bio" fullWidth></TextField>
            <TextField name="categories" variant="outlined" label="Interests/Favorite Activities" fullWidth></TextField>
            <h2>Your Workouts</h2>
            <h2>Photos and Videos</h2>
        </div>
    )
}

export default Profile;
