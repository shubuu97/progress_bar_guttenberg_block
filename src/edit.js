/**
 * External dependencies.
 */
import React, { useState } from 'react';
import { TextControl, Button, PanelBody } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Edit function
 *
 * @param { object } props Component props
 */
const Edit = ( props ) => {
	const { className, attributes, setAttributes } = props;
	const { percentage, color, thickness } = attributes;

	/**
	 * Starts the progress bar
	 */
	const startProgressBarHandler = () => {
		let startPercentage = 0;
		let interval  = setInterval( () => {
			if ( startPercentage > percentage ) {
				clearInterval( interval );
			} else {
				setAttributes( { percentage: startPercentage++ } );
			}
		}, 10 );
	}

	return (
		<div>
			<div style={ { height: `${ thickness }px` } } className='progress-bar__container'>
				<div
					style={ { width: `${ percentage }%`, backgroundColor: `${ color }` } }
					className='progress_bar'
				>
				</div>
			</div>
			<Button isPrimary={ true } onClick={ startProgressBarHandler } className='mr_10'>
					START
			</Button>

			{/* Block Setting */}
			<InspectorControls>
				<PanelBody title={ __( 'Block Setting' ) }>
					<TextControl
						label='Percentage'
						type='number'
						value={ percentage }
						onChange={ ( newVal ) => setAttributes( { percentage: newVal } ) }
					/>
					<TextControl
						label='Color'
						type='string'
						value={ color }
						onChange={ ( newVal ) => setAttributes( { color: newVal } ) }
					/>
					<TextControl
						label='Thickness'
						type='number'
						value={ thickness }
						onChange={ ( newVal ) => setAttributes( { thickness: newVal } ) }
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	)
}

export default Edit;