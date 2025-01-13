import { ClockProps } from '../models/clockInterfaces';

export const isAnalogClockProps = (props: Partial<ClockProps>): props is ClockProps => {
  return props.clockMode === 'analog';
};

export const isDigitalClockProps = (props: Partial<ClockProps>): props is ClockProps => {
  return props.clockMode === 'digital';
};

export const generatePropsString = (propertiesList: Array<{ title: string; value: any }>) => {
  return propertiesList
    .map((property) =>
      property.title === 'UserPrimaryTicksComponent' || property.title === 'UserMajorTicksComponent' || property.title === "clockLogoSrcAndOffset"
        ? `${property.title}={<Component />}`
        : `${property.title}= ${typeof property.value === 'string' ? `'` : '{'}${property.value}${typeof property.value === 'string' ? `'` : '}'}`
    )
    .join(' ');
};
