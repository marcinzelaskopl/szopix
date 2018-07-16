import React, { Component } from 'react';
import '../App.css';
import Slide from 'react-reveal/Slide';
import Cute from '../images/cute.jpg'
import Video from '../images/szop-gif.mp4'

class Inner extends Component{
    render(){
        return(
            <div id={'inner'} className={'grid-container inner'}>
                <div className={'row'}>
                    <div className={'col-12 center-inner'}>
                        <Slide left>
                        <p>The Cutest Animals Ever</p>
                        <img src={Cute} alt={'Cute Raccoon'}/>
                        </Slide>
                        <Slide right>
                        <p>The Most Funny Ones!</p>
                        <video autoPlay loop>
                            <source src={Video} type={'video/mp4'}/>
                        </video>
                        </Slide>
                        <h3>Interesting facts about raccoons</h3>
                        <h4>1. THEY'RE NAMED FOR THEIR UNIQUE HANDS.</h4>
                        <p className={'text-info'}>Raccoons have some of the most dexterous hands in nature, as anyone who's had a garden, cooler, or garbage can broken into by one of them knows. Native Americans were the first to note their unusual paws. The English word raccoon comes from the Powhatan word aroughcun, which means "animal that scratches with its hands." </p>
                        <h4>2. THEIR MASKS AREN'T JUST FOR SHOW.</h4>
                        <p className={'text-info'}>Thanks to the black markings that fall across their eyes, raccoons have been typecast as the conniving thief or trickster figure in stories for centuries. But their famous black masks do more than make them look like adorable outlaws—they also help them see clearly. The black fur works just like the black stickers athletes wear under their eyes: The dark color absorbs incoming light, reducing glare that would otherwise bounce into their eyes and obstruct their vision.</p>
                        <h4>3. ONE LIVED IN THE WHITE HOUSE.</h4>
                        <p className={'text-info'}>It's unusual for White House pets to start as Thanksgiving dinner, but that was the case with Rebecca, the raccoon that lived with Calvin Coolidge for part of his presidency. At the time, raccoon meat wasn't a terribly uncommon sight on dinner tables in America. But once he met the live critter, Coolidge decided he was more interested in adopting her than having her for supper. Rebecca soon became part of the family, receiving an engraved collar for Christmas, taking part in the annual Easter Egg roll, and frequently accompanying the president on walks around the White House grounds.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inner