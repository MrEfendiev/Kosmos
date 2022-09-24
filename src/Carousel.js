import React, { useEffect, useState, Children, cloneElement } from 'react'
import './Carousel.css';
import './App.css';

const PAGE__WIDTH = 1300;

export const Carousel = ({children}) => {

    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState([])

    const handleLeftArrowClick = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset + PAGE__WIDTH


            console.log(newOffset)

            return Math.min(newOffset, 0)
        })

    }

    const handleRightArrowClick = () => {
        console.log('handleRightArrowClick')

        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE__WIDTH

            const maxOffset = -(PAGE__WIDTH * (pages.length - 1))

            console.log(newOffset, maxOffset)
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        maxnWidth: `${PAGE__WIDTH}px`,
                        minWidth: `${PAGE__WIDTH}px`,
                    },
                } )
            })
        )
    }, [])

  return (
    <div className='main-container'>

              
            <div className='aroow-block'>
                    <div className='aroow' onClick={handleLeftArrowClick}></div>
                 </div>  
        <div className='window'>
             
            <div className='all-items-container' 
            style={{
                transform: `translateX(${offset}px)`,
            }}>
               
             
          
                {
                pages

                
                }

            </div>
           
        </div>
        <div className='next-block'>
                <div className='next' onClick={handleRightArrowClick}></div>
            </div>
    </div>
  )
}

export default Carousel;
