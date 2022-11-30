import React from 'react'
import { Card } from 'react-bootstrap'
import Bio from "../Bio";

export default function Footer () {
    return (
        <>

            <Card border="dark" style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Text>
                        <Bio/>
                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    )
}