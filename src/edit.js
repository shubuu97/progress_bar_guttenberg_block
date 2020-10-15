/**
 * External dependencies.
 */
import React, { useState, useEffect } from 'react';
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

	const [ showProgressBar, setShowProgressBar ] = useState( true )

	useEffect(() => {
		setShowProgressBar( true );
	}, [ showProgressBar ])

	return (
		<div>
			<div style={ { height: `${ thickness }px` } } className='progress-bar__container'>
				{ showProgressBar ? <div
					style={ { width: `${ percentage }%`, backgroundColor: `${ color }` } }
					className='progress_bar'
				>
				</div> : null }
			</div>
			<Button isPrimary={ true } onClick={ () => { setShowProgressBar( false ) } } className='mr_10'>
				ANIMATE
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