import logo from '../../assets/logo.svg';
import {useSelector} from 'react-redux'
import iconCart from '../../assets/cart.svg';
import iconAccount from '../../assets/account.svg';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';

function Navbar() {
    const count = useSelector(state => {
        let temp = 0
        if (state.cart) state.cart.map(value => temp+=value.qty)
        
        return temp
    })
  

    return (
        <>
            <div className="header-menu">
                <div className="top-header-menu left">
                    <Link to="/">
                        <img className="header-menu-logo" src={logo} alt="logo" />
                    </Link>
                </div>

                <div className="top-header-menu center">
                    <p className="header-menu-text active">New</p>
                    <p className="header-menu-text">Men</p>
                    <p className="header-menu-text">Women</p>
                    <p className="header-menu-text">Kids</p>
                    <p className="header-menu-text">Customize</p>
                </div>

                <div className="top-header-menu right">
                    <Link to="/cart">
                        <Badge className="header-icon" badgeContent={count} color="secondary">
                            <img src={iconCart} alt="iconCart" />
                        </Badge>
                    </Link>
                    <img className="header-icon" src={iconAccount} alt="iconAccount" />
                </div>
            </div>
        </>
    );
}
  
export default Navbar;
  