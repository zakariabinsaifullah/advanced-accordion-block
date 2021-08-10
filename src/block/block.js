
//  Import CSS.
import attributes from './attributes';
import edit from './edit';
import './editor.scss';
import './style.scss';
import { InnerBlocks, RichText } from '@wordpress/block-editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'aab/accordion-block', {
	title: __( 'Accordion Block' ),
	description: __( 'Accordion Block allows you to showcase your content in accordion behavior.' ),
	icon: 'menu-alt3',
	category: 'accordiion-block',
	keywords: [
		__( 'Accordion Block' ),
	],
	attributes,
	edit,
	save: ({ attributes }) => {
		const { className, heading, headingTag, headingColor, showIcon, iconClass, borderTopWidth, borderBottomWidth, borderTopColor, borderBottomColor } = attributes; 
		return (
			<div 
                className={ `${className} single-accordion-container` }
                style={{
                    borderTop: `${borderTopWidth}px solid ${borderTopColor}`,
                    borderBottom: `${borderBottomWidth}px solid ${borderBottomColor}`,
                }}
            >
                <div className="accordion-head" style={{ color: headingColor}}>
                    <div className="accordion-heading">
                        <RichText.Content
                            tagName={ headingTag }
                            value={ heading }
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
                    <InnerBlocks.Content />
                </div>
            </div>
		);
	},
} );
