import { FC, useCallback, useState } from "react"
import { PropertyContainer, PropertyDropDownWrapper, PropertyOptionWrapper, PropertyWrapper, SelectedOptionWrapper } from "../../styles/app"
import Icon from "../../icons/icon"
import { wordWithSpacesToCamelcaseConvertor } from "../../utils/word-with-spaces-to-camelcase-convertor"
import { capitalizeFirstLetter } from "../../utils/clock-utils"

interface OptionProps  {
    optionName: string
    optionValue: any

}




interface PropertySelectProps {
    title: string
    optionsList: Array<OptionProps>
    addProperty: (property: { title: string, propType: string, value: string | number }) => void
}

const PropertySelect: FC<PropertySelectProps> = ({ optionsList, title, addProperty }) => {
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState<OptionProps>(optionsList[0])
    const [currentColor, setCurrentColor] = useState<string>('#000000')

    const handleOpen = useCallback(() => {
        setShowOptions(prevState => !prevState)
    }, [])

    const handleOptionSelect = useCallback((option: OptionProps) => {
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
            <div className="title">{capitalizeFirstLetter(title)}</div>
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
                                {selectedOption.optionValue}
                                <Icon iconName={`${showOptions ? 'arrowUp' : 'arrowDown'}`} size='2' style={{ position: "absolute", right: '2%' }} />
                            </>
                    }

                </SelectedOptionWrapper>
                <PropertyDropDownWrapper show={showOptions && (!title.includes('color') || title.includes('theme'))}>
                    {
                        optionsList.map((option, index) => (
                            <PropertyOptionWrapper key={index} onClick={() => handleOptionSelect(option)}>
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
