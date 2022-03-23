import React from 'react'
import { Image } from 'react-bootstrap';

const Socialnetworks = () => {
    return (
        <>
            <a href={"https://github.com/jjmirandaa86/"} >
                <Image roundedCircle
                    src="./image/github.svg"
                    height={"50"}
                    width={"50"}
                />
            </a>
            <a href={"https://www.linkedin.com/in/jjmirandaa86/"} >
                <Image roundedCircle
                    src="./image/linkedin.svg"
                    height={"50"}
                    width={"50"} />
            </a>
            <a href={"https://www.facebook.com/jjmirandaa"} >
                <Image roundedCircle
                    src="./image/facebook.svg"
                    height={"50"}
                    width={"50"} />
            </a>
            <a href={"https://open.spotify.com"} >
                <Image roundedCircle
                    src="./image/spotify.svg"
                    height={"50"}
                    width={"50"} />
            </a>
        </>
    )
}

export default Socialnetworks