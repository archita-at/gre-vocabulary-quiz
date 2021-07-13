import { Component } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";

class AddWordForm extends Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            word:"",
            meaning:"",
            synonyms:"",
            wordList:[]
        };
    }

    updateInput(value, control){
        if(control === "word"){
            this.setState({
                word:value
            });
        }
        if(control === "meaning"){
            this.setState({
                meaning:value
            });
        }
        if(control === "synonyms"){
            this.setState({
                synonyms:value
            });
        }
    }

    addWord(){
        console.log(this.state);
        const newWord={
            id: Math.random(),
            word: this.state.word,
            meaning: this.state.meaning,
            synonyms: this.state.synonyms
        };
        const newWordList = [...this.state.wordList, newWord];
        this.setState({
            wordList: newWordList
        });
    }

    render(){
        return(
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>Word</Form.Label>
                        <Form.Control
                        type="text" 
                        placeholder="Enter the word" 
                        value={this.state.word || ""}
                        onChange={item => this.updateInput(item.target.value, "word")}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Meaning</Form.Label>
                        <Form.Control
                        type="text" 
                        placeholder="Enter the meaning of the word"
                        value={this.state.meaning || ""}
                        onChange={item => this.updateInput(item.target.value, "meaning")}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Synonyms</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter the synonyms (Separate them with a comma)"
                        value={this.state.synonyms || ""}
                        onChange={item => this.updateInput(item.target.value, "synonyms")}/>
                    </Form.Group>
                    <Button 
                    variant="primary" 
                    type="submit"
                    onClick={() => this.addWord()}>
                        Add Word
                    </Button>
                </Form>
                <ListGroup>
                    {this.state.wordList.map(item=> {return(
                        <ListGroup.Item key={item.id}>
                            {item.word} - {item.meaning} - {item.synonyms}
                        </ListGroup.Item>
                    )})}
                </ListGroup>
            </Container>
        );
    };
}

export default AddWordForm;