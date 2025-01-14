import { useCallback, useMemo, useState } from 'react';
import Clock from 'clock-analog-digital-react';
import { ClockProps } from './models/clockInterfaces';
import { generatePropsString, generatePropsStringWithoutStyle, isAnalogClockProps, isDigitalClockProps } from './utils/clock-utils';
import AppWrapper, { ClockAndCodeWrapper, ClockWrapper, CodeCopyButton, CodeViewWrapper, InstructionsWrapper, PropertiesInnerWrapper, PropertiesWrapper, TopRightContainer } from './styles/app';
import PropertySelect from './components/property-select';
import PropertyButton from './components/property-button';
import { analogPropertyButtonData, analogPropertySelectData, digitalPropertyButtonData, digitalPropertySelectData } from './data/index.tsx';

function App() {
  const [propertiesList, setPropertiesList] = useState<
    Array<{ title: keyof ClockProps; value: any, propType: "option" | "toggle" }>
  >([{ title: 'clockMode', value: 'analog', propType: "option" }]);
  const [copied, setCopied] = useState(false);

  const resetPropsList = useCallback(() => {
    setPropertiesList((prevPropertiesList) => {
      if(prevPropertiesList.find(prop => prop.value === 'analog')) return [{ title: 'clockMode', value: 'analog', propType: "option" }]
      if(prevPropertiesList.find(prop => prop.value === 'digital')) return [{ title: 'clockMode', value: 'digital', propType: "option" }]
    })
  },[])

  const hanldeCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); 
    } catch (err) {
      console.error('Failed to copy text:', err);
      setCopied(false);
    }
  }

  const dynamicProps = propertiesList.reduce((acc, property) => {
    acc[property.title] = property.value as any;
    return acc;
  }, {} as Partial<ClockProps>);

  const addPropertyHandle = useCallback(
    (property: { title: string, propType: 'option' | 'toggle', value: any }) => {
      const title = property.title as keyof ClockProps;
      setPropertiesList((prevPropertiesList) => {
        const updatedPropertiesList = title === 'clockMode'
          ? [{ title, value: property.value }]
          : prevPropertiesList.find((prop) => prop.title === title) && property.propType !== 'option'
            ? [...prevPropertiesList.filter((prop) => prop.title !== title)]
            : [...prevPropertiesList.filter((prop) => prop.title !== title), { title, value: property.value }];
        return updatedPropertiesList;
      });
    },
    []
  );

  const codeToCopy = useMemo(() => `<Clock ${generatePropsStringWithoutStyle(propertiesList)} \n/>`, [propertiesList])
  const PropsString = useMemo(() => generatePropsString(propertiesList), [propertiesList])

  interface Props {
    htmlString: string;  // Make sure the type is string
  }
  
  const RenderHtmlComponent: React.FC<Props> = ({ htmlString }) => {
    if (typeof htmlString !== 'string') {
      console.error('htmlString is not a string!');
      return null;
    }
    return (<span dangerouslySetInnerHTML={{__html: htmlString,}}></span>
    );
  };
  
  

  return (
    <AppWrapper>
      <ClockAndCodeWrapper>
        <ClockWrapper>
          {isAnalogClockProps(dynamicProps) && <Clock {...dynamicProps} />}
          {isDigitalClockProps(dynamicProps) && <Clock {...dynamicProps} />}
        </ClockWrapper>
        <TopRightContainer>
        <InstructionsWrapper>
          <div className='text'>Install package: <span style={{fontWeight: 600}}>npm i clock-analog-digital-react</span></div>
          <div className='text'>Import in your project: <span style={{fontWeight: 600}}>import Clock from 'clock-analog-digital-react'</span></div>
          <div className='text'>Now use the package with desired props.</div>
          <div className='text'>You can select your custom properties from below list and copy and past configured Clock component into your code!</div>
        </InstructionsWrapper>
        <CodeViewWrapper>{'<Clock'}<RenderHtmlComponent htmlString={PropsString} /> 
        {'\n/>'}
        <CodeCopyButton onClick={resetPropsList} right={2}>Reset</CodeCopyButton>
        <CodeCopyButton onClick={hanldeCopyCode} right={5.7}>{copied ? 'Copied!' : 'Copy'}</CodeCopyButton>
        </CodeViewWrapper>

        </TopRightContainer>
      </ClockAndCodeWrapper>

      <PropertiesWrapper>
        <PropertiesInnerWrapper>
          <PropertySelect
            title="clock mode"
            addProperty={addPropertyHandle}
            optionsList={[
              { optionName: 'analog', optionValue: 'analog', hasIcon: false },
              { optionName: 'digital', optionValue: 'digital', hasIcon: false },
            ]}
          />
          {dynamicProps.clockMode === 'analog' && (
            <>
              {analogPropertySelectData.map((property) => (
                <PropertySelect
                  key={property.title}  // Using the title as the unique key
                  title={property.title}
                  addProperty={addPropertyHandle}
                  optionsList={property.optionsList}
                />
                ))
              }
              {analogPropertyButtonData.map((property) => (
                <PropertyButton
                  key={property.propertyKey}  // Using propertyKey as the unique key
                  title={property.title}
                  propertyKey={property.propertyKey}
                  addProperty={addPropertyHandle}
                  propertiesList={propertiesList}
                  toggleValue={property.toggleValue}
                />
                ))
                }
            </>
          )}

          {dynamicProps.clockMode === 'digital' && (
            <>
      {digitalPropertySelectData.map((property) => (
        <PropertySelect
          key={property.title}  // Using title as the unique key
          title={property.title}
          addProperty={addPropertyHandle}
          optionsList={property.optionsList}
        />
      ))}
      {digitalPropertyButtonData.map((property) => (
        <PropertyButton
          key={property.propertyKey}  // Using propertyKey as a unique key
          title={property.title}
          propertyKey={property.propertyKey}
          addProperty={addPropertyHandle}
          propertiesList={propertiesList}
          toggleValue={property.toggleValue}
        />
      ))}
            </>
          )}
        </PropertiesInnerWrapper>
      </PropertiesWrapper>
    </AppWrapper>
  );
}

export default App;