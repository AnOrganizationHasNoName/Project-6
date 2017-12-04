import React from 'react';
import { Link } from 'react-router-dom';

const LoadingAnimation = ()=>{
    return(
        <div class="loadingOuter">
            <div class="loadingInner">
                <svg class="circular" viewBox="25 25 50 50">
                    <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                </svg>
            </div>
        </div>

    )
}

export default LoadingAnimation;

//////////////
// CREDITS: //
//////////////

// @elrumordelaluz - Provided scaling fix/improvement
// @faddee - Provided fix for Edge support