import * as React from 'react';

const MenuBar = () => {
    return(
        <div className='outerMenuHolder'>
            {/*<div className='menuHolder'>
                <div className='whitePart' />
                <div className='whitePart' />
                <div className='whitePart' />
            </div>*/}
        </div>
    )
}

class NavBar extends React.Component {
    render() {
        // const newAvatar = this.props.showAvatar;
        return(
            <nav className='navBar'>
                <MenuBar />
                <h1>7 Wonders DUEL</h1>
                {/*<div className="logIn" style={{backgroundImage: 'url(' + newAvatar +')'}} />*/}
                <div className="logIn" />
            </nav>
    )
    }
}

export {NavBar};