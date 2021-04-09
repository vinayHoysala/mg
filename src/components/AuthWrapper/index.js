import React from 'react'
import './styles.scss';

const AuthWrapper = ({headline, children}) => {
    return (
        <div className="authwrapper">
            <div className="wrap">
                {headline && <h2>{headline}</h2>}
            </div>

            <div className="children">
                {children && children}
            </div>
        </div>
    )
}

export default AuthWrapper;

