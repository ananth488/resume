import React from 'react'

const Skill = ({value}) => {
    return (
        // <div>Skill</div>
        <div className='skill' style={{
             borderRadius: "10px", backgroundColor: "rgb(23, 104, 77)",
             borderLeft:"1px solid rgb(23, 104, 77)",
        color: "white",
        display: "inline",
        }}>
            <span className='skill' style={{
              paddingLeft: value+'%',
            }} />
            <span className='percentage'>{value}%</span>
        </div>

    )
}

export default Skill
