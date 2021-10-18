import React from "react";

const brandCard=(props)=>{
    const {logo,clicked} = props

    return(
<img onClick={clicked} src={logo} alt="brand"/>
    )
}

export default brandCard