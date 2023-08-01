import { useState, useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSections from "../components/UI/CommonSections";
import "../styles/shop.css";
import { toast } from 'react-toastify';
import axios from "axios"

import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList";

const Shop = () => {
  const [productState, setProductState] = useState([])
  const [loadingState, setLoadingState] = useState('Fetching Products...')

  useEffect(() => {
    
    const getData = async() => {
      await axios.get('https://fakestoreapi.com/products')
      .then(res => {
        const prod = res?.data
        console.log(prod)
        setLoadingState('Loading')
        setProductState(prod) 
        setLoadingState('')
      })
    }

    getData()
  }, [])

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if(filterValue === "men's clothing") {
      const filteredProducts = productState.filter(
        item => item.category === "men's clothing"
      );
      setProductState(filteredProducts)
    }

    if(filterValue === "women's clothing") {
      const filteredProducts = productState.filter(
        item => item.category === "women's clothing"
      );
      setProductState(filteredProducts)
    }

    if(filterValue === "jewelery") {
      const filteredProducts = productState.filter(
        item => item.category === "jewelery"
      );
      setProductState(filteredProducts)
    }

    if(filterValue === "electronics") {
      const filteredProducts = productState.filter(
        item => item.category === "electronics"
      );
      setProductState(filteredProducts)
    }
  }

  const handleSearch = e => {
    const searchTerm = e.target.value;
    const searchedProducts = productState.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductState(searchedProducts);

    if(searchTerm === '') return productState
  }

  const setOptionCategoryData = () => {
    return productState.map(element => {
      return <option value={element.id}>{ element.category }</option>
    });
    
  }

  setOptionCategoryData()

  return (
    <Helmet title="shop">
      <CommonSections title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option value="">Products Category</option>
                  { setOptionCategoryData }
                </select>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="search__box">
                <input 
                  type="text" 
                  placeholder="Search Products..." 
                  onChange={handleSearch}
                />
                <span><i className="ri-search-line"></i></span>
              </div>
            </Col>

            <Col lg="3" md="3">
              <div className="filter__widget">
                <button className="filter__widget__btn">All Available Products</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productState.length === 0 ? (
              <h1 className="text-center">{ loadingState }</h1> 
            ) : (
              <ProductList data={productState} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop