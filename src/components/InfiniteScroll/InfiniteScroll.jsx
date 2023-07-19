import React, { useCallback, useRef } from 'react';

function InfiniteScroll({items, hasMore, renderItem, nextPage}) {
	
	const options = {
		threshold: [0, 0.5, 1]
	};

	const observer = useRef;

	const lastElement = useCallback(node => {
		if (node !== null) {
			if (observer.current) {
				observer.current.disconnect();
			}
			observer.current = new IntersectionObserver(entries => {
				if (entries[0].isIntersecting) {
					if (hasMore == true) {
						nextPage();
					}
				}
			},
			{
				options
			});
			observer.current.observe(node);
		}
	}, [hasMore]);

	return (
		<>
			{items.map((item, i) => {
				let ref = null;
				if (i === items.length - 1 ) {
					ref = lastElement;
				}
				return renderItem(item, i, ref);
			})}
		</>
	);
}

export default InfiniteScroll;