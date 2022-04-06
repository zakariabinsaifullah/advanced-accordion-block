/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-shadow */
/* eslint-disable @wordpress/no-unsafe-wp-apis */
const { Fragment } = wp.element;
import {
	InnerBlocks,
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	ColorPalette,
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	__experimentalBoxControl as BoxControl,
	TextControl,
} from '@wordpress/components';
const { __ } = wp.i18n;

import colors from '../colors';
import icons from './icons';
import tags from '../tags';
const iconPositions = [
	{
		label: 'Left',
		value: 'aab_left_icon',
	},
	{
		label: 'Right',
		value: 'aab_right_icon',
	},
];

const Edit = ({ attributes, setAttributes }) => {
	const {
		makeActive,
		border,
		margins,
		paddings,
		borderRadius,
		heading,
		headingTag,
		headingColor,
		showIcon,
		iconClass,
		iconPosition,
		iconColor,
		iconBackground,
		borderColor,
		headerBg,
		bodyBg,
		id,
		linkedAccordion,
		link,
		tab,
		disableAccordion,
	} = attributes;

	const accordionBorderColor = borderColor ? borderColor : '#cccccc';

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					initialOpen={true}
					title={__('Accordion ID', 'advanced-accordion-block')}
				>
					<TextControl
						label={__(
							'Set Accordion ID',
							'advanced-accordion-block'
						)}
						value={id}
						onChange={(id) => setAttributes({ id })}
					/>
				</PanelBody>
				<PanelBody
					initialOpen={false}
					title={__('Accordion Status', 'advanced-accordion-block')}
				>
					<ToggleControl
						label={__(
							'Make it a Disable Accordion?',
							'advanced-accordion-block'
						)}
						checked={disableAccordion}
						onChange={() =>
							setAttributes({
								disableAccordion: !disableAccordion,
							})
						}
						help={__(
							'No click event works. This feature is for the frontend only!',
							'advanced-accordion-block'
						)}
					/>
					{linkedAccordion !== true && (
						<ToggleControl
							label={__(
								'Make it Active on Load',
								'advanced-accordion-block'
							)}
							checked={makeActive}
							onChange={() =>
								setAttributes({ makeActive: !makeActive })
							}
						/>
					)}
					<ToggleControl
						label={__(
							'Turn it into a Linked Accordion?',
							'advanced-accordion-block'
						)}
						checked={linkedAccordion}
						onChange={() =>
							setAttributes({ linkedAccordion: !linkedAccordion })
						}
						help={__(
							'Linked Accordion disable the Accordion Body and open the link when it is clicked.',
							'advanced-accordion-block'
						)}
					/>
					{linkedAccordion && (
						<Fragment>
							<TextControl
								label={__(
									'Link URL',
									'advanced-accordion-block'
								)}
								value={link}
								onChange={(link) => setAttributes({ link })}
							/>
							<ToggleControl
								label={__(
									'Open in new tab?',
									'advanced-accordion-block'
								)}
								checked={tab}
								onChange={() =>
									setAttributes({
										tab: !tab,
									})
								}
							/>
						</Fragment>
					)}
				</PanelBody>
				<PanelBody
					initialOpen={false}
					title={__('Accordion Settings', 'advanced-accordion-block')}
				>
					<BoxControl
						values={margins}
						label={__(
							'Accordion Margin',
							'advanced-accordion-block'
						)}
						sides={['top', 'bottom']}
						units={[]}
						allowReset={false}
						onChange={(newValue) =>
							setAttributes({
								...margins,
								margins: {
									top: newValue.top,
									bottom: newValue.bottom,
								},
							})
						}
					/>
					<div className="aa-custom-spacer"></div>
					<BoxControl
						values={paddings}
						label={__(
							'Content Padding',
							'advanced-accordion-block'
						)}
						sides={['horizontal', 'vertical']}
						units={[]}
						splitOnAxis={true}
						allowReset={false}
						onChange={(newValue) =>
							setAttributes({
								...paddings,
								paddings: {
									top: newValue.top,
									left: newValue.left,
									right: newValue.right,
									bottom: newValue.bottom,
								},
							})
						}
					/>
					<div className="aa-custom-spacer"></div>
					<RangeControl
						label={__('Border Width', 'advanced-accordion-block')}
						value={border}
						onChange={(border) => setAttributes({ border })}
						min={0}
						max={100}
					/>
					<div className="aa-custom-spacer"></div>
					{border && border !== '0px' && (
						<Fragment>
							<p className="aab__label">
								{__('Border Color', 'advanced-accordion-block')}
							</p>
							<ColorPalette
								colors={colors}
								value={borderColor}
								onChange={(borderColor) =>
									setAttributes({ borderColor })
								}
							/>
						</Fragment>
					)}
					<RangeControl
						label={__('Border Radius', 'advanced-accordion-block')}
						value={borderRadius}
						onChange={(borderRadius) =>
							setAttributes({ borderRadius })
						}
						min={0}
						max={50}
						beforeIcon="marker"
					/>
				</PanelBody>
				<PanelBody
					initialOpen={false}
					title={__('Accordion Head', 'advanced-accordion-block')}
				>
					<p className="aab__label">
						{__('Header Color', 'advanced-accordion-block')}
					</p>
					<ColorPalette
						colors={colors}
						value={headingColor}
						onChange={(headingColor) =>
							setAttributes({ headingColor })
						}
					/>
					<p className="aab__label">
						{__('Header Background', 'advanced-accordion-block')}
					</p>
					<ColorPalette
						colors={colors}
						value={headerBg}
						onChange={(headerBg) => setAttributes({ headerBg })}
					/>
					<SelectControl
						label={__(
							'Select Heading Tag',
							'advanced-accordion-block'
						)}
						options={tags}
						onChange={(headingTag) => setAttributes({ headingTag })}
						value={headingTag}
					/>
				</PanelBody>
				<PanelBody
					title={__('Accordion Icon', 'advanced-accordion-block')}
					initialOpen={false}
				>
					<ToggleControl
						label={__('Show Icon', 'advanced-accordion-block')}
						checked={showIcon}
						onChange={() => setAttributes({ showIcon: !showIcon })}
					/>
					{showIcon && (
						<Fragment>
							<SelectControl
								label={__(
									'Select Icon Type',
									'advanced-accordion-block'
								)}
								options={icons}
								onChange={(iconClass) => {
									setAttributes({ iconClass });
								}}
								value={iconClass}
							/>
							<SelectControl
								label={__(
									'Icon Position',
									'advanced-accordion-block'
								)}
								options={iconPositions}
								onChange={(iconPosition) => {
									setAttributes({ iconPosition });
								}}
								value={iconPosition}
							/>
							<p className="aab__label">
								{__('Icon Color', 'advanced-accordion-block')}
							</p>
							<ColorPalette
								colors={colors}
								value={iconColor}
								onChange={(iconColor) =>
									setAttributes({ iconColor })
								}
							/>
							<p className="aab__label">
								{__(
									'Icon Background',
									'advanced-accordion-block'
								)}
							</p>
							<ColorPalette
								colors={colors}
								value={iconBackground}
								onChange={(iconBackground) =>
									setAttributes({ iconBackground })
								}
							/>
						</Fragment>
					)}
				</PanelBody>
				<PanelBody
					title={__('Accordion Body', 'advanced-accordion-block')}
					initialOpen={false}
				>
					<p className="aab__label">
						{__('Background Color', 'advanced-accordion-block')}
					</p>
					<ColorPalette
						colors={colors}
						value={bodyBg}
						onChange={(bodyBg) => setAttributes({ bodyBg })}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{...useBlockProps({
					className: `aab__accordion_container`,
				})}
				style={{
					border: `${border}px solid ${accordionBorderColor}`,
					marginTop: `${margins.top}`,
					marginBottom: `${margins.bottom}`,
					borderRadius: `${borderRadius}px`,
				}}
				id={id !== '' ? id : 'none'}
			>
				{linkedAccordion ? (
					<Fragment>
						<a
							href={link}
							target={tab ? '_blank' : '_self'}
							rel={tab ? 'noopener noreferrer' : 'noopener'}
							className="aab__accordion_link"
						>
							<div
								className={`aab__accordion_head ${iconPosition}`}
								style={{
									color: headingColor
										? headingColor
										: '#333333',
									backgroundColor: headerBg
										? headerBg
										: 'transparent',
									padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
								}}
							>
								<div
									className={`aab__accordion_heading ${iconPosition}`}
								>
									<RichText
										tagName={headingTag}
										value={heading}
										className="aab__accordion_title"
										onChange={(heading) =>
											setAttributes({ heading })
										}
										style={{
											margin: 0,
											color: headingColor
												? headingColor
												: '#333333',
										}}
									/>
								</div>
								{showIcon && (
									<div
										className={`aab__accordion_icon`}
										style={{
											color: iconColor
												? iconColor
												: '#333333',
											backgroundColor: iconBackground
												? iconBackground
												: 'transparent',
										}}
									>
										<span
											className={`aab__icon dashicons dashicons-${iconClass}`}
										></span>
									</div>
								)}
							</div>
						</a>
					</Fragment>
				) : (
					<Fragment>
						<div
							className={`aab__accordion_head ${iconPosition}`}
							style={{
								color: headingColor ? headingColor : '#333333',
								backgroundColor: headerBg
									? headerBg
									: 'transparent',
								padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
							}}
						>
							<div
								className={`aab__accordion_heading ${iconPosition}`}
							>
								<RichText
									tagName={headingTag}
									value={heading}
									className="aab__accordion_title"
									onChange={(heading) =>
										setAttributes({ heading })
									}
									style={{
										margin: 0,
										color: headingColor
											? headingColor
											: '#333333',
									}}
								/>
							</div>
							{showIcon && (
								<div
									className={`aab__accordion_icon`}
									style={{
										color: iconColor
											? iconColor
											: '#333333',
										backgroundColor: iconBackground
											? iconBackground
											: 'transparent',
									}}
								>
									<span
										className={`aab__icon dashicons dashicons-${iconClass}`}
									></span>
								</div>
							)}
						</div>
						<div
							className={`aab__accordion_body`}
							role="region"
							style={{
								backgroundColor: bodyBg
									? bodyBg
									: 'transparent',
								borderTop: `${border}px solid ${accordionBorderColor}`,
								padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
							}}
						>
							<InnerBlocks
								allowedBlocks={true}
								renderAppender={() => (
									<InnerBlocks.ButtonBlockAppender />
								)}
							/>
						</div>
					</Fragment>
				)}
			</div>
		</Fragment>
	);
};
export default Edit;
