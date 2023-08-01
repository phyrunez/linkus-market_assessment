import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import "../../styles/product-item.css"
import { Col, Card, CardBody, CardTitle, CardText, CardFooter } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice"
import { toast } from "react-toastify"

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addItem({
        id: item.id,
        productName: item.title.slice(0, 10),
        price: item.price,
        imgUrl: item.image,
    }));

    toast.success('Product added Successfully')
  }

  return (
    <Col lg="3" md="4" className="mb-2">
        <div className="product__item">
            
            <Card
                style={{
                    width: '17rem',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                    maxHeight: '500px'
                }}
            >
                <motion.img onClick={addToCart} whileHover={{ scale: 0.9 }} height="200px" width="100px" src={item.image} alt="" />
                <CardBody>
                    <CardTitle tag="h5">
                        <div className="p-2 product__info">
                            <h6 className="product__name">
                                <Link to={`/shop/${item.id}`}>{item.title.slice(0, 10)}</Link>
                            </h6>            
                        </div>
                    </CardTitle>
                    
                    <CardText>
                        <p
                            style={{
                                maxHeight: '110px',
                                fontSize: '10px'
                            }}
                        >
                            { item.description.slice(0, 100) }
                        </p>
                    </CardText>
                    <CardFooter>
                        <div className="product__card-bottom d-flex align-items-center justify-content-between" style={{ display: "flex" }}>
                            <span className="price">${item.price}</span>
                            <motion.span shileTap={{ scale: 1.2 }} onClick={addToCart}>
                                <i className="ri-add-line"></i>
                            </motion.span>
                        </div>
                    </CardFooter>
                </CardBody>
            </Card>
        </div>
    </Col>
  )
}

export default ProductItem