import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';


const HeaderContent = () => {

    return (
        <div>
            <HeaderTitle />
            <p className="header-content">
                Let's learn React by building simple interfaces with components.
                Don't try to over think it, just keep it simple and have fun.
                Once you feel comfortable using components you are well on your way to mastering React!
            </p>
        </div>
    )

}

export default HeaderContent;