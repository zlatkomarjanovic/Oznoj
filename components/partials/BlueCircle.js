import React from 'react';

const BlueCircle = (props) => {
    return (
        <div className="blue-circle" style={{right: props.right ?? '', top: props.top ?? ''}}/>
    );
};

export default BlueCircle;