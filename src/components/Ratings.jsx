import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

const Ratings=(props)=> {
    console.log(props)
    

    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)


     const handleClick = value => {
         props.setCurrentValue(value)
       }
     
    
      const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
      };
    
      const handleMouseLeave = () => {
        setHoverValue(undefined)
      }

return (
    <div className="container">
      <div className="stars">
          
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || props.setCurrentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      
    </div>
  );
};


export default Ratings;