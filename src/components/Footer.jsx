import React from 'react';

function Footer() {
	return (
		<div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
			<a href="#hero" className="block text-xl md:text-2xl font-semibold">
				Anthony Montes
			</a>
			<a
				href="mailto:webcifar@gmail.com"
				className="text-sm md:text-md hover:text-indigo-500"
			>
				anthonymontesgm@gmail.com
			</a>
			
		</div>
	);
}

export default Footer;