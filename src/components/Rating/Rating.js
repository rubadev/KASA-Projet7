import './Rating.css'
import {IoStarSharp} from "react-icons/io5";

const Rating = (props) => {
    const rating = props.rating;
    const range = [1,2,3,4,5];
    
  return (

    <div className='RatingIcons'>
        {range.map((rangeItem,index)=>
                rating >= rangeItem ? 
                <IoStarSharp key={index} style={{color:'#ff6060'}}/>:<IoStarSharp key={index} style={{color:'#E3E3E3'}}/>
            )}
    </div>
  )
}

export default Rating