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
    paddingTop: '2rem',
    marginBottom: '15rem'
})

export default AppWrapper

export const ClockWrapper = styled.div({
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '23rem',
    maxWidth: '23rem',
    minWidth: '23rem',
    minHeight: '23rem'
})

export const CodeViewWrapper = styled.div({
    boxSizing: 'border-box',
    marginTop: '2rem',
    padding: '2rem',
    borderRadius: '1.5rem',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '1.5rem',
    width: '70%',
    minWidth: '25rem',
    maxWidth: '70%',
    height: '10rem',
    minHeight: '10rem',
    maxHeight: '10rem',
})

export const PropertiesWrapper = styled.div({
    boxSizing: 'border-box',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    paddingInline: '2rem',
    marginTop: '1.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem',
    justifyContent: 'flex-start',
    alignItems: 'center',
})

export const PropertyContainer = styled.div({
    boxSizing: 'border-box',
    width: '32.69%',
    minWidth: '32.69%',
    maxWidth: '32.69%',
    minHeight: '5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',
    marginBottom: '0.7rem',
    '> .title': {
        fontSize: '1.2rem',
        fontWeight: 500,
        color: 'black'
    }

})

export const PropertyWrapper = styled.div({
    boxSizing: 'border-box',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    border: '1px solid #989a9c',
    borderRadius: '2rem',
    fontSize: '1.2rem',
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
        top: '4.2rem',
        left: 0,
        borderRadius: '2rem',
        backgroundColor: 'transparent',
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
        paddingBlock: '1.2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(242, 244, 247)',
        borderRadius: '2rem',
        border: '1px solid #bbbdbf',
        fontSize: '1.2rem',
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
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    border: '1px solid #989a9c',
    borderRadius: '2rem',
    fontSize: '1.2rem',
    fontWeight: 600,
    cursor: 'pointer'
})