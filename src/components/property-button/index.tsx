import { PropertyContainer, PrpertyButtonWrapper } from '../../styles/app';

const PropertyButton = ({
  title,
  propertyKey,
  addProperty,
  propertiesList,
  toggleValue,
}: {
  title: string;
  propertyKey: string;
  addProperty: (property: { title: string, propType: 'toggle' | 'option', value: any }) => void
  propertiesList: Array<{ title: string, propType: 'toggle' | 'option', value: any }>;
  toggleValue: (currentValue: any) => any;
}) => {
  const currentProperty = propertiesList.find((prop) => prop.title === propertyKey);
  const currentValue = currentProperty?.value;

  return (
    <PropertyContainer>
      <label>{title}</label>
      <PrpertyButtonWrapper
        onClick={() => {
          const newValue = toggleValue(currentValue);
          addProperty({ title: propertyKey, propType: 'toggle', value: newValue });
        }}
      >
        {currentValue ? `Disable ${title}` : `Enable ${title}`}
      </PrpertyButtonWrapper>
    </PropertyContainer>
  );
};

export default PropertyButton;
