/**
 * Progress bar block.
 *
 * @package
 */

/**
 * External dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import Edit from './edit';
import Save from './save';

/**
 * Register block type.
 */
registerBlockType( 'shubham/progress-bar', {
	/**
	 * Block title.
	 *
	 * @type { string }
	 */
	title: __( 'Progress Bar' ),

	/**
	 * Block description.
	 *
	 * @type { string }
	 */
	description: __( 'It will show progress bar' ),

	/**
	 * Block icon.
	 *
	 * @type { string }
	 */
	icon: 'universal-access',

	/**
	 * Block category.
	 *
	 * @type { string }
	 */
	category: 'layout',

	/**
	 * Attributes.
	 */
	attributes: {
		percentage: {
			type: 'number',
			default: 100
		},
		color: {
			type: 'string',
			default: '#4CAF50'
		},
		thickness: {
			type: 'number',
			default: 20
		}
	},

	edit: Edit,

    save: Save
} )
