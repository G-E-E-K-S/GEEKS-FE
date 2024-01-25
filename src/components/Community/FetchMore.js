import React, { useRef, useEffect } from "react";

const FetchMore = ({ items, setCursor }) => {
    const fetchMoreTrigger = useRef(null);

    const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) setCursor((prev) => items?.at(-1).postId);
    });

    useEffect(() => {
        let observerRefValue = null;

        fetchMoreObserver.observe(fetchMoreTrigger.current);
        observerRefValue = fetchMoreTrigger.current;

        return () => {
            if (observerRefValue) fetchMoreObserver.unobserve(observerRefValue);
        };
    }, [items]);

    return <div ref={fetchMoreTrigger}/>;
};

export default FetchMore;