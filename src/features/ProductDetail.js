import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router';
import Headers from './components/Headers';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

import imageProduct from '../assets/product.png'
import imageProduct1 from '../assets/product1.png'
import imageProduct2 from '../assets/product2.png'
import imageProduct3 from '../assets/product3.png'
import imageProduct4 from '../assets/product4.png'
import imageProduct5 from '../assets/product5.png'
import imageProduct6 from '../assets/product6.png'

import iconPlayVideo from '../assets/play_video.svg'
import imagefreeShipping from '../assets/free_shipping.svg'
import iconArrowRight from '../assets/arrow_right.svg'
import { updateCart } from '../actions/action';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const ProductDetail = () => {
    const dispatch = useDispatch()
    const { productname } = useParams();
    const [size, setSize] = useState(null)
    const [color, setColor] = useState(null)
    const [open, setOpen] = useState(false);
    const [video, setVideo] = useState(false);
    const images = [
        imageProduct,
        imageProduct1,
        imageProduct2,
        imageProduct3,
        imageProduct4,
        imageProduct5,
        imageProduct6,
    ]

    const toogleDialog = () => {
      setOpen(!open);
    };
    
    const toggleVideo = () => {
        setVideo(!video);
    };

    const product = useSelector(state => {
        if (state.product) {
            return state.product.find(value => value.name === productname)
        }
        else return null
    })

    const addToCart = () => {
        if (size && color && product) {
            dispatch(updateCart(
                {
                    qty: 1,
                    size: size,
                    color: color,
                    product: product
                }
            ))
        } else {
            setOpen(true)
        }
    }

    console.log("produt", product)
    return (
        <>
            <Headers />
            <Container maxWidth="lg">
                <Navbar />
                <div className="product-detail-container">
                    <div className="product-detail-images-container">
                        <img className="product-grid-image" src={images[Math.floor(Math.random() * 7)]} alt="imageProduct" />
                        <div className="product-detail-grid">
                        <Grid container spacing={3}>
                            <Grid item xs={3}> 
                                <img className="product-grid-image" src={images[Math.floor(Math.random() * 7)]} alt="imageProduct" />
                            </Grid>
                            <Grid item xs={3}>
                                <img className="product-grid-image"  src={images[Math.floor(Math.random() * 7)]} alt="imageProduct" />
                            </Grid>
                            <Grid item xs={3}>
                                <img className="product-grid-image"  src={images[Math.floor(Math.random() * 7)]} alt="imageProduct" />
                            </Grid>
                            <Grid item xs={3}>
                                <img className="product-grid-image"  src={images[Math.floor(Math.random() * 7)]} alt="imageProduct" />
                            </Grid>
                        </Grid>
                        </div>
                    </div>
                    <div className="product-detail-desc-container">
                        <p className="product-detail-category">{product.category.toUpperCase()}</p>
                        <h1 className="product-detail-title">{product.name.toUpperCase()}</h1>
                        <p className="product-detail-desc">{product.description}</p>
                        <div onClick={toggleVideo} className="product-detail-video">
                            <img src={iconPlayVideo} />
                        </div>

                        <div>
                            <p className="product-detail-size-label">SELECT SIZE (US)</p>
                            <Grid container spacing={1}>
                                {product.sizes.map((data, index) => {
                                    return (
                                        <Grid item xs={2}  key={index}>
                                            <p onClick={() => setSize(data)} className={"product-detail-size" + (data === size ? " active" : "") }>{data}</p>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </div>
                        <div>
                            <p className="product-detail-color-label">SELECT COLOR</p>
                            <Grid container spacing={0}>
                                {product.colors.map((data, index) => {
                                    return (
                                        <Grid key={index} item xs={2}>
                                            <p onClick={() => setColor(data)} style={{backgroundColor: data.color_hash}} className={"product-detail-color" + (data === color ? " active" : "") } >{""}</p>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </div>
                    </div>
                </div> 
                
                <div className="product-detail-checkout-container">
                    <img src={imagefreeShipping} />
                    <Link to="/cart">
                    <div onClick={addToCart} className="product-detail-add-cart">
                        <p className="product-detail-add-cart-text">ADD TO BAG - ${product.price}</p>
                        <img src={iconArrowRight} alt="iconArrowRight"/>
                    </div>
                    </Link>
                   
                </div>
            </Container>
           
            <Dialog
                open={open}
                onClose={toogleDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Cannot add product to cart!"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Please choose size and color before adding to cart
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={toogleDialog} color="primary" autoFocus>
                    Ok
                </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={video}
                onClose={toggleVideo}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                
                <DialogContent>
                <iframe
                    width="480" height="320"
                    src={product.video}
                    frameBorder="0"
                />
                </DialogContent>
            </Dialog>
        </>
    )
  }
  
  export default ProductDetail;
  