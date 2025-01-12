import { FC } from 'react'
import { IconProps } from '../icon'

const NotificationIcon: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0195 19.0596C15.0195 20.7096 13.6695 22.0596 12.0195 22.0596C11.1995 22.0596 10.4395 21.7196 9.89953 21.1796C9.35953 20.6396 9.01953 19.8796 9.01953 19.0596" stroke="#1AB394" strokeWidth="1.5" strokeMiterlimit="10" />
            <path d="M18.0206 8.91V11.8C18.0206 12.41 18.2806 13.34 18.5806 13.86L19.7306 15.77C20.3906 16.87 19.8606 18.3 18.6506 18.7C14.3406 20.14 9.69058 20.14 5.38058 18.7C4.08058 18.26 3.59058 16.95 4.30058 15.77L5.45058 13.86C5.76058 13.34 6.02058 12.41 6.02058 11.8V8.91C6.02058 5.6 8.71058 2.91 12.0206 2.91C12.693 2.91 13.3404 3.0221 13.9452 3.22852" stroke="#3B3B3B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M13.8699 3.2C13.5599 3.11 13.2399 3.04 12.9099 3C11.9499 2.88 11.0299 2.95 10.1699 3.2C10.4599 2.46 11.1799 1.94 12.0199 1.94C12.8599 1.94 13.5799 2.46 13.8699 3.2Z" stroke="#3B3B3B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="17.0449" cy="5.45001" r="2.25" fill="#DC362E" />
        </svg>
    )
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0195 19.0596C15.0195 20.7096 13.6695 22.0596 12.0195 22.0596C11.1995 22.0596 10.4395 21.7196 9.89953 21.1796C9.35953 20.6396 9.01953 19.8796 9.01953 19.0596" stroke="#1AB394" strokeWidth="1.5" strokeMiterlimit="10" />
            <path d="M12.0206 2.91C8.71058 2.91 6.02058 5.6 6.02058 8.91V11.8C6.02058 12.41 5.76058 13.34 5.45058 13.86L4.30058 15.77C3.59058 16.95 4.08058 18.26 5.38058 18.7C9.69058 20.14 14.3406 20.14 18.6506 18.7C19.8606 18.3 20.3906 16.87 19.7306 15.77L18.5806 13.86C18.2806 13.34 18.0206 12.41 18.0206 11.8V8.91C18.0206 5.61 15.3206 2.91 12.0206 2.91Z" stroke="#3B3B3B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M13.8699 3.2C13.5599 3.11 13.2399 3.04 12.9099 3C11.9499 2.88 11.0299 2.95 10.1699 3.2C10.4599 2.46 11.1799 1.94 12.0199 1.94C12.8599 1.94 13.5799 2.46 13.8699 3.2Z" stroke="#3B3B3B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default NotificationIcon