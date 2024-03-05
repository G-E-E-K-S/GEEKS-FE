import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Box = styled.div`
  height: 1px
`;

const FetchMore = ({ items, setCursor }) => {
    const fetchMoreTrigger = useRef(null);

    const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) setCursor((prev) => items?.at(-1)?.postId);
    });

    useEffect(() => {
        let observerRefValue = null;

        fetchMoreObserver.observe(fetchMoreTrigger.current);
        observerRefValue = fetchMoreTrigger.current;

        return () => {
            if (observerRefValue) fetchMoreObserver.unobserve(observerRefValue);
        };
    }, [items]);

    return <Box ref={fetchMoreTrigger}/>;
};

export default FetchMore;