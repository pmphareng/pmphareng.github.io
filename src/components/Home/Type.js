import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
	return (
		<Typewriter
			options={{
				strings: [
					'Computer Engineering Undergraduate',
					'Web Developer',
					'Flutter Developer',
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
}

export default Type;
