import { FC } from 'react'
import { IconProps } from '../icon'

const TriangleError: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 7.5V11.6667" stroke="#DC362E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.0001 17.8417H4.95011C2.05844 17.8417 0.850107 15.775 2.25011 13.25L4.85011 8.56668L7.30011 4.16668C8.78344 1.49168 11.2168 1.49168 12.7001 4.16668L15.1501 8.57501L17.7501 13.2583C19.1501 15.7833 17.9334 17.85 15.0501 17.85H10.0001V17.8417Z" stroke="#DC362E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.99536 14.1667H10.0028" stroke="#DC362E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 7.5V11.6667" stroke="#DC362E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.0001 17.8417H4.95011C2.05844 17.8417 0.850107 15.775 2.25011 13.25L4.85011 8.56668L7.30011 4.16668C8.78344 1.49168 11.2168 1.49168 12.7001 4.16668L15.1501 8.57501L17.7501 13.2583C19.1501 15.7833 17.9334 17.85 15.0501 17.85H10.0001V17.8417Z" stroke="#DC362E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.99536 14.1667H10.0028" stroke="#DC362E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default TriangleError