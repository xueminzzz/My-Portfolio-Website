// "use client"
import React, { useEffect, useState } from 'react';
import useIntersectionObserver from "./useInteractionObserver"

const withLazyLoad = (WrappedComponent, threshold = 0.5) => {
    return (props) => {
        const [isInView, ref] = useIntersectionObserver(threshold);
        const [hasLoaded, setHasLoaded] = useState(false);

        useEffect(() => {
            if (isInView && !hasLoaded) {
                setHasLoaded(true);
            }
        }, [isInView, hasLoaded]);

        return (
            <div ref={ref}>
                {hasLoaded ? <WrappedComponent {...props} /> : <div>Loading...</div>}
            </div>
        );
    };
};

export default withLazyLoad;
