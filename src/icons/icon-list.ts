import ArrowDown from './icons-components/arrow-down'
import ArrowUp from './icons-components/arrow-up'
import Clock from './icons-components/clock'

const iconList = {
    arrowDown: ArrowDown,
    arrowUp: ArrowUp,
    clock: Clock,
}

export default iconList

export type IconName = keyof typeof iconList