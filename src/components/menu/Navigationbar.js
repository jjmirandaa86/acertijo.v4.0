import Darkmode from '../layout/Darkmode';
import Language from '../layout/Language';

const Navigationbar = () => {

    const styles = {
        padding: "10px 15px 10px 20px"
    };

    return (
        <div className="text-end" >
            <div style={styles}>
                <Darkmode
                    imgh={25}
                    imgw={25}
                />
                {" "}
                <Language
                    imgh={20}
                    imgw={20} />
            </div>
        </div >
    );
};

export default Navigationbar;