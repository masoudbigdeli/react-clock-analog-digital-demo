import React, { useCallback, useState } from 'react';
import Clock from 'clock-analog-digital-react';
import SmileLogo from '../public/smile-logo.png'

import { ClockProps, AnalogClockProps, DigitalClockProps } from './models/clockInterfaces';
import { generatePropsString, isAnalogClockProps, isDigitalClockProps } from './utils/clock-utils';
import AppWrapper, { ClockAndCodeWrapper, ClockWrapper, CodeViewWrapper, PropertiesInnerWrapper, PropertiesWrapper } from './styles/app';
import PropertySelect from './components/property-select';
import Icon from './icons/icon';
import PropertyButton from './components/property-button';

function App() {
  const [propertiesList, setPropertiesList] = useState<
    Array<{ title: keyof ClockProps; value: any, propType: "option" | "toggle" }>
  >([{ title: 'clockMode', value: 'analog', propType: "option" }]);

  const dynamicProps = propertiesList.reduce((acc, property) => {
    acc[property.title] = property.value as any;
    return acc;
  }, {} as Partial<ClockProps>);

  const addPropertyHandle = useCallback(
    (property: { title: string, propType: 'option' | 'toggle', value: any }) => {
      console.log('adding prop', property)
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

  const PropsString = generatePropsString(propertiesList);

  return (
    <AppWrapper>
      <ClockAndCodeWrapper>
        <ClockWrapper>
          {isAnalogClockProps(dynamicProps) && <Clock {...dynamicProps} />}
          {isDigitalClockProps(dynamicProps) && <Clock {...dynamicProps} />}
        </ClockWrapper>
        <CodeViewWrapper>
          {`<Clock ${PropsString} />`}
        </CodeViewWrapper>
      </ClockAndCodeWrapper>

      <PropertiesWrapper>
        <PropertiesInnerWrapper>
          <PropertySelect
            title="clock mode"
            addProperty={addPropertyHandle}
            optionsList={[
              { optionName: 'analog', optionValue: 'analog', hasIcon: false },
              { optionName: 'digital', optionValue: 'digital', hasIcon: true, icon: Icon, iconName: 'circleInfo' },
            ]}
          />

          {dynamicProps.clockMode === 'analog' && (
            <>
              <PropertySelect
                title="analog color theme mode"
                addProperty={addPropertyHandle}
                optionsList={[
                  { optionName: 'DARK', optionValue: 'DARK', hasIcon: false },
                  { optionName: 'LIGHT', optionValue: 'LIGHT', hasIcon: false },
                  { optionName: 'BLUE_DARK', optionValue: 'BLUE_DARK', hasIcon: false },
                  { optionName: 'RED_DARK', optionValue: 'RED_DARK', hasIcon: false },
                  { optionName: 'AUTUMN', optionValue: 'AUTUMN', hasIcon: false },
                ]}
              />
              <PropertySelect
                title="clock border thickness"
                addProperty={addPropertyHandle}
                optionsList={[
                  { optionName: 'Thick', optionValue: 2, hasIcon: false },
                  { optionName: 'Thin', optionValue: 0.5, hasIcon: false },
                  { optionName: 'Medium', optionValue: 1, hasIcon: false },
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
              <PropertySelect
                title="major numbers font size"
                addProperty={addPropertyHandle}
                optionsList={[
                  { optionName: 'eleven', optionValue: 0.11, hasIcon: false },
                  { optionName: 'fourteen', optionValue: 0.14, hasIcon: false },
                  { optionName: 'sixteen', optionValue: 0.16, hasIcon: false },
                  { optionName: 'eighteen', optionValue: 0.18, hasIcon: false },
                ]}
              />
              <PropertySelect
                title="primary numbers font size"
                addProperty={addPropertyHandle}
                optionsList={[
                  { optionName: 'eleven', optionValue: 0.11, hasIcon: false },
                  { optionName: 'fourteen', optionValue: 0.14, hasIcon: false },
                  { optionName: 'sixteen', optionValue: 0.16, hasIcon: false },
                  { optionName: 'eighteen', optionValue: 0.18, hasIcon: false },
                ]}
              />
              <PropertySelect
                title="primary numbers color"
                addProperty={addPropertyHandle}
                optionsList={[
                  { optionName: 'white', optionValue: '#FFFFFF', hasIcon: false },
                  { optionName: 'red', optionValue: '#e6272d', hasIcon: false },
                  { optionName: 'blue', optionValue: '#126ae6', hasIcon: false },
                  { optionName: 'green', optionValue: '#03fc62', hasIcon: false },
                ]}
              />
              <PropertySelect
                title="major numbers color"
                addProperty={addPropertyHandle}
                optionsList={[
                  { optionName: 'white', optionValue: '#FFFFFF', hasIcon: false },
                  { optionName: 'red', optionValue: 'cyan', hasIcon: false },
                  { optionName: 'blue', optionValue: '#126ae6', hasIcon: false },
                  { optionName: 'green', optionValue: '#03fc62', hasIcon: false },
                ]}
              />
              <PropertyButton
                title="clock logo component"
                propertyKey="clockLogoSrcAndOffset"
                addProperty={addPropertyHandle}
                propertiesList={propertiesList}
                toggleValue={(currentValue) =>
                  currentValue
                    ? undefined
                    : { cmp: <img src={SmileLogo} width='100px' alt='logo' />, offset: 110 }
                }
              />
              <PropertyButton
                title="has primary ticks"
                propertyKey="hasPrimaryTicks"
                addProperty={addPropertyHandle}
                propertiesList={propertiesList}
                toggleValue={(currentValue) =>
                  currentValue
                    ? undefined
                    : false
                }
              />
              <PropertyButton
                title="has major ticks"
                propertyKey="hasMajorTicks"
                addProperty={addPropertyHandle}
                propertiesList={propertiesList}
                toggleValue={(currentValue) =>
                  currentValue
                    ? undefined
                    : false
                }
              />
              <PropertyButton
                title="has minor ticks"
                propertyKey="hasMinorTicks"
                addProperty={addPropertyHandle}
                propertiesList={propertiesList}
                toggleValue={(currentValue) =>
                  currentValue
                    ? undefined
                    : false
                }
              />
              <PropertyButton
                title="has primary numbers"
                propertyKey="hasPrimaryNumbers"
                addProperty={addPropertyHandle}
                propertiesList={propertiesList}
                toggleValue={(currentValue) =>
                  currentValue
                    ? undefined
                    : false
                }
              />
              <PropertyButton
                title="has major numbers"
                propertyKey="hasMajorNumbers"
                addProperty={addPropertyHandle}
                propertiesList={propertiesList}
                toggleValue={(currentValue) =>
                  currentValue
                    ? undefined
                    : false
                }
              />
              <PropertyButton
                title="primary ticks component"
                propertyKey="UserPrimaryTicksComponent"
                addProperty={addPropertyHandle}
                propertiesList={propertiesList}
                toggleValue={(currentValue) =>
                  currentValue
                    ? undefined
                    : <div style={{ width: '10px', borderRadius: '50%', backgroundColor: '#facb48' }}></div>
                }
              />
              <PropertyButton
                title="major ticks component"
                propertyKey="UserMajorTicksComponent"
                addProperty={addPropertyHandle}
                propertiesList={propertiesList}
                toggleValue={(currentValue) =>
                  currentValue
                    ? undefined
                    : <div style={{ width: '7px', borderRadius: '50%', backgroundColor: '#8f2af5' }}></div>
                }
              />
              <PropertyButton
                title="minor ticks component"
                propertyKey="UserMinorTicksComponent"
                addProperty={addPropertyHandle}
                propertiesList={propertiesList}
                toggleValue={(currentValue) =>
                  currentValue
                    ? undefined
                    : <div style={{ width: '13px', height: '13px', borderRadius: '10px', backgroundColor: 'red' }}></div>
                }
              />
              <PropertyButton
                title="primary numbers component"
                propertyKey="PrimaryNumbersComponent"
                addProperty={addPropertyHandle}
                propertiesList={propertiesList}
                toggleValue={(currentValue) =>
                  currentValue
                    ? undefined
                    : <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#f0ed30' }}></div>
                }
              />
              <PropertyButton
                title="major numbers component"
                propertyKey="MajorNumbersComponent"
                addProperty={addPropertyHandle}
                propertiesList={propertiesList}
                toggleValue={(currentValue) =>
                  currentValue
                    ? undefined
                    : <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#e0560b' }}></div>
                }
              />
              <PropertyButton
                title="clock center component"
                propertyKey="ClockCenterComponent"
                addProperty={addPropertyHandle}
                propertiesList={propertiesList}
                toggleValue={(currentValue) =>
                  currentValue
                    ? undefined
                    : <div style={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#8f2af5' }}></div>
                }
              />
            </>
          )}

          {dynamicProps.clockMode === 'digital' && (
            <>
              <PropertySelect
                title="digital color theme mode"
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
                title="padding"
                addProperty={addPropertyHandle}
                optionsList={[
                  { optionName: 'zero', optionValue: 0, hasIcon: false },
                  { optionName: 'half', optionValue: 0.5, hasIcon: false },
                  { optionName: 'one', optionValue: 1, hasIcon: false },
                  { optionName: 'onePointTwo', optionValue: 1.2, hasIcon: false },
                ]}
              />
              <PropertyButton
                title="twenty four hours"
                propertyKey="twentyFourHours"
                addProperty={addPropertyHandle}
                propertiesList={propertiesList}
                toggleValue={(currentValue) => !currentValue}
              />
              <PropertySelect
                title="background color"
                addProperty={addPropertyHandle}
                optionsList={[
                  { optionName: 'white', optionValue: '#FFFFFF', hasIcon: false },
                  { optionName: 'red', optionValue: '#e6272d', hasIcon: false },
                  { optionName: 'blue', optionValue: '#126ae6', hasIcon: false },
                  { optionName: 'green', optionValue: '#03fc62', hasIcon: false },
                ]}
              />
              <PropertySelect
                title="active segment color"
                addProperty={addPropertyHandle}
                optionsList={[
                  { optionName: 'white', optionValue: '#FFFFFF', hasIcon: false },
                  { optionName: 'red', optionValue: '#e6272d', hasIcon: false },
                  { optionName: 'blue', optionValue: '#126ae6', hasIcon: false },
                  { optionName: 'green', optionValue: '#03fc62', hasIcon: false },
                ]}
              />
              <PropertySelect
                title="inactive segment color"
                addProperty={addPropertyHandle}
                optionsList={[
                  { optionName: 'white', optionValue: '#FFFFFF', hasIcon: false },
                  { optionName: 'red', optionValue: '#e6272d', hasIcon: false },
                  { optionName: 'blue', optionValue: '#126ae6', hasIcon: false },
                  { optionName: 'green', optionValue: '#03fc62', hasIcon: false },
                ]}
              />
              <PropertySelect
                title="dots color"
                addProperty={addPropertyHandle}
                optionsList={[
                  { optionName: 'white', optionValue: '#FFFFFF', hasIcon: false },
                  { optionName: 'red', optionValue: '#e6272d', hasIcon: false },
                  { optionName: 'blue', optionValue: '#126ae6', hasIcon: false },
                  { optionName: 'green', optionValue: '#03fc62', hasIcon: false },
                ]}
              />
              <PropertyButton
                title="digital clock logo component"
                propertyKey="digitalClockLogoComponent"
                addProperty={addPropertyHandle}
                propertiesList={propertiesList}
                toggleValue={(currentValue) =>
                  currentValue
                    ? undefined
                    : <div
                      style={{
                        width: '25px',
                        height: '25px',
                        borderRadius: '50%',
                        backgroundColor: '#8f2af5',
                      }}
                    />
                }
              />

            </>
          )}
        </PropertiesInnerWrapper>
      </PropertiesWrapper>
    </AppWrapper>
  );
}

export default App;