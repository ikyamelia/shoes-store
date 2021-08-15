import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import imageProduct from '../../assets/product.png'
import imageProduct1 from '../../assets/product1.png'
import imageProduct2 from '../../assets/product2.png'
import imageProduct3 from '../../assets/product3.png'
import imageProduct4 from '../../assets/product4.png'
import imageProduct5 from '../../assets/product5.png'
import imageProduct6 from '../../assets/product6.png'
import {Link} from "react-router-dom";

const Product = ({product}) => {
    const images = [
        imageProduct,
        imageProduct1,
        imageProduct2,
        imageProduct3,
        imageProduct4,
        imageProduct5,
        imageProduct6,
    ]

    return (
        <Grid item xs={3}>
            
                <Paper className="product-grid-container" elevation={0}>
                    <Link to={"/product/"+product.name}> 
                        <img className="product-grid-image" src={images[Math.floor(Math.random() * 7)]} alt="imageProduct" />
                    </Link>

                    <div className="product-grid-desc-container">
                        <div>
                            <p className="product-grid-name">{product.name.toUpperCase()}</p>
                            <p className="product-grid-category">{product.category.trim()}</p>
                        </div>
                        <p className="product-grid-price">${product.price}</p>
                    </div>
                </Paper>
        </Grid>
    );
  }
  
  export default Product;
  