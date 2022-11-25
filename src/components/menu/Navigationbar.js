import DarkMode from '../layout/DarkMode';
import Language from '../layout/Language';

const NavigationBar = () => {

    const styles = {
        padding: "10px 15px 10px 20px"
    };

    return (
        <div className="text-end" >
            <div style={styles}>
                <DarkMode
                    height={25}
                    width={25}
                />
                {" "}
                <Language
                    height={20}
                    width={20} />
            </div>
        </div >
    );
};

export default NavigationBar;