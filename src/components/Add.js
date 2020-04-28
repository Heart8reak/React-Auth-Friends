import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import { Form, Col } from 'react-bootstrap'


const Add = () => {
    const addFriendLayout = {
        name: "",
        age: "",
        email: "",
        id: Date.now()
    }

    const [data, setData] = useState(addFriendLayout)

    const handleChanges = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const add = e => {
        e.preventDefault()
        setData({ ...data })
        axiosWithAuth()
            .post("friends", data)
            .then(res => {
                console.log("You just added a new friend to your list", res)
                setData(addFriendLayout)
            })
            .catch(err => {
                console.log("No data to dispay, because you broek it!", err)
            })
    }
    return (
        <div>
            <Form onSubmit={add}>
                <h3>Add a New Friend</h3>
                <Form.Group>
                    <Col>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={handleChanges}
                        />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Col>
                        <Form.Control
                            type="text"
                            name="age"
                            placeholder="Age"
                            onChange={handleChanges}
                        />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Col>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChanges}
                        />
                    </Col>
                </Form.Group>
                <button variant="outline-secondary">Add Friend</button>
            </Form>
        </div>
    )
}

export default Add 