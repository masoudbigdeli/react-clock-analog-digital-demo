import { FC } from 'react'
import { IconProps } from '../icon'

const BottomNavigationAccessesIcon: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4497 3.43334L10.8663 1.71667C10.3913 1.54167 9.61634 1.54167 9.14134 1.71667L4.55801 3.43334C3.67467 3.76667 2.95801 4.8 2.95801 5.74167V12.4917C2.95801 13.1667 3.39967 14.0583 3.94134 14.4583L8.52467 17.8833C9.33301 18.4917 10.658 18.4917 11.4663 17.8833L16.0497 14.4583C16.5913 14.05 17.033 13.1667 17.033 12.4917V5.74167C17.0413 4.8 16.3247 3.76667 15.4497 3.43334ZM12.8997 8.1L9.31634 11.6833C9.19134 11.8083 9.03301 11.8667 8.87467 11.8667C8.71634 11.8667 8.55801 11.8083 8.43301 11.6833L7.09967 10.3333C6.85801 10.0917 6.85801 9.69167 7.09967 9.45C7.34134 9.20834 7.74134 9.20834 7.98301 9.45L8.88301 10.35L12.0247 7.20834C12.2663 6.96667 12.6663 6.96667 12.908 7.20834C13.1497 7.45 13.1497 7.85834 12.8997 8.1Z" fill="#1AB394" />
        </svg>
    )
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.7418 1.85833L4.58346 3.425C3.62513 3.78333 2.8418 4.91666 2.8418 5.93333V12.125C2.8418 13.1083 3.4918 14.4 4.28346 14.9917L7.8668 17.6667C9.0418 18.55 10.9751 18.55 12.1501 17.6667L15.7335 14.9917C16.5251 14.4 17.1751 13.1083 17.1751 12.125V5.93333C17.1751 4.90833 16.3918 3.775 15.4335 3.41666L11.2751 1.85833C10.5668 1.6 9.43346 1.6 8.7418 1.85833Z" stroke="#3B3B3B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.5415 9.89166L8.88317 11.2333L12.4665 7.64999" stroke="#3B3B3B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default BottomNavigationAccessesIcon