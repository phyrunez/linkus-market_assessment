import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css"
import CommonSections from "../components/UI/CommonSections";
import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-toastify';

const Checkout = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')
  const totalQty = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const dispatch = useDispatch();

  const successfullyPlacedOrder = () => {
    toast.success('Your Order is on the way!!')
  }

  const infoMessage = () => {
    toast.info('Please fill out all fields to place your order!!')
  }

  const placeOrder = () => {
    if(name !== "" && 
      email !== "" && number !== "" && 
      address !== "" && city !== "" && 
      postalCode !== "" && country !== "" ) {
      successfullyPlacedOrder()
    }else {
      infoMessage()
    }
  }

  return (
    <Helmet title="Checkout">
      <CommonSections title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" onChange={e => setName(e.target.value) } placeholder="Enter your name" required />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" onChange={e => setEmail(e.target.value) } placeholder="Enter your email" required />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="number" onChange={e => setNumber(e.target.value) } placeholder="Phone number" required />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" onChange={e => setAddress(e.target.value) } placeholder="Street Address" required />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" onChange={e => setCity(e.target.value) } placeholder="City" required />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" onChange={e => setPostalCode(e.target.value) } placeholder="Postal Code" required />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" onChange={e => setCountry(e.target.value) } placeholder="Country" required />
                </FormGroup>
              </Form>
            </Col>
            
            <Col lg="4">
              <div className="checkout__cart">
                <h6>Total Qty: <span>{totalQty} Items</span></h6>
                <h6>Subtotal: <span>${totalAmount}</span></h6>
                <h6>
                  <span>
                    Shipping: <br />
                    free Shipping
                  </span> 
                  <span>$0</span>
                </h6>
                <h6>Free Shipping</h6>
                <h4>Total Cost: <span>${totalAmount}</span></h4>
                <button className="buy__btn auth__btn w-100" onClick={placeOrder}>Place an Order</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout