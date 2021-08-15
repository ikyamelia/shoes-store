import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProduct } from './actions/action';
import './App.css';
import Headers from './features/components/Headers';
import Product from './features/components/Product';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Navbar from './features/components/Navbar';

function App() {
  const dispatch = useDispatch()

  const product = useSelector(state => {
    if (state.product) return state.product
    else return []
  })

  const getDataAPI = () => {
    dispatch(getProduct())
  }

  useEffect(() => {
    getDataAPI()
  },[])
  
  return (
    <>
      <Headers />
      <Container maxWidth="lg">
        <Navbar />
        <h1 className="title-category">New Releases</h1>
        <Grid container spacing={5}>
          {product.map((data, index) => {
            return (
              <Product key={index} product={data} />
            )
          })}
        </Grid>
      </Container>
    </>
  );
}

export default App;
