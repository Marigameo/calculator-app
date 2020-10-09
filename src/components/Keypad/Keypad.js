// Keypad.js
import React from 'react';
import KeypadRow from './KeypadRow';
import Button from '../Button/Button'
import '../../styles/keypad.css'
const keypad = (props) => (
    <section className="keypad">
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress} type="primary">C</Button>
            <Button onButtonPress={props.onButtonPress} type="primary">&larr;</Button>
            <Button onButtonPress={props.onButtonPress} type="operator">%</Button>
            <Button onButtonPress={props.onButtonPress} type="operator">/</Button>
        </KeypadRow>
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>9</Button>
            <Button onButtonPress={props.onButtonPress}>8</Button>
            <Button onButtonPress={props.onButtonPress}>7</Button>
            <Button onButtonPress={props.onButtonPress} type="operator">*</Button>
        </KeypadRow>
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>6</Button>
            <Button onButtonPress={props.onButtonPress}>5</Button>
            <Button onButtonPress={props.onButtonPress}>4</Button>
            <Button onButtonPress={props.onButtonPress} type="operator">-</Button>
        </KeypadRow>
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>3</Button>
            <Button onButtonPress={props.onButtonPress}>2</Button>
            <Button onButtonPress={props.onButtonPress}>1</Button>
            <Button onButtonPress={props.onButtonPress} type="operator">+</Button>
        </KeypadRow>
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>0</Button>
            <Button onButtonPress={props.onButtonPress}>.</Button>
            <Button type="large" onButtonPress={props.onButtonPress}>=</Button>
        </KeypadRow>
    </section>
);
export default keypad;