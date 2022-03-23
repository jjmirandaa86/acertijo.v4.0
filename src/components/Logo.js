import React from 'react'

const Logo = (props) => {
    return (
        <>
            <img src="./image/logo.svg"
                width={props.px}
                height={props.py}
                className="App-logo"
                alt="logo" />
        </>
    )
}

export default Logo