import React from 'react';
import {Button, Container, Form} from 'react-bootstrap';

class AddForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            word:"",
            meaning:"",
            synonyms:"",
            synonymsList:[],
            newWord:""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        this.setState(
            {[event.target.name]:event.target.value}
        );
    }

    handleSubmit(event){
        const newWord = {
            id: Math.random(),
            value: this.state.word,
            meaning: this.state.meaning,
            synonyms: this.state.synonyms
        }
        const newList = this.state.synonyms.split(",");
        this.setState({
            newWord: newWord,
            word:"",
            meaning: "",
            synonyms:"",
            synonymsList: newList
        })
        event.preventDefault();
    }

    render(){
        return(
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Word: </Form.Label>
                        <Form.Control type="text" name="word" value={this.state.word} onChange={this.handleInputChange}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Meaning:</Form.Label>
                        <Form.Control type="text" name="meaning" value={this.state.meaning} onChange={this.handleInputChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Synonyms (separate with comma for more than one):</Form.Label>
                        <Form.Control type="text" name="synonyms" value={this.state.synonyms} onChange={this.handleInputChange}></Form.Control>
                    </Form.Group>
                    
                    <Button type="submit">Submit</Button>
                </Form>
                {this.state.newWord !== "" && <p key={this.state.newWord.id}>{this.state.newWord.value},{this.state.newWord.synonyms} = {this.state.newWord.meaning}</p>}
                {this.state.synonymsList.map(item => {return(
                    <p>{item}</p>
                )})}
            </Container>
        )
    }
}

export default AddForm;