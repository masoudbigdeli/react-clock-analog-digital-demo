import React, { useCallback, useState } from 'react';
import Clock from 'clock-analog-digital-react';
import AppWrapper, { ClockWrapper, CodeViewWrapper, PropertiesWrapper, PropertyContainer, PrpertyButtonWrapper } from "./styles/app";
import PropertySelect from './components/property-select';
import Icon from './icons/icon';
import { ClockProps, AnalogClockProps, DigitalClockProps } from './models/clockInterfaces';
import SmileLogo from '../public/smile-logo.png'

function App() {
  const [propertiesList, setPropertiesList] = useState<
    Array<{ title: keyof ClockProps; value: string | number | boolean | { cmp: React.ReactNode; offset: number } }>
  >([{ title: 'clockMode', value: 'analog' }]);

  // Convert propertiesList into an object
  const dynamicProps = propertiesList.reduce((acc, property) => {
    acc[property.title] = property.value as any;
    return acc;
  }, {} as Partial<ClockProps>);

  // Type guard to ensure `dynamicProps` matches `ClockProps`
  const isAnalogClockProps = (props: Partial<ClockProps>): props is AnalogClockProps => {
    return props.clockMode === 'analog';
  };

  const isDigitalClockProps = (props: Partial<ClockProps>): props is DigitalClockProps => {
    return props.clockMode === 'digital';
  };

  // Handle adding properties, including complex objects
  const addPropertyHandle = useCallback(
    (property: { title: string; value: string | number | boolean | { cmp: React.ReactNode; offset: number } }) => {
      const title = property.title as keyof ClockProps;
      setPropertiesList((prevPropertiesList) => {
        const updatedPropertiesList = prevPropertiesList.filter((prop) => prop.title !== title);

        if (title === 'clockMode') {
          return [{ title, value: property.value }, ...updatedPropertiesList];
        }
  
        return [...updatedPropertiesList, { title, value: property.value }];
      });
    },
    [setPropertiesList]
  );
  

  // Generate JSX string for preview
  const PropsString = propertiesList
    .map((property) =>
      property.title === 'clockLogoSrcAndOffset'
        ? `${property.title}={{ cmp: <Component />, offset: ${(property.value as { offset: number }).offset
        } }} `
        : `${property.title}= ${typeof property.value === 'string' ? "'" : '{'
        }${property.value}${typeof property.value === 'string' ? "'" : '}'} `
    )
    .join(' ');

  return (
    <AppWrapper>
      <ClockWrapper>
        {isAnalogClockProps(dynamicProps) && <Clock {...dynamicProps} />}
        {isDigitalClockProps(dynamicProps) && <Clock {...dynamicProps} />}
      </ClockWrapper>
      <CodeViewWrapper>
        {`<Clock ${PropsString} />`}
      </CodeViewWrapper>
      <PropertiesWrapper>
        {/* Other Properties */}
        <PropertySelect
          title="clock mode"
          addProperty={addPropertyHandle}
          optionsList={[
            { optionName: 'analog', optionValue: 'analog', hasIcon: false },
            { optionName: 'digital', optionValue: 'digital', hasIcon: true, icon: Icon, iconName: 'attachment' },
          ]}
        />
        <PropertySelect
          title="analog color theme mode"
          addProperty={addPropertyHandle}
          optionsList={[
            { optionName: 'LIGHT', optionValue: 'LIGHT', hasIcon: false },
            { optionName: 'DARK', optionValue: 'DARK', hasIcon: false },
            { optionName: 'BLUE_DARK', optionValue: 'BLUE_DARK', hasIcon: false },
            { optionName: 'RED_DARK', optionValue: 'RED_DARK', hasIcon: false },
            { optionName: 'AUTUMN', optionValue: 'AUTUMN', hasIcon: false },
          ]}
        />
        <PropertySelect
          title="clock border thikness"
          addProperty={addPropertyHandle}
          optionsList={[
            { optionName: 'Thin', optionValue: 0.5, hasIcon: false },
            { optionName: 'Medium', optionValue: 1, hasIcon: false },
            { optionName: 'Thick', optionValue: 2, hasIcon: false },
          ]}
        />
        <PropertySelect
          title="clock numbers type"
          addProperty={addPropertyHandle}
          optionsList={[
            { optionName: 'ENGLISH', optionValue: 'ENGLISH', hasIcon: false },
            { optionName: 'ROMAN', optionValue: 'ROMAN', hasIcon: false },
          ]}
        />
        {/* Special Handling for clockLogoSrcAndOffset */}
        <PropertyContainer>
          <label>
            clock logo component
          </label>
          <PrpertyButtonWrapper
            onClick={() => {
              if (propertiesList.find(prop => prop.title === 'clockLogoSrcAndOffset')) {
                setPropertiesList([...propertiesList.filter(prop => prop.title !== 'clockLogoSrcAndOffset')])
              } else {
                addPropertyHandle({
                  title: 'clockLogoSrcAndOffset',
                  value: { cmp: <img src={SmileLogo} width='100px' alt='logo' />, offset: 110 },
                })
              }}}
          >
            Add / Remove Logo
          </PrpertyButtonWrapper>
        </PropertyContainer>
        <PropertyContainer>
          <label>
          has primary ticks
          </label>
          <PrpertyButtonWrapper
            onClick={() => {
              if (propertiesList.find(prop => prop.title === 'hasPrimaryTicks')) {
                setPropertiesList([...propertiesList.filter(prop => prop.title !== 'hasPrimaryTicks')])
              } else {
                addPropertyHandle({
                  title: 'hasPrimaryTicks',
                  value: false,
                })
              }}}
          >
            show / hide Primary Ticks
          </PrpertyButtonWrapper>
        </PropertyContainer>
        <PropertyContainer>
          <label>
          has major ticks
          </label>
          <PrpertyButtonWrapper
            onClick={() => {
              if (propertiesList.find(prop => prop.title === 'hasMajorTicks')) {
                setPropertiesList([...propertiesList.filter(prop => prop.title !== 'hasMajorTicks')])
              } else {
                addPropertyHandle({
                  title: 'hasMajorTicks',
                  value: false,
                })
              }}}
          >
            show / hide Major Ticks
          </PrpertyButtonWrapper>
        </PropertyContainer>
        <PropertyContainer>
          <label>
          has minor ticks
          </label>
          <PrpertyButtonWrapper
            onClick={() => {
              if (propertiesList.find(prop => prop.title === 'hasMinorTicks')) {
                setPropertiesList([...propertiesList.filter(prop => prop.title !== 'hasMinorTicks')])
              } else {
                addPropertyHandle({
                  title: 'hasMinorTicks',
                  value: false,
                })
              }}}
          >
            show / hide Minor Ticks
          </PrpertyButtonWrapper>
        </PropertyContainer>
        <PropertyContainer>
          <label>
          has primary numbers
          </label>
          <PrpertyButtonWrapper
            onClick={() => {
              if (propertiesList.find(prop => prop.title === 'hasPrimaryNumbers')) {
                setPropertiesList([...propertiesList.filter(prop => prop.title !== 'hasPrimaryNumbers')])
              } else {
                addPropertyHandle({
                  title: 'hasPrimaryNumbers',
                  value: false,
                })
              }}}
          >
            show / hide Primary Numbers
          </PrpertyButtonWrapper>
        </PropertyContainer>
        <PropertyContainer>
          <label>
          has major numbers
          </label>
          <PrpertyButtonWrapper
            onClick={() => {
              if (propertiesList.find(prop => prop.title === 'hasMajorNumbers')) {
                setPropertiesList([...propertiesList.filter(prop => prop.title !== 'hasMajorNumbers')])
              } else {
                addPropertyHandle({
                  title: 'hasMajorNumbers',
                  value: false,
                })
              }}}
          >
            show / hide Major Numbers
          </PrpertyButtonWrapper>
        </PropertyContainer>
      </PropertiesWrapper>
    </AppWrapper >
  );
}

export default App;
