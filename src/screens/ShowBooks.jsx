import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Container, Row, Col,Button} from 'react-bootstrap'
import BookCard from '../components/BookCard';
import { Link } from 'react-router-dom'

const ShowBooks = () => {


    const [books, setBooks] = useState([])

    useEffect(() => {
        const getBooksData = async () => {
            const { data } = await axios.get('http://localhost:4000/allBooks')
            console.log(data)
            setBooks(data)
  
  
        }
        getBooksData()
    }, [])

    return (
        <>
           <Container  className="justify-content-center p-2">
               <h1 className='text-center'>Show All Books</h1>  
               <hr /> 
               <div class="col-md-12 text-center">
               <Link to ='/addBook'>
               <Button  variant="primary" type="submit">
                        Add Book
                    </Button>
                    </Link>
                    </div>
             <br/>

               <Row>
                    {
                        books.map(book => {
                            return <Col md={6} lg={4} sm={12} key={book.id}>
                                <BookCard book={book} />
                            </Col>
                        })
                    }
               </Row>
             


           </Container>

           
        </>
    )
}

export default ShowBooks;