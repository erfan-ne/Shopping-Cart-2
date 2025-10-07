import React from 'react'

export default function Social () {


    let {href, img} = this.props
    return (
        <li>
            <a href={href} target="_blank">
                <img src={img} alt='social'/>
            </a>
        </li>
    )
}
