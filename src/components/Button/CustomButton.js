import React from 'react'
import { Button } from '@material-ui/core'
import './Button.css'

const CustomButton = ({ text, icon, style }) => {
    return (
        <div>
            <Button className='custom_btn' style={style} endIcon={icon ? (<div className="btn_icon_container">{icon}</div>) : null}>
                <span className='btn_text'>{text}</span>
            </Button>
        </div>
    )
}

export default CustomButton;
