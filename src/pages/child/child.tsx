import React from 'react'
import { Link } from 'react-router-dom'

function Child(){
    return (
        <div>
            <Link to='/home'>我是子组件</Link>
        </div>
    )
}

export default Child