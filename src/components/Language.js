import React from 'react'
import { Image } from 'react-bootstrap';

const Language = (props) => {

    return (
        <>
            <a onClick={() => {
                if (props.language === "EN") {
                    props.setLanguage("ES");
                }

                if (props.language === "ES") {
                    props.setLanguage("EN");
                }

            }}>
                {(props.language === "ES") ?
                    <Image
                        src={"./image/ES.svg"}
                        style={{
                            height: props.imgh,
                            width: props.imgw,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    /> :
                    <Image
                        src={"./image/EN.svg"}
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

export default Language