import React from 'react'
import Content from "../Content/Content.jsx"

export default function Section(props) {
    console.log(props.section)
    return (
        <div>
            {props.section && props.section.map((item) => {
                return (
                    <div>
                        <h5>{item.name}</h5>
                        <Content content={item.content}/>
                    </div>
                )
            })}
        </div>
    )
}
