import React from 'react'

export default function Content(props) {
    console.log(props.content)
    return (
        <div>
            {props.content && props.content.map((item) => {
                return (
                    <div>
                        <img src={item.image[0]}/>
                        <h6>{item.name}</h6>
                        <p>{item.detail}</p>
                    </div>
                )
            })}
        </div>
    )
}
