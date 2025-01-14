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
    minHeight: '20rem',
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
    width: '20rem',
    maxWidth: '20rem',
    minWidth: '15rem',
    minHeight: '15rem',
})

export const TopRightContainer = styled.div({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    width: '35rem',
    minWidth: '18rem',
    maxWidth: '35rem',
    height: '20rem',
    minHeight: '20rem',
    maxHeight: '20rem',

})

export const InstructionsWrapper = styled.div({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    height: '47%',
    minHeight: '47%',
    maxHeight: '47%',
    backgroundColor: '#dfe6f5',
    paddingInline: '1.25rem',
    paddingBlock: '1rem',
    borderRadius: '1.5rem',
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
        width: '0.2rem',
        backgroundColor: 'transparent',
        borderRadius: '0.5rem',
        paddingRight: '10rem'
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
        borderRadius: '0.5rem',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'transparent',
        borderRadius: '0.5rem',
    },
    ':hover': {
        '&::-webkit-scrollbar': {
            width: '0.2rem',
            backgroundColor: 'transparent',
            height: '95%',
            borderRadius: '0.5rem',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
            height: '95%',
            borderRadius: '0.5rem',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'grey',
            borderRadius: '0.5rem',
        },
    },
    '> .text':{
        fontSize: '0.9rem',
        fontWeight: 400,
        color: '#0e1d3b'
    }
})

export const CodeViewWrapper = styled.pre({
    boxSizing: 'border-box',
    padding: '1.5rem',
    paddingBottom: '2.5rem',
    borderRadius: '1.5rem',
    backgroundColor: '#0b0336',
    color: 'white',
    fontSize: '0.875rem',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    height: '51%',
    minHeight: '51%',
    maxHeight: '51%',
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
        width: '0.2rem',
        backgroundColor: 'transparent',
        borderRadius: '0.5rem',
        paddingRight: '10rem'
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
        borderRadius: '0.5rem',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'transparent',
        borderRadius: '0.5rem',
    },
    ':hover': {
        '&::-webkit-scrollbar': {
            width: '0.2rem',
            backgroundColor: 'transparent',
            height: '95%',
            borderRadius: '0.5rem',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
            height: '95%',
            borderRadius: '0.5rem',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'grey',
            borderRadius: '0.5rem',
        },
    }
})

interface CodeCopyButtonProps {
    right : number
}

export const CodeCopyButton = styled.div<CodeCopyButtonProps>(({right}) => {
    return {
        boxSizing: 'border-box',
        width: '3.5',
        minWidth: '3.5rem',
        maxWidth: '3.5',
        borderRadius: '2rem',
        position: 'absolute',    
        top: '17.8rem',
        right: `${right}rem`,
        height: '2rem',
        backgroundColor: '#113680',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        zIndex: 4,
        fontSize:'0.7rem',
        '&:hover': {
            backgroundColor: '#1548ad',
    
        }
    }

})

export const PropertiesWrapper = styled.div({
    boxSizing: 'border-box',
    width: '90%',
    minWidth: '90%',
    maxWidth: '90%',
    maxHeight: '100vh',
    paddingTop: '24rem',
})

export const PropertiesInnerWrapper = styled.div({
    boxSizing: 'border-box',
    width: '90%',
    minWidth: '90%',
    maxWidth: '90%',
    marginInline: 'auto',
    height: 'calc(100vh - 32rem)',
    maxHeight: 'calc(100vh - 32rem)',
    minHeight: 'calc(100vh - 32rem)',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '0.2rem',
        backgroundColor: 'transparent',
        borderRadius: '0.5rem',
        paddingRight: '10rem'
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
        borderRadius: '0.5rem',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'transparent',
        borderRadius: '0.5rem',
    },
    ':hover': {
        '&::-webkit-scrollbar': {
            width: '0.2rem',
            backgroundColor: 'transparent',
            height: '95%',
            borderRadius: '0.5rem',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
            height: '95%',
            borderRadius: '0.5rem',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'grey',
            borderRadius: '0.5rem',
        },
    }
})

export const PropertyContainer = styled.div({
    boxSizing: 'border-box',
    width: '15rem',
    minWidth: '15rem',
    maxWidth: '15rem',
    minHeight: '3rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '> .title': {
        fontSize: '0.875rem',
        fontWeight: 500,
        color: 'black',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
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



export const PropertyOptionWrapper = styled.div({

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
    width: '15rem',
    minWidth: '15rem',
    maxWidth: '15rem',
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