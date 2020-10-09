// Screen.js
import React from 'react';
import OutputScreen from './OutputScreen';
import ComputeScreen from './ComputeScreen';
import '../../styles/screens.css'
const screenWrapper = (props) => (
    <section className="screen">
        <OutputScreen>{props.output}</OutputScreen>
        <ComputeScreen>{props.equation}</ComputeScreen>
    </section>
);
export default screenWrapper;