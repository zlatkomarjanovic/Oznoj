import React from 'react';

const Bullet = (props) => {
    return (
        <div className="bullet-circle">
            {props.number}
        </div>
    );
};

export default Bullet;