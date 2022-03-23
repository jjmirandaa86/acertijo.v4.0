import React from 'react'
import { Image } from 'react-bootstrap';

const Darkmode = (props) => {
    return (
        <>
            <a onClick={() => {
                props.setDarkMode(!props.darkMode)
            }}>
                {(props.darkMode === true) ?
                    <Image
                        src={"./image/sunLight.svg"}
                        style={{
                            height: props.imgh,
                            width: props.imgw,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    /> :
                    <Image
                        src={"./image/sunDark.svg"}
                        style={{
                            height: props.imgh,
                            width: props.imgw,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    />}

            </a>

        </>
    )
}

export default Darkmode