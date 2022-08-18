import React, { useState } from 'react';
import { Image } from 'react-bootstrap';

const Socialnetworks = ({ interactive }) => {

    const [typePicture, setTypePicture] = useState(interactive);

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
            url: "https://open.spotify.com/user/22zwfkq7vgxvcheii4rhj5mxq?si=bsg0xs4UT769sFTHMjVR_g",
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

    /*
    //para hacer interactivo los iconos despues de un tiempo
    setInterval(() => {
        setTypePicture(false);
    }, 5000);
    */

    return (
        <div style={styles}>
            {
                oNetworkJson.map((el, index) => {
                    return <a key={index} target="_blank" href={el.url} >
                        <Image roundedCircle
                            src={typePicture
                                ? "./image/" + el.pictureAnimated
                                : "./image/" + el.picture}
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