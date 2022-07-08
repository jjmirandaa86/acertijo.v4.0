import Darkmode from './Darkmode';
import Language from './Language';

const Navigationbar = ({ darkMode, handleChangeMode, language, handleChangeLanguage }) => {

    const styles = {
        padding: "10px 15px 10px 20px"
    };

    return (
        <div class="text-end">
            <div style={styles}>
                <Darkmode
                    darkMode={darkMode}
                    handleChangeMode={handleChangeMode}
                    imgh={25}
                    imgw={25}
                />
                {" "}
                <Language
                    language={language}
                    handleChangeLanguage={handleChangeLanguage}
                    imgh={20}
                    imgw={20} />
            </div>
        </div>
    );
};

export default Navigationbar;