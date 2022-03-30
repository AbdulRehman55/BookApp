import React, { useEffect, useState } from 'react'
import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'
import Ratings from '../components/Ratings'



const BookDetail = () => {
    const { id } = useParams()
    const history = useHistory()

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [bookDescription, setBookDescription] = useState('')
    const [published, setPublished] = useState(true)
   // const [bookImage, setBookImage] = useState('')


    // review rating  description
    const [reviews, setReviews] = useState([])
    const [currentValue, setCurrentValue] = useState(0)
    const [description, setDescription] = useState('')

    useEffect(() => {

        const getSingleBookData = async () => {
            const { data } = await axios.get(`http://localhost:4000/getBookReviews/${id}`)
            console.log(data)

            setTitle(data.title)
            setPrice(data.price)
            setBookDescription(data.description)
            setPublished(data.published)
           // setBookImage(data.image)

            // for reviews
            setReviews(data.review)


        }
        getSingleBookData()

    },[id])



    // handling Delete
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:4000/${id}`)
        history.push('/books')
    }


    // to add review

    const addReviewHandler = async (e) => {

        e.preventDefault()

        let review = {
            bookId: id,
            rating: currentValue,
            description: description
        }

        await axios.post(`http://localhost:4000/addReview/${id}`, review)
        console.log(review)

        history.push('/books')
    }



    

    return (
        <>

        <Container className="mt-10 p-4">
        <h1 className="text-center">Detail Book</h1>
        <hr />

        <Row>
            <Col md={8} lg={8} sm={8}>
                <Card className='shadow-lg m-3 p-2 rounded'>
                        {/* <Card.Img src={`http://localhost:3000/${bookImage}`} fluid /> */}
                        <Card.Body>
                            <Card.Title>Title: {title}</Card.Title>
                            <Card.Title className="text-success">Price: ${price}</Card.Title>
                            <Card.Text>
                                Description: {bookDescription}
                            </Card.Text>
                            <Card.Text>
                                Published: {published ? (<small>True</small>) : (<small>false</small>)}
                            </Card.Text>
                        <br />

                    
                            <Link to={`/book/edit/${id}`}>
                                <Button>Edit</Button>
                            </Link>
                            
                            <Button className="btn btn-danger m-2" onClick={() => handleDelete(id)}>Delete</Button> 
                        
                    </Card.Body>        
                </Card>
            </Col>


                <Col md={4} lg={4} sm={4}>

                    <h2 className='text-center'>Add Review</h2>
                    <hr />

                        <Form onSubmit={addReviewHandler}>
                            <Form.Group className="mb-3" controlId="rating">
                                <Form.Label>Ratings</Form.Label>
                            </Form.Group>
                            <Ratings setCurrentValue={setCurrentValue} ></Ratings>

                        

                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    as="textarea"
                                    />
                            </Form.Group>


                            <Button variant="primary" type="submit">
                                Add Review
                            </Button>
                        </Form>

                         <br />

                        <h5>Book Reviews</h5>
                        <hr />

                        {reviews.length > 0 ? (
                            reviews.map(review => {
                                return <p key={review.id}>Rating: {review.rating} <br /> {review.description}</p>
                            })
                        ): ( <p> No reviews for this book </p> )}

                        
                </Col>
        </Row>



                
        </Container>

       



        </>
    )
}

export default BookDetail