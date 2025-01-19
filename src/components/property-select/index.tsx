import { FC, useCallback, useState } from "react"
import { PropertyContainer, PropertyDropDownWrapper, PropertyOptionWrapper, PropertyOptionWrapperProps, PropertyWrapper, SelectedOptionWrapper } from "../../styles/app"
import Icon, { IconProps } from "../../icons/icon"
import { IconName } from "../../icons/icon-list"
import { wordWithSpacesToCamelcaseConvertor } from "../../utils/word-with-spaces-to-camelcase-convertor"

interface OptionBaseProps extends PropertyOptionWrapperProps {
    optionName: string
    optionValue: any

}

interface OptionWithIcon extends Omit<OptionBaseProps, 'hasIcon'> {
    hasIcon: true
    icon: FC<IconProps>
    iconName: IconName

}

interface OptionWithoutIcon extends Omit<OptionBaseProps, 'hasIcon'> {
    hasIcon: false
    icon?: undefined
    iconName?: undefined
}

export type Option = OptionWithIcon | OptionWithoutIcon


interface PropertySelectProps {
    title: string
    optionsList: Array<Option>
    addProperty: (property: { title: string, propType: 'option' | 'toggle', value: string | number }) => void
}

const PropertySelect: FC<PropertySelectProps> = ({ optionsList, title, addProperty }) => {
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState<Option>(optionsList[0])
    const [currentColor, setCurrentColor] = useState<string>('#000000')

    const handleOpen = useCallback(() => {
        setShowOptions(prevState => !prevState)
    }, [])

    const handleOptionSelect = useCallback((option: Option) => {
        const propertyTitle = wordWithSpacesToCamelcaseConvertor(title)
        addProperty({ title: propertyTitle, propType: 'option', value: option.optionValue })
        setSelectedOption(option)
    }, [])

    const handleColorChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const propertyTitle = wordWithSpacesToCamelcaseConvertor(title);
            const newColor = event.target.value;
            setCurrentColor(newColor)
            addProperty({ title: propertyTitle, propType: 'option', value: newColor });
        },
        [addProperty, title]
    );

    return (
        <PropertyContainer>
            <div className="title">{title}</div>
            <PropertyWrapper onClick={handleOpen}>
                <SelectedOptionWrapper>
                    {
                        title.includes('color') && !title.includes('theme')
                            ? <>
                                <input
                                    style={{
                                        width: '90%',
                                        padding: 0, 
                                        border: 'none',
                                        background: 'none', 
                                        cursor: 'pointer', 
                                    }}
                                    type="color"
                                    value={currentColor}
                                    onChange={(e) => handleColorChange(e)}
                                />

                            </>
                            :
                            <>
                                {(selectedOption.icon && selectedOption.iconName)
                                    ? <Icon
                                        iconName={selectedOption.iconName}
                                        size='1.25'
                                        style={{ marginRight: '0.5rem' }}
                                    />
                                    : null
                                }
                                {selectedOption.optionValue}
                                <Icon iconName={`${showOptions ? 'arrowUp' : 'arrowDown'}`} size='2' style={{ position: "absolute", right: '2%' }} />
                            </>
                    }

                </SelectedOptionWrapper>
                <PropertyDropDownWrapper show={showOptions && (!title.includes('color') || title.includes('theme'))}>
                    {
                        optionsList.map((option, index) => (
                            <PropertyOptionWrapper key={index} onClick={() => handleOptionSelect(option)}>
                                {(option.icon && option.iconName)
                                    ? <Icon
                                        iconName={option.iconName}
                                        size='1.25'
                                        style={{ marginRight: '0.5rem' }}
                                    />
                                    : null
                                }
                                {option.optionValue}
                            </PropertyOptionWrapper>
                        ))
                    }
                </PropertyDropDownWrapper>
            </PropertyWrapper>
        </PropertyContainer>

    )
}

export default PropertySelect
