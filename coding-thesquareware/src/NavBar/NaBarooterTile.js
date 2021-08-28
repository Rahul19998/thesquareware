import { Button } from 'react-bootstrap'
import React from 'react'
import housePng from '../assets/house 1.png'

const NaBarooterTile = () => {
    return (
        <div className="footerTile">
            <div className="smalltiletext">Find your <br/>best house</div>
            <img src={housePng} alt="" style={{width:109, height: 109}}/>
            <Button className="mt-4 text-dark" style={{backgroundColor:"white", fontWeight:700, borderRadius: "16px"}}>Search</Button>
        </div>
    )
}

export default NaBarooterTile
