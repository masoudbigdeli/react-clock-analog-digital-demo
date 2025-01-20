import { useCallback, useMemo, useState } from 'react';
import Clock from 'clock-analog-digital-react';
import { ClockProps } from './models/clockInterfaces';
import { RenderHtmlComponent, generatePropsString, generatePropsStringWithoutStyle, isAnalogClockProps, isDigitalClockProps } from './utils/clock-utils';
import AppWrapper, { ClockAndCodeWrapper, ClockWrapper, CodeCopyButton, CodeViewWrapper, InstructionsWrapper, PropertiesInnerWrapper, PropertiesWrapper, TopRightContainer } from './styles/app';
import PropertySelect from './components/property-select';
import PropertyButton from './components/property-button';
import { analogPropertyButtonData, analogPropertySelectData, digitalPropertyButtonData, digitalPropertySelectData } from './data/index.tsx';

function App() {
  const [propertiesList, setPropertiesList] = useState<
    Array<{ title: keyof ClockProps; value: any, propType: string }>
  >([{ title: 'clockMode', value: 'analog', propType: "option" }]);
  const [copied, setCopied] = useState(false);

  const resetPropsList = useCallback(() => {
    setPropertiesList((prevPropertiesList) => {
      if (prevPropertiesList.find((prop) => prop.value === 'analog')) {
        return [{ title: 'clockMode', value: 'analog', propType: "option" }];
      }
      if (prevPropertiesList.find((prop) => prop.value === 'digital')) {
        return [{ title: 'clockMode', value: 'digital', propType: "option" }];
      }
      return [{ title: 'clockMode', value: 'analog', propType: "option" }];
    });
  }, []);
  

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
    if (property.title.includes('Color')) {
      acc.colorConfiguration = acc.colorConfiguration || {};
  
      (acc.colorConfiguration as Record<string, any>)[property.title] = property.value;
    } else {
      acc[property.title] = property.value;
    }
  
    return acc;
  }, {} as Partial<ClockProps>);
  
  const addPropertyHandle = useCallback(
    (property: { title: string, propType: string, value: any }) => {
      const title = property.title as keyof ClockProps;
      setPropertiesList((prevPropertiesList) => {
        const updatedPropertiesList = title === 'clockMode'
          ? [{ title, value: property.value, propType: 'option' }] 
          : prevPropertiesList.find((prop) => prop.title === title) && property.propType !== 'option'
            ? [...prevPropertiesList.filter((prop) => prop.title !== title)]
            : [...prevPropertiesList.filter((prop) => prop.title !== title), { title, value: property.value, propType: property.propType }];
        return updatedPropertiesList;
      });
    },
    []
  );
  

  const codeToCopy = useMemo(() => `<Clock ${generatePropsStringWithoutStyle(propertiesList)} \n/>`, [propertiesList])
  const PropsString = useMemo(() => generatePropsString(propertiesList), [propertiesList])

  return (
    <AppWrapper>
      <ClockAndCodeWrapper>
        <ClockWrapper>
          {isAnalogClockProps(dynamicProps) && <Clock {...dynamicProps} />}
          {isDigitalClockProps(dynamicProps) && <Clock {...dynamicProps} />}
        </ClockWrapper>
        <TopRightContainer>
          <InstructionsWrapper>
            <div className='text'>Install package: <span style={{ fontWeight: 600 }}>npm i clock-analog-digital-react</span></div>
            <div className='text'>Import in your project: <span style={{ fontWeight: 600 }}>import Clock from 'clock-analog-digital-react'</span></div>
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
              { optionName: 'analog', optionValue: 'analog'},
              { optionName: 'digital', optionValue: 'digital'},
            ]}
          />
          <PropertyButton
            key='hasAlarm' 
            title='has alarm'
            propertyKey='hasAlarm'
            addProperty={addPropertyHandle}
            propertiesList={propertiesList}
            toggleValue={(currentValue) => (currentValue ? undefined : true)}
          />
          {dynamicProps.clockMode === 'analog' && (
            <>
              {analogPropertySelectData.map((property) => (
                <PropertySelect
                  key={property.title}  
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