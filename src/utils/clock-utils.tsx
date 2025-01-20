import { ClockProps } from '../models/clockInterfaces'

export const isAnalogClockProps = (props: Partial<ClockProps>): props is ClockProps => {
  return props.clockMode === 'analog'
}

export const isDigitalClockProps = (props: Partial<ClockProps>): props is ClockProps => {
  return props.clockMode === 'digital'
}

export const generatePropsString = (propertiesList: Array<{ title: string, value: any }>) => {
  const colorProps = propertiesList.filter(prop => prop.title.includes('Color'))
  const colorPropsRowString = colorProps.map((property) => `\n\t\t\t       <span class="inner-key">${property.title}</span> = <span class="value">'${property.value}'</span>`).join('')
  const colorConfigString = colorProps.length ? `\n\t<span class="key">colorConfiguration</span> = { ${colorPropsRowString} \n\t\t\t     }` : ''

  console.log('color config:', colorConfigString)

  const notColorProps = propertiesList.filter(prop => !prop.title.includes('Color'))
  console.log(propertiesList)
  const css = `<style>
      .inner-key {
        color: #86f787; 
        font-weight: bold;
      }
      .key {
        color: #36e7f7; 
        font-weight: bold;
      }
      .value {
        color: #e69c09; 
      }
    </style>`
  const notColorPropsString = notColorProps
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
          : property.title === "hasAlarm"
            ? `\n\t<span class="key">${property.title}</span> = <span class="value">{${property.value}}</span>` + `\n\t<span class="key">onAlarm</span> = <span class="value">{userOnAlarmFunctionDefinition}</span>`
            : `\n\t<span class="key">${property.title}</span> = <span class="value">${typeof property.value === 'string' ? `'${property.value}'` : `{${property.value}}`}</span>`
    )
    .join('')

  const propsString = notColorPropsString + colorConfigString
  return css + propsString
}

export const generatePropsStringWithoutStyle = (propertiesList: Array<{ title: string, value: any }>) => {
  const colorProps = propertiesList.filter(prop => prop.title.includes('Color'))
  const colorPropsRowString = colorProps.map((property) => `\n\t\t\t       ${property.title} : '${property.value}', \n`).join('')
  const colorConfigString = colorProps.length ? `\n\tcolorConfiguration= { ${colorPropsRowString} \t\t\t     }` : ''

  console.log('color config:', colorConfigString)

  const notColorProps = propertiesList.filter(prop => !prop.title.includes('Color'))

  const notColorPropsString = notColorProps
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
  console.log('all props:', notColorPropsString + colorConfigString)

  return notColorPropsString + colorConfigString
}

interface Props {
  htmlString: string;
}

export const RenderHtmlComponent: React.FC<Props> = ({ htmlString }) => {
  if (typeof htmlString !== 'string') {
    console.error('htmlString is not a string!');
    return null;
  }
  return (<span dangerouslySetInnerHTML={{ __html: htmlString, }}></span>
  );
};

export const capitalizeFirstLetter = (input: string): string => input ? input.charAt(0).toUpperCase() + input.slice(1) : input;