const attributes = {
    heading: {
        type: 'string',
        default: 'Accordion Heading'
    },
    headingTag: {
        type: 'string',
        default: 'h4'
    },
    headingColor: {
        type: 'string',
        default: '#000000'
    },
    showIcon: {
        type: 'boolean',
        default: true,
    },
    iconClass: {
        type: 'string',
        default: 'plus-alt2',
    },
    borderTopWidth: {
        type: 'number',
        default: 1
    },
    borderBottomWidth: {
        type: 'number',
        default: 0
    },
    borderTopColor: {
        type: 'string',
        default: '#cccccc'
    },
    borderBottomColor: {
        type: 'string',
        default: '#cccccc'
    },
    makeActive: {
        type: 'boolean',
        default: false
    },
    active: {
        type: 'string',
        default: 'active'
    },
};
export default attributes; 