import React from 'react';
import Card from './Card';
import { useState } from "react";

const Products = ({cart, setCart}) => {
    const[cartVal1, setCartVal1]=useState(0)
    const[cartVal2, setCartVal2]=useState(0)
    const[cartVal3, setCartVal3]=useState(0)
    const[cartVal4, setCartVal4]=useState(0)
    const[cartVal5, setCartVal5]=useState(0)
    const[cartVal6, setCartVal6]=useState(0)
    const[cartVal7, setCartVal7]=useState(0)
    const[cartVal8, setCartVal8]=useState(0)

    setCart(cartVal1 + cartVal2 + cartVal3 + cartVal4 + cartVal5 + cartVal6 + cartVal7 + cartVal8)
    

    
    return (
        
            <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    
                        <Card price="$40.00 - $80.00" cartVal={cartVal1} setCartVal={setCartVal1} cardName="Fancy Product"/>
                        <Card price=" $18.00" cartVal={cartVal2} setCartVal={setCartVal2}  star={true} strike={true} oldPrice='$20.00' cardName="Special Item"/>
                        <Card price=" $25.00" cartVal={cartVal3} setCartVal={setCartVal3} strike={true} oldPrice='$50.00' cardName="Sale Item"/>
                        <Card price="$40.00" cartVal={cartVal4} setCartVal={setCartVal4} star={true} cardName="Popular Item"/>
                        <Card price=" $25.00" cartVal={cartVal5} setCartVal={setCartVal5} strike={true} oldPrice='$50.00' cardName="Sale Item"/>
                        <Card price="$120.00 - $280.00" cartVal={cartVal6} setCartVal={setCartVal6} cardName="Fancy Product"/>
                        <Card price=" $18.00" cartVal={cartVal7} setCartVal={setCartVal7} star={true} strike={true} oldPrice='$20.00' cardName="Special Item"/>
                        <Card price="$40.00" cartVal={cartVal8} setCartVal={setCartVal8} star={true} cardName="Popular Item"/>
                    
                    
                </div>
            </div>
        </section>
        
    );
};

export default Products;