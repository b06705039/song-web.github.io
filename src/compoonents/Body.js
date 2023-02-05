import React from 'react'
import Styled from 'styled-components'

import Navbar from './Nav'

const StyledBody = Styled.div`
    z-index: 2;
    display: inline-flex;
`

const Body = () => {


    return (
        <StyledBody>
            <Navbar />
        </StyledBody>
    )
}

export default Body;