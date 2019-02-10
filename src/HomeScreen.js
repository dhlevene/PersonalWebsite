import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import theboi from './assets/myBeautifulMug.jpg';
import face from './assets/BitmojiFace2.png';
import hat1 from './assets/beanie 3.png';
import hat2 from './assets/Grey Top Hat 2.png';
import './App.css';

class HomeScreen extends Component{

    render(){
        return(
            <div className="home-page">
                <a name="home" />
                {/* <img className="App-logo mt-5" src={theboi} alt="SoBewtyful"></img> */}
                <Image className="hat1" src={hat1} fluid />
                <Image className="hat2" src={hat2} fluid />
                <Image className="my-face" src={face} fluid />
                {/* <img className="my-face" src={face} alt="baseFace" /> */}
            </div>
        );
    }
}
export default HomeScreen