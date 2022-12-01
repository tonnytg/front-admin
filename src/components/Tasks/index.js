import React, {Component} from 'react'
import {Card, Button} from 'react-bootstrap'
import api from '../../services/api'

class Tasks extends Component {

    state = {
        task: {
            name: 'a',
            description: 'aa',
            body: {content: 'aaa'},
            status: 'aaaa'
        }
    }

    async componentDidMount() {
        const tasks_api = await api.get('task?hash=2cb6b134-c493-4c74-aa7c-0efbb5288a71');

        this.setState({
            task: tasks_api.data
        })
        console.log("loaded", tasks_api)
    }

    render() {
        return (
            <>
                <Card>
                    <Card.Header as="h5">{this.state.task.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>Desc: {this.state.task.description}</Card.Title>
                        <Card.Title>Status: {this.state.task.status}</Card.Title>
                        <Card.Text>
                            Test:{this.state.task.body.content}
                        </Card.Text>
                        <Button variant="success">Done</Button>
                        <Button variant="primary">Doing</Button>
                        <Button variant="warning">Cancel</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}
export default Tasks;