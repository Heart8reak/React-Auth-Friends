import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import { Card, Spinner } from 'react-bootstrap'


const Add = () => {
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log("List of Friends from the API:", res.data)
                setInfo(res.data)
            })
            .catch(err => {
                console.log('You broke it!', err)
            })
    }, [])

    return (
        <div>
            {!loading ? (
                <div>
                    <Spinner variant="primary" animation="grow" />
                    <Spinner variant="primary" animation="grow" />
                    <Spinner variant="primary" animation="grow" />
                </div>
            ) : (
                    <div>
                        {info.map(friend => {
                            return (
                                <section key={friend.id}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{friend.name}</Card.Title>
                                            <Card.Subtitle>
                                                {friend.age}
                                            </Card.Subtitle>
                                            <Card.Text>
                                                {friend.email}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </section>
                            )
                        })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Add 