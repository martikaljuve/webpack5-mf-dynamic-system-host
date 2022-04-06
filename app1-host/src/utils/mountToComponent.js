import React, { useLayoutEffect, useRef } from 'react';

export function mountToComponent(module, componentName) {
	function Component(props) {
		const elementRef = useRef(null);
		const isMountedRef = useRef(false);

		// Update
		useLayoutEffect(() => {
			if (!isMountedRef.current) {
				return;
			}

			module.update({ props, el: elementRef.current });
		}, [props]);

		// Mount / Unmount
		useLayoutEffect(() => {
			const el = elementRef.current;

			module.mount({ props, el });

			return () => {
				module.unmount({ el });
			};
		}, []);

		return <div ref={elementRef} />;
	}

	Component.displayName = `MicroFE(${componentName})`;

	return Component;
}
