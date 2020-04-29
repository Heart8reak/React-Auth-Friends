import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Card, Spinner } from 'react-bootstrap'

const Friends = () => {
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        // setTimeout(() => {
        //     setLoading(false)
        // }, 5000)
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log("List of my Friends from API: ", res.data)
                setInfo(res.data)
            })
            .catch(res => {
                console.log("You are not Authorized to this data!", res)
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
                        <h2>List of Friends</h2>
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
                        })}
                    </div>
                )}
        </div>
    )
}

export default Friends