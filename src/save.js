/**
 * Save function.
 *
 * @returns { Object } Save content.
 */
const Save = ( props ) => {
	const { className, attributes } = props;
	const { percentage, color, thickness } = attributes;

	return (
		<div style={ { height: `${ thickness }px` } } className='progress-bar__container'>
			<div
				style={ { width: `${ percentage }%`, backgroundColor: `${ color }` } }
				className='progress_bar-frontend'
			>
			</div>
		</div>
	)
}

export default Save;


