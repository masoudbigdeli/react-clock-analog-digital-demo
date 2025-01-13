import styled from "@emotion/styled"

const AppWrapper = styled.div({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    position: 'relative'
})

export default AppWrapper

export const ClockAndCodeWrapper = styled.div({
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: '1rem',
    paddingBottom: '1rem',
    alignItems: 'center',
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    minHeight: '28rem',
    position: 'absolute',
    top: 0,
    backgroundColor: 'white',
    zIndex: 3
})

export const ClockWrapper = styled.div({
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '28rem',
    maxWidth: '28rem',
    minWidth: '15rem',
    minHeight: '15rem',
})

export const CodeViewWrapper = styled.div({
    boxSizing: 'border-box',
    padding: '2rem',
    borderRadius: '1.5rem',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '0.875rem',
    width: '35rem',
    minWidth: '18rem',
    maxWidth: '35rem',
    height: '28rem',
    minHeight: '28rem',
    maxHeight: '28rem',
})

export const PropertiesWrapper = styled.div({
    boxSizing: 'border-box',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    maxHeight: '100vh',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
    paddingTop: '32rem',
    overflowY: 'auto'
})

export const PropertyContainer = styled.div({
    boxSizing: 'border-box',
    width: '20rem',
    minWidth: '18rem',
    maxWidth: '35rem',
    minHeight: '3rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',
    '> .title': {
        fontSize: '0.875rem',
        fontWeight: 500,
        color: 'black'
    }

})

export const PropertyWrapper = styled.div({
    boxSizing: 'border-box',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    border: '1px solid #989a9c',
    borderRadius: '2rem',
    fontSize: '0.875rem',
    fontWeight: 600,
    cursor: 'pointer'
})

interface PropertyDropDownWrapperProps {
    show: boolean
}

export const PropertyDropDownWrapper = styled.div<PropertyDropDownWrapperProps>(({ show }) => {
    return {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        height: 'max-ontent',
        minHeight: 'max-ontent',
        maxHeight: 'max-ontent',
        top: '2.2rem',
        left: 0,
        borderRadius: '1rem',
        padding: '0.25rem',
        backgroundColor: '#d2d4d6',
        zIndex: 2,
        display: show ? 'flex' : 'none',
        flexDirection: 'column',
        gap: '0.07rem'
    }
})

export interface PropertyOptionWrapperProps {
    hasIcon: boolean
}

export const PropertyOptionWrapper = styled.div<PropertyOptionWrapperProps>(({hasIcon}) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        paddingBlock: '0.3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(242, 244, 247)',
        borderRadius: '2rem',
        border: '1px solid #bbbdbf',
        fontSize: '0.875rem',
        fontWeight: 600
    }
})

export const SelectedOptionWrapper = styled.div({
        boxSizing: 'border-box',
        position: 'relative',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        fontWeight: 600
})

export const PrpertyButtonWrapper = styled.div({
    boxSizing: 'border-box',
    width: '20rem',
    minWidth: '18rem',
    maxWidth: '35rem',
    minHeight: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    border: '1px solid #989a9c',
    borderRadius: '2rem',
    fontSize: '0.875rem',
    fontWeight: 600,
    cursor: 'pointer',
    backgroundColor: '#ceeecc'
})