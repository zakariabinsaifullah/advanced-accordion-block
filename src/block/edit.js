const { Fragment } = wp.element;
import { InnerBlocks, InspectorControls, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl, ToggleControl } from '@wordpress/components';

const tags = [
    {
        label: 'h1',
        value: 'h1'
    },
    {
        label: 'h2',
        value: 'h2'
    },
    {
        label: 'h3',
        value: 'h3'
    },
    {
        label: 'h4',
        value: 'h4'
    },
    {
        label: 'h5',
        value: 'h5'
    },
    {
        label: 'h6',
        value: 'h6'
    }
];
const icons = [
    {
        label: 'Plus Minus',
        value: 'plus-alt2'
    },
    {
        label: 'Arrow Up Down',
        value: 'arrow-down-alt2'
    },
    {
        label: 'Open Close',
        value: 'plus-alt'
    }
];

const Edit = ({ attributes, setAttributes }) => {
    const { className, heading, headingTag, headingColor, showIcon, iconClass, borderTopWidth, borderBottomWidth, borderTopColor, borderBottomColor } = attributes; 
    return(
        <Fragment>
            <InspectorControls>
                <PanelBody
                    initialOpen={ true }
                    title="Container Options"
                >
                    <RangeControl
                        label="Top Border Width"
                        value={ borderTopWidth }
                        onChange={ ( borderTopWidth ) => setAttributes( { borderTopWidth } ) }
                        min={ 0 }
                        max={ 50 }
                    />
                    <RangeControl
                        label="Bottom Border Width"
                        value={ borderBottomWidth }
                        onChange={ ( borderBottomWidth ) => setAttributes( { borderBottomWidth } ) }
                        min={ 0 }
                        max={ 50 }
                    />
                </PanelBody>
                <PanelColorSettings 
                    title="Borders Colors"
                    initialOpen={ false }
                    colorSettings={ [
                        {
                            value: borderTopColor,
                            onChange: ( colorValue ) => setAttributes( { borderTopColor: colorValue } ),
                            label: 'Top Border Color',
                        },
                        {
                            value: borderBottomColor,
                            onChange: ( colorValue ) => setAttributes( { borderBottomColor: colorValue } ),
                            label: 'Bottom Border Color',
                        }
                    ] }
                />
                <PanelBody
                    initialOpen={ false }
                    title="Heading Options"
                >
                    <SelectControl
                        label="Heading Tag"
                        options={ tags }
                        onChange={ ( headingTag ) => setAttributes( { headingTag } ) }
                        value={ headingTag }
                    />
                    <ToggleControl
                        label="Show Expand Icon"
                        checked={ showIcon }
                        onChange={ () => setAttributes({ showIcon: ! showIcon }) }
                    />
                    {
                        showIcon &&
                        <Fragment>
                            <SelectControl
                                label="Select Icon Type"
                                options={ icons }
                                onChange={ ( iconClass ) => { setAttributes( { iconClass } ) } }
                                value={ iconClass }
                            />
                        </Fragment>
                    }
                </PanelBody>
                <PanelColorSettings 
                    title="Heading Color"
                    initialOpen={ false }
                    colorSettings={ [
                        {
                            value: headingColor,
                            onChange: ( colorValue ) => setAttributes( { headingColor: colorValue } ),
                            label: 'Heading Color',
                        }
                    ] }
                />
            </InspectorControls>
            <div 
                className={ `${className} single-accordion-container` }
                style={{
                    borderTop: `${borderTopWidth}px solid ${borderTopColor}`,
                    borderBottom: `${borderBottomWidth}px solid ${borderBottomColor}`,
                }}
            >
                <div className="accordion-head" style={{ color: headingColor}}>
                    <div className="accordion-heading">
                        <RichText
                            tagName={ headingTag }
                            value={ heading }
                           onChange={ ( heading ) => setAttributes( { heading } ) }
                        /> 
                    </div>
                    {
                        showIcon &&
                        <div className="collapse-icon">
                            <span className={`dashicons dashicons-${iconClass}`}></span>
                        </div>
                    }
                </div>
                <div className={`accordion-body`}>
                    <InnerBlocks 
                        allowedBlocks={true}
                        template={[
                            ['core/paragraph',{ placeholder: "Write content here.." } ]
                        ]}
                    />
                </div>
            </div>
        </Fragment>
    )
}
export default Edit; 