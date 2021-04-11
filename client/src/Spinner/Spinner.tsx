import React from 'react';
import { Ripple } from './style';

function Spinner() {
    return (
        <Ripple aria-label='loading...'>
            <div />
            <div />
        </Ripple>
    );
}

export { Spinner };
