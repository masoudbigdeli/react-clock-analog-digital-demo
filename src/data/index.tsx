import SmileLogo from '../../public/smile-logo.png'

export const analogPropertySelectData = [
  {
    title: "clock border thickness",
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
    title: "clock background color",
    optionsList: [],
  },
  {
    title: "clock border color",
    optionsList: [],
  },
  {
    title: "primary numbers color",
    optionsList: [],
  },
  {
    title: "major numbers color",
    optionsList: [],
  },
  {
    title: "hour hand color",
    optionsList: [],
  },
  {
    title: "minute hand color",
    optionsList: [],
  },
  {
    title: "second hand color",
    optionsList: [],
  },
  {
    title: "primary ticks color",
    optionsList: [],
  },
  {
    title: "major ticks color",
    optionsList: [],
  },
  {
    title: "minor ticks color",
    optionsList: [],
  },
  {
    title: "center circle color",
    optionsList: [],
  },
  {
    title: "alarm ring color",
    optionsList: [],
  },
];


export const analogPropertyButtonData = [
  {
    title: "clock logo component",
    propertyKey: "clockLogoSrcAndOffset",
    toggleValue: (currentValue : any) =>
      currentValue ? undefined : { cmp: <img src={SmileLogo} width="100px" alt="logo" />, offset: 110 }
  },
  {
    title: "has primary ticks",
    propertyKey: "hasPrimaryTicks",
    toggleValue: (currentValue : any) => (currentValue ? undefined : false)
  },
  {
    title: "has major ticks",
    propertyKey: "hasMajorTicks",
    toggleValue: (currentValue : any) => (currentValue ? undefined : false)
  },
  {
    title: "has minor ticks",
    propertyKey: "hasMinorTicks",
    toggleValue: (currentValue : any) => (currentValue ? undefined : false)
  },
  {
    title: "has primary numbers",
    propertyKey: "hasPrimaryNumbers",
    toggleValue: (currentValue : any) => (currentValue ? undefined : false)
  },
  {
    title: "has major numbers",
    propertyKey: "hasMajorNumbers",
    toggleValue: (currentValue : any) => (currentValue ? undefined : false)
  },
  {
    title: "primary ticks component",
    propertyKey: "UserPrimaryTicksComponent",
    toggleValue: (currentValue : any) =>
      currentValue ? undefined : <div style={{ width: "10px", borderRadius: "50%", backgroundColor: "#facb48" }}></div>
  },
  {
    title: "major ticks component",
    propertyKey: "UserMajorTicksComponent",
    toggleValue: (currentValue : any) =>
      currentValue ? undefined : <div style={{ width: "7px", borderRadius: "50%", backgroundColor: "#8f2af5" }}></div>
  },
  {
    title: "minor ticks component",
    propertyKey: "UserMinorTicksComponent",
    toggleValue: (currentValue : any) =>
      currentValue ? undefined : <div style={{ width: "5px", height: "7px", borderRadius: "10px", backgroundColor: "red" }}></div>
  },
  {
    title: "primary numbers component",
    propertyKey: "PrimaryNumbersComponent",
    toggleValue: (currentValue : any) =>
      currentValue ? undefined : <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#f0ed30" }}></div>
  },
  {
    title: "major numbers component",
    propertyKey: "MajorNumbersComponent",
    toggleValue: (currentValue : any) =>
      currentValue ? undefined : <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#e0560b" }}></div>
  },
  {
    title: "clock center component",
    propertyKey: "ClockCenterComponent",
    toggleValue: (currentValue : any) =>
      currentValue ? undefined : <div style={{ width: "25px", height: "25px", borderRadius: "50%", backgroundColor: "#8f2af5" }}></div>
  }
];

export const digitalPropertySelectData = [
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
    optionsList: []
  },
  {
    title: "active segment color",
    optionsList: []
  },
  {
    title: "inactive segment color",
    optionsList: []
  },
  {
    title: "dots color",
    optionsList: []
  },
  {
    title: "alarm ring color",
    optionsList: [],
  },
];

export const digitalPropertyButtonData = [
  {
    title: "twenty four hours",
    propertyKey: "twentyFourHours",
    toggleValue: (currentValue: boolean) => !currentValue,
  }
];
