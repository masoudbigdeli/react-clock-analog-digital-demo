import { ClockProps } from '../models/clockInterfaces'

export const isAnalogClockProps = (props: Partial<ClockProps>): props is ClockProps => {
  return props.clockMode === 'analog'
}

export const isDigitalClockProps = (props: Partial<ClockProps>): props is ClockProps => {
  return props.clockMode === 'digital'
}

export const generatePropsString = (propertiesList: Array<{ title: string, value: any }>) => {
  const css = `<style>
      .key {
        color: #36e7f7; 
        font-weight: bold;
      }
      .value {
        color: #e69c09; 
      }
    </style>`
  const propsString = propertiesList
    .map((property) =>
      property.title === 'UserPrimaryTicksComponent' 
        || property.title === 'UserMajorTicksComponent' 
        || property.title === "UserMinorTicksComponent"
        || property.title === "PrimaryNumbersComponent"
        || property.title === "MajorNumbersComponent"
        || property.title === "ClockCenterComponent"
        || property.title === "digitalClockLogoComponent"
        ? `\n\t<span class="key">${property.title}</span> = <span class="value">{&lt${property.title} /&gt}</span>`
        : property.title === "clockLogoSrcAndOffset" 
        ? `\n\t<span class="key">${property.title}</span> = <span class="value">{{cmp : &ltLogoComponent /&gt, offset: {number}}}</span>`
        : `\n\t<span class="key">${property.title}</span> = <span class="value">${typeof property.value === 'string' ? `'${property.value}'` : `{${property.value}}`}</span>`
    )
    .join('')
    return css + propsString
}

export const generatePropsStringWithoutStyle = (propertiesList: Array<{ title: string, value: any }>) => {
  const propsString = propertiesList
    .map((property) =>
      property.title === 'UserPrimaryTicksComponent' 
        || property.title === 'UserMajorTicksComponent' 
        || property.title === "UserMinorTicksComponent"
        || property.title === "PrimaryNumbersComponent"
        || property.title === "MajorNumbersComponent"
        || property.title === "ClockCenterComponent" 
        || property.title === "digitalClockLogoComponent"
        ? `\n\t${property.title} = {<${property.title} />}`
        : `\n\t${property.title} = ${typeof property.value === 'string' ? `'${property.value}'` : `{${property.value}}`}`

    )
    .join('')
    return propsString
}
