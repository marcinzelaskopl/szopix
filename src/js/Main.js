import React, { Component } from 'react';
import '../App.css';


class Main extends Component {
    render(){
        function scroll() {
            const el = document.getElementById('bio');
            el.scrollIntoView({behavior: 'smooth'});
        }
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-12 main'}>
                        <button onClick={scroll}>Check more</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main