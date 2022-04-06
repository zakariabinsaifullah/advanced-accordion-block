import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import metadata from './block.json';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

// icon 
import icon from './icon';

/**
 * Block Registration
 */

registerBlockType(metadata, {
	icon: {
		src: icon,
		foreground: '#3E58E1',
	},
	edit: Edit,
	save: Save,
});
