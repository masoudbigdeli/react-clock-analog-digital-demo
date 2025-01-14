import SmileLogo from '../../public/smile-logo.png'

export const analogPropertySelectData = [
    {
      title: "analog color theme mode",
      optionsList: [
        { optionName: 'DARK', optionValue: 'DARK', hasIcon: false },
        { optionName: 'LIGHT', optionValue: 'LIGHT', hasIcon: false },
        { optionName: 'BLUE_DARK', optionValue: 'BLUE_DARK', hasIcon: false },
        { optionName: 'RED_DARK', optionValue: 'RED_DARK', hasIcon: false },
        { optionName: 'AUTUMN', optionValue: 'AUTUMN', hasIcon: false },
      ],
    },
    {
      title: "clock border thikness",
      optionsList: [
        { optionName: 'Thick', optionValue: 2, hasIcon: false },
        { optionName: 'Thin', optionValue: 0.5, hasIcon: false },
        { optionName: 'Medium', optionValue: 1, hasIcon: false },
      ],
    },
    {
      title: "clock numbers type",
      optionsList: [
        { optionName: 'ENGLISH', optionValue: 'ENGLISH', hasIcon: false },
        { optionName: 'ROMAN', optionValue: 'ROMAN', hasIcon: false },
      ],
    },
    {
      title: "major numbers font size",
      optionsList: [
        { optionName: 'eleven', optionValue: 0.11, hasIcon: false },
        { optionName: 'fourteen', optionValue: 0.14, hasIcon: false },
        { optionName: 'sixteen', optionValue: 0.16, hasIcon: false },
        { optionName: 'eighteen', optionValue: 0.18, hasIcon: false },
      ],
    },
    {
      title: "primary numbers font size",
      optionsList: [
        { optionName: 'eleven', optionValue: 0.11, hasIcon: false },
        { optionName: 'fourteen', optionValue: 0.14, hasIcon: false },
        { optionName: 'sixteen', optionValue: 0.16, hasIcon: false },
        { optionName: 'eighteen', optionValue: 0.18, hasIcon: false },
      ],
    },
    {
      title: "primary numbers color",
      optionsList: [
        { optionName: 'white', optionValue: '#FFFFFF', hasIcon: false },
        { optionName: 'red', optionValue: '#e6272d', hasIcon: false },
        { optionName: 'blue', optionValue: '#126ae6', hasIcon: false },
        { optionName: 'green', optionValue: '#03fc62', hasIcon: false },
      ],
    },
    {
      title: "major numbers color",
      optionsList: [
        { optionName: 'white', optionValue: '#FFFFFF', hasIcon: false },
        { optionName: 'red', optionValue: 'cyan', hasIcon: false },
        { optionName: 'blue', optionValue: '#126ae6', hasIcon: false },
        { optionName: 'green', optionValue: '#03fc62', hasIcon: false },
      ],
    },
  ];
  

  export const analogPropertyButtonData = [
    {
      title: "clock logo component",
      propertyKey: "clockLogoSrcAndOffset",
      toggleValue: (currentValue) =>
        currentValue ? undefined : { cmp: <img src={SmileLogo} width="100px" alt="logo" />, offset: 110 }
    },
    {
      title: "has primary ticks",
      propertyKey: "hasPrimaryTicks",
      toggleValue: (currentValue) => (currentValue ? undefined : false)
    },
    {
      title: "has major ticks",
      propertyKey: "hasMajorTicks",
      toggleValue: (currentValue) => (currentValue ? undefined : false)
    },
    {
      title: "has minor ticks",
      propertyKey: "hasMinorTicks",
      toggleValue: (currentValue) => (currentValue ? undefined : false)
    },
    {
      title: "has primary numbers",
      propertyKey: "hasPrimaryNumbers",
      toggleValue: (currentValue) => (currentValue ? undefined : false)
    },
    {
      title: "has major numbers",
      propertyKey: "hasMajorNumbers",
      toggleValue: (currentValue) => (currentValue ? undefined : false)
    },
    {
      title: "primary ticks component",
      propertyKey: "UserPrimaryTicksComponent",
      toggleValue: (currentValue) =>
        currentValue ? undefined : <div style={{ width: "10px", borderRadius: "50%", backgroundColor: "#facb48" }}></div>
    },
    {
      title: "major ticks component",
      propertyKey: "UserMajorTicksComponent",
      toggleValue: (currentValue) =>
        currentValue ? undefined : <div style={{ width: "7px", borderRadius: "50%", backgroundColor: "#8f2af5" }}></div>
    },
    {
      title: "minor ticks component",
      propertyKey: "UserMinorTicksComponent",
      toggleValue: (currentValue) =>
        currentValue ? undefined : <div style={{ width: "5px", height: "7px", borderRadius: "10px", backgroundColor: "red" }}></div>
    },
    {
      title: "primary numbers component",
      propertyKey: "PrimaryNumbersComponent",
      toggleValue: (currentValue) =>
        currentValue ? undefined : <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#f0ed30" }}></div>
    },
    {
      title: "major numbers component",
      propertyKey: "MajorNumbersComponent",
      toggleValue: (currentValue) =>
        currentValue ? undefined : <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#e0560b" }}></div>
    },
    {
      title: "clock center component",
      propertyKey: "ClockCenterComponent",
      toggleValue: (currentValue) =>
        currentValue ? undefined : <div style={{ width: "25px", height: "25px", borderRadius: "50%", backgroundColor: "#8f2af5" }}></div>
    }
  ];

  export const digitalPropertySelectData = [
    {
      title: "digital color theme mode",
      optionsList: [
        { optionName: 'LIGHT', optionValue: 'LIGHT', hasIcon: false },
        { optionName: 'DARK', optionValue: 'DARK', hasIcon: false },
        { optionName: 'BLUE_DARK', optionValue: 'BLUE_DARK', hasIcon: false },
        { optionName: 'RED_DARK', optionValue: 'RED_DARK', hasIcon: false },
        { optionName: 'AUTUMN', optionValue: 'AUTUMN', hasIcon: false }
      ]
    },
    {
      title: "padding",
      optionsList: [
        { optionName: 'zero', optionValue: 0, hasIcon: false },
        { optionName: 'half', optionValue: 0.5, hasIcon: false },
        { optionName: 'one', optionValue: 1, hasIcon: false },
        { optionName: 'onePointTwo', optionValue: 1.2, hasIcon: false }
      ]
    },
    {
      title: "background color",
      optionsList: [
        { optionName: 'white', optionValue: '#FFFFFF', hasIcon: false },
        { optionName: 'red', optionValue: '#e6272d', hasIcon: false },
        { optionName: 'blue', optionValue: '#126ae6', hasIcon: false },
        { optionName: 'green', optionValue: '#03fc62', hasIcon: false }
      ]
    },
    {
      title: "active segment color",
      optionsList: [
        { optionName: 'white', optionValue: '#FFFFFF', hasIcon: false },
        { optionName: 'red', optionValue: '#e6272d', hasIcon: false },
        { optionName: 'blue', optionValue: '#126ae6', hasIcon: false },
        { optionName: 'green', optionValue: '#03fc62', hasIcon: false }
      ]
    },
    {
      title: "inactive segment color",
      optionsList: [
        { optionName: 'white', optionValue: '#FFFFFF', hasIcon: false },
        { optionName: 'red', optionValue: '#e6272d', hasIcon: false },
        { optionName: 'blue', optionValue: '#126ae6', hasIcon: false },
        { optionName: 'green', optionValue: '#03fc62', hasIcon: false }
      ]
    },
    {
      title: "dots color",
      optionsList: [
        { optionName: 'white', optionValue: '#FFFFFF', hasIcon: false },
        { optionName: 'red', optionValue: '#e6272d', hasIcon: false },
        { optionName: 'blue', optionValue: '#126ae6', hasIcon: false },
        { optionName: 'green', optionValue: '#03fc62', hasIcon: false }
      ]
    }
  ];
  
  export const digitalPropertyButtonData = [
    {
      title: "twenty four hours",
      propertyKey: "twentyFourHours",
      toggleValue: (currentValue) => !currentValue,
    },
    {
      title: "digital clock logo component",
      propertyKey: "digitalClockLogoComponent",
      toggleValue: (currentValue) =>
        currentValue
          ? undefined
          : (
              <div
                style={{
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  backgroundColor: '#8f2af5',
                }}
              />
            ),
    },
  ];
  