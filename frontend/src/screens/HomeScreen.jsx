import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap"
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from "../actions/productAction";


const HomeScreen = () => {
	const dispatch = useDispatch()
	//useSelector can access the redux state
	const productList = useSelector(state => state.productList)
	//getting data from a state
	const { loading, error, products } = productList
	//fetch the products
	useEffect(() => {
		dispatch(listProducts())
	}, [dispatch]);


	
	return (
		<>
			<h1> Latest products</h1>
			{/*if loading
			else error
			or display products*/}
			{loading ? (
				<Loader/>
			) : error ? (
					<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</>
	);
};

export default HomeScreen;
