/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-lonely-if */
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
const { Fragment } = wp.element;
const Save = ({ attributes }) => {
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

	const activeClass = makeActive ? 'aab__accordion_body--show' : '';

	// initial accordion stage
	let currentIconClass;
	if (makeActive === false) {
		currentIconClass = iconClass;
	} else {
		if (iconClass === 'plus-alt2') {
			currentIconClass = 'minus';
		} else if (iconClass === 'arrow-down') {
			currentIconClass = 'arrow-up';
		} else if (iconClass === 'arrow-down-alt2') {
			currentIconClass = 'arrow-up-alt2';
		} else if (iconClass === 'plus-alt') {
			currentIconClass = 'dismiss';
		} else if (iconClass === 'insert') {
			currentIconClass = 'remove';
		}
	}

	return (
		<div
			{...useBlockProps.save({
				className: `aab__accordion_container ${
					disableAccordion ? 'aab__accordion_disabled' : ''
				}`,
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
							data-active={makeActive}
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
								<RichText.Content
									className="aab__accordion_title"
									tagName={headingTag}
									value={heading}
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
										className={`aab__icon dashicons dashicons-${currentIconClass}`}
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
						data-active={makeActive}
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
							<RichText.Content
								className="aab__accordion_title"
								tagName={headingTag}
								value={heading}
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
									color: iconColor ? iconColor : '#333333',
									backgroundColor: iconBackground
										? iconBackground
										: 'transparent',
								}}
							>
								<span
									className={`aab__icon dashicons dashicons-${currentIconClass}`}
								></span>
							</div>
						)}
					</div>
					<div
						className={`aab__accordion_body ${activeClass}`}
						role="region"
						style={{
							backgroundColor: bodyBg ? bodyBg : 'transparent',
							borderTop: `${border}px solid ${accordionBorderColor}`,
							padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
						}}
					>
						<InnerBlocks.Content />
					</div>
				</Fragment>
			)}
		</div>
	);
};
export default Save;
