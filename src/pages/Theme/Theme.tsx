import React, { useContext, useState } from 'react'
import Child from '../child/child'
import { ThemeContext, ThemeType } from '@/context/context'
import { Link} from 'react-router-dom'

const Theme = () => {
    const [theme, setTheme] = useState(ThemeType.red)

    return (
        <div>
            <Link to='/user'>我是Home</Link>
        </div>

    )
}

export default Theme