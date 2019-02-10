import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import './App.css';

class Header extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            scrollingLock: false,
            text: this.props.text,
            showText: false
        };
        this.handleScroll = this.handleScroll.bind(this)
    }

    toggleText = () => {
        this.setState({showText : !this.props.showText});
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
        if (window.scrollY > 100) {
            console.log("should lock");
            this.setState({
                scrollingLock: true
            });
        } else if (window.scrollY < 100) {
            console.log("not locked");
            this.setState({
                scrollingLock: false
            });
        }
    }

    render(){
        return(
            <Navbar className="nav-bar" bg="dark" expand="md" variant="dark" style={{ position: this.state.scrollingLock ? "fixed" : "relative"}}>
                <Navbar.Brand href="#home" className="logo-text">Daniel Levene</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mt-2 mr-auto nav-items">
                        {/* <Nav.Link href="#home">Home</Nav.Link> */}
                        <Nav.Link className="mx-2" href="#projects">Projects</Nav.Link>
                        <Nav.Link className="mx-2" href="#resume">Resume</Nav.Link>
                    </Nav>
                    <p className="mb-0 navbar-texttt">Welcome In :)</p>
                </Navbar.Collapse>
            </Navbar>
                
            // <div className="header-div">
            //     <Button variant="primary"> Test </Button>
            //     <Button variant="primary" className="header-button" onClick={this.toggleText}>
            //         {this.state.showText ? this.state.text : null}
            //     </Button>
            // </div>
        );
    }
}
export default Header;