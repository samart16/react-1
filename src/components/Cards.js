import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

const Cards = () => {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/reefs.jpg'
                            text='Explore the coral reefs in the Caribbean Sea '
                            label='Adventure'
                            path='/services' />
                        <CardItem
                            src='images/ocean.jpg'
                            text='Travel through the islands of Bali in a private cruise'
                            label='Luxury'
                            path='/services' />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/beach.jpg'
                            text='Enjoy football on Top of the Himilayan Mountains'
                            label='Entertainment'
                            path='/services' />
                        <CardItem
                            src='images/street.jpg'
                            text='Experience the bustling streets of England'
                            label='Culture'
                            path='/services' />
                        <CardItem
                            src='images/jungle.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Nature'
                            path='/services' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards