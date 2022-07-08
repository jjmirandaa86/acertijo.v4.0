import React, { useState } from 'react';
import { Image } from 'react-bootstrap';

const Socialnetworks = () => {

    const [typePicture, setTypePicture] = useState(true);

    const styles = {
        margin: "1rem auto",
    };

    const oNetworkJson = [
        {
            id: 1,
            name: "Github",
            url: "https://github.com/jjmirandaa86/",
            pictureAnimated: "icons8-github.gif",
            picture: "icons8-github.svg"
        },
        {
            id: 2,
            name: "LinkenIn",
            url: "https://www.linkedin.com/in/jjmirandaa86/",
            pictureAnimated: "icons8-linkedin.gif",
            picture: "icons8-linkedin.svg"
        },
        {
            id: 3,
            name: "Facebook",
            url: "https://www.facebook.com/jjmirandaa/",
            pictureAnimated: "icons8-facebook.gif",
            picture: "icons8-facebook.svg"
        },
        {
            id: 4,
            name: "Spotify",
            url: "https://open.spotify.com",
            pictureAnimated: "icons8-spotify.gif",
            picture: "icons8-spotify.svg"
        },
        {
            id: 5,
            name: "Instagram",
            url: "https://www.instagram.com/jjmirandaa/",
            pictureAnimated: "icons8-instagram.gif",
            picture: "icons8-instagram.svg"
        }
    ];

    setInterval(() => {
        setTypePicture(false);
    }, 5000);

    return (
        <div style={styles}>
            {
                oNetworkJson.map((el) => {
                    return <a target="_blank" href={el.url} >
                        <Image roundedCircle
                            src={typePicture === true
                                ? "./image/" + el.picture
                                : "./image/" + el.pictureAnimated}
                            height={"50"}
                            width={"50"}
                        />
                    </a>;
                })
            }
        </div>
    );
};

export default Socialnetworks;