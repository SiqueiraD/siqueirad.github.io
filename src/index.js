import _ from 'lodash';
import './style.css';
import Honeycomb from './honeycomb.png';
import Data from './data.xml';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');


    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Honeycomb;

    element.appendChild(myIcon);

    console.log(Data);
    return element;
}

document.body.appendChild(component());