import React from 'react'
import { Container } from 'react-bootstrap'
import Darkmode from './Darkmode'
import Language from './Language'

const Navigationbar = (props) => {
    return (
        <div class="text-end">
            <Container>
                <Darkmode darkMode={props.darkMode}
                    setDarkMode={props.setDarkMode}
                    imgh={25}
                    imgw={25} />
                <Language language={props.language}
                    setLanguage={props.setLanguage}
                    imgh={25}
                    imgw={25} />
            </Container>
        </div>
    )
}

export default Navigationbar