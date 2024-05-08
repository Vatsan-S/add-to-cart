import React from "react";
import { useState } from "react";


const Card = ({ price, star, strike, oldPrice, cardName, cartVal,setCartVal}) => {
    const [btnName, setBtnName] = useState(false);
    // let buttonClass = "btn btn-outline-danger mt-auto"
    
    const handleClick = ()=>{
        
            setBtnName(!btnName);
            
            if(!btnName){
                // console.log("added")
                setCartVal(cartVal = 1)
                
            }
            else{
                setCartVal(cartVal = 0)
                // buttonClass = "btn btn-outline-danger mt-auto";
                
            }
    }
    
  return (
    
      <div className="col mb-5">
        <div className="card h-100">
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{cardName}</h5>
              {star && (<div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="fa fa-star"></div>
                                        <div className="fa fa-star"></div>
                                        <div className="fa fa-star"></div>
                                        <div className="fa fa-star"></div>
                                        <div className="fa fa-star"></div>
                                    </div>)}
              {strike? (<><del>{oldPrice}</del><span>{price}</span></>  ):price}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center" >
              <button className={btnName?"btn btn-outline-danger mt-auto":"btn btn-outline-dark mt-auto"} onClick={handleClick}>
                {btnName? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Card;
