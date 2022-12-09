import * as React from 'react';
import {SVGProps} from 'react';
import {Theme} from '../../remotion/theme';

export const PlayButton = ({
	theme,
	...props
}: SVGProps<SVGSVGElement> & {
	theme: Theme;
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 100 100"
		xmlSpace="preserve"
		{...props}
	>
		<path
			style={{
				fill: '#fff',
			}}
			d="M31.313 98.263c-6.314 0-11.777-1.786-16.239-5.309-6.77-5.346-9.014-13.122-10.112-18.506-1.886-9.242-2.415-18.822-1.574-28.477.127-1.459.214-3.024.306-4.68.305-5.497.651-11.728 2.68-18.009C9.457 13.74 16.037 6.504 24.428 3.427c3.062-1.122 6.37-1.691 9.833-1.691 5.286 0 10.143 1.344 13.338 2.355 14.188 4.492 27.488 12.178 38.463 22.226 3.558 3.257 7.477 7.398 9.559 13.407 2.351 6.792 1.672 14.71-1.863 21.723-2.812 5.58-6.856 9.701-10.064 12.667a96.851 96.851 0 0 1-41.753 22.68c-3.891.989-7.367 1.469-10.628 1.469z"
		/>
		<path
			style={{
				fill: 'none',
				stroke: '#000',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
				strokeMiterlimit: 10,
			}}
			d="m25.548 3.05-.01.01-18.59 18.6M31.348 1.89 5.118 28.11M36.068 1.79l-31.8 31.8M40.228 2.26 3.848 38.64M44.048 3.07 3.568 43.55M47.638 4.1 3.198 48.55M51.098 5.28 3.008 53.36M54.448 6.55l-51.4 51.4M57.728 7.91 3.288 62.35M60.898 9.36l-57.2 57.2M63.978 10.91 4.268 70.62M66.988 12.53 4.978 74.54M69.908 14.24 5.878 78.27M72.758 16.02 7.038 81.73M75.508 17.89 8.478 84.92M78.198 19.83l-67.96 67.96M80.808 21.85l-68.52 68.52M83.348 23.94l-68.68 68.68M85.818 26.1l-68.45 68.45M88.188 28.35l-67.78 67.79M90.408 30.77l-66.56 66.55M92.408 33.39l-64.67 64.67M94.138 36.29l-61.96 61.96M95.538 39.52l-58.24 58.24M96.528 43.16l-53.29 53.29M96.988 47.33l-47.07 47.06M96.688 52.25l-39.07 39.07M95.038 58.53l-27.81 27.82-.01.01"
		/>
		<path
			style={{
				fill: 'none',
				stroke: '#000',
				strokeWidth: 2,
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
				strokeMiterlimit: 10,
			}}
			d="M31.313 98.263c-6.314 0-11.777-1.786-16.239-5.309-6.77-5.346-9.014-13.122-10.112-18.506-1.886-9.242-2.415-18.822-1.574-28.477.127-1.459.214-3.024.306-4.68.305-5.497.651-11.728 2.68-18.009C9.457 13.74 16.037 6.504 24.428 3.427c3.062-1.122 6.37-1.691 9.833-1.691 5.286 0 10.143 1.344 13.338 2.355 14.188 4.492 27.488 12.178 38.463 22.226 3.558 3.257 7.477 7.398 9.559 13.407 2.351 6.792 1.672 14.71-1.863 21.723-2.812 5.58-6.856 9.701-10.064 12.667a96.851 96.851 0 0 1-41.753 22.68c-3.891.989-7.367 1.469-10.628 1.469z"
		/>
		<path
			style={{
				fill: theme.mainColor,
			}}
			d="M19.563 27.543c1.56-4.828 4.873-9.355 9.636-11.102 4.543-1.665 9.606-.596 14.218.865A89.47 89.47 0 0 1 76.703 36.54c2.403 2.2 4.756 4.643 5.822 7.722 1.233 3.562.554 7.583-1.143 10.949-1.696 3.366-4.327 6.168-7.096 8.727-10.065 9.304-22.479 16.047-35.762 19.425-4.999 1.271-10.812 1.912-14.86-1.285-3.099-2.447-4.334-6.533-5.123-10.401-1.644-8.058-2.06-16.314-1.346-24.502.562-6.452.37-13.449 2.368-19.632z"
		/>
		<path
			style={{
				fill: 'none',
				stroke: '#000',
				strokeWidth: 2,
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
				strokeMiterlimit: 10,
			}}
			d="M19.563 27.543c1.56-4.828 4.873-9.355 9.636-11.102 4.543-1.665 9.606-.596 14.218.865A89.47 89.47 0 0 1 76.703 36.54c2.403 2.2 4.756 4.643 5.822 7.722 1.233 3.562.554 7.583-1.143 10.949-1.696 3.366-4.327 6.168-7.096 8.727-10.065 9.304-22.479 16.047-35.762 19.425-4.999 1.271-10.812 1.912-14.86-1.285-3.099-2.447-4.334-6.533-5.123-10.401-1.644-8.058-2.06-16.314-1.346-24.502.562-6.452.37-13.449 2.368-19.632z"
		/>
		<path
			style={{
				fill: 'none',
				stroke: '#000',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
				strokeMiterlimit: 10,
			}}
			d="M24.755 48.86a78.08 78.08 0 0 1 .43-15.207c.283-2.237.706-4.564 2.083-6.35 1.553-2.014 4.125-3.033 6.659-3.26 2.533-.227 5.071.245 7.57.715M44.858 25.575l1.779.965"
		/>
		<path
			style={{
				fill: 'none',
				stroke: '#000',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
				strokeMiterlimit: 10,
			}}
			d="m31.928 45.225-.451-9.089c-.078-1.568-.125-3.254.73-4.569.734-1.129 2.037-1.788 3.36-2.04s2.684-.144 4.027-.036M46.845 73.214a80.813 80.813 0 0 0 25.409-16.822M74.517 54.263l1.506-1.255M72.853 51.854A72.579 72.579 0 0 1 52.63 64.958M23.553 63.179a48.853 48.853 0 0 0 1.185 9.622c.333 1.476.79 3.028 1.935 4.017 1.683 1.452 4.196 1.191 6.392.847"
		/>
	</svg>
);
