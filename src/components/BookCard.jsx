import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BookCard = ({ book }) => {
    return (
        <>
        {console.log('inside book card')}

            <Card className='shadow-lg m-2 p-3 rounded' style={{ width: '18rem' }}>
                {/* <Card.Img src={book.image} /> */}
                <Card.Body>
                    <Card.Title>Title: {book.title}</Card.Title>
                    <Card.Title>Price: ${book.price}</Card.Title>
                    <Card.Text>
                        Description: {book.description.slice(0,10)}...
                    </Card.Text>
                 
                    <Link to={`book/${book.id}`}>
                        <Button>Detail</Button>
                    </Link>
                </Card.Body>

                
               
            </Card>
       
           
        </>
    )
}

export default BookCard;