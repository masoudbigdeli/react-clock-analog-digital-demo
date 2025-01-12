import { CSSProperties } from 'react'
import styled from '@emotion/styled'

export interface IconWrapperProps {
    size: '0.5'| '0.75' | '1' | '1.25' | '1.5' | '2' | '2.5' 
    rounded?: boolean
    style?: CSSProperties
}

const IconWrapper = styled.div<IconWrapperProps>(({ size, rounded, style }) => {
    return {
        boxSizing: 'border-box',
        width: `${size}rem`,
        maxWidth: `${size}rem`,
        height: `${size}rem`,
        maxHeight: `${size}rem`,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: rounded ? '50%' : undefined,
        ...style
    }
})

export default IconWrapper