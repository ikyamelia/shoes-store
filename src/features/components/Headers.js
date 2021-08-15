import iconArrow from '../../assets/chevron_down.svg';
import iconShipping from '../../assets/shipping.svg';

function Headers() {
    return (
        <>
            <div className="top-header">
                
                <div className="top-header-menu left">
                    <p className="top-header-menu-text">English</p>
                    <img className="header-icon" src={iconArrow} alt="iconArrow" />
                </div>

                <div className="top-header-menu center">
                    <img className="header-icon" src={iconShipping} alt="iconShipping" />
                    <p className="top-header-menu-text">free shipping over $100 purchase</p>
                </div>

                <div className="top-header-menu right">
                    <p className="top-header-menu-text">Shipping</p>
                    <p className="top-header-menu-text">FAQ</p>
                    <p className="top-header-menu-text">Contact</p>
                </div>
            </div>
        </>
    );
  }
  
  export default Headers;
  