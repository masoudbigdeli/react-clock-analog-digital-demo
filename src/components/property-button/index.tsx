import { PropertyContainer, PrpertyButtonWrapper } from '../../styles/app';
import { capitalizeFirstLetter } from '../../utils/clock-utils';

const PropertyButton = ({
  title,
  propertyKey,
  addProperty,
  propertiesList,
  toggleValue,
}: {
  title: string;
  propertyKey: string;
  addProperty: (property: { title: string, propType: string, value: any }) => void
  propertiesList: Array<{ title: string, propType: string, value: any }>;
  toggleValue: (currentValue: any) => any;
}) => {
  const currentProperty = propertiesList.find((prop) => prop.title === propertyKey);
  const currentValue = currentProperty?.value;

  return (
    <PropertyContainer>
      <label>{capitalizeFirstLetter(title)}</label>
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
