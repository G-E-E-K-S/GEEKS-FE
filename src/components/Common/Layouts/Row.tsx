import styled, { css } from "styled-components";

type RowProps = {
	verticalAlign?: "center" | "top" | "bottom" | "distribute";
	horizonAlign?: "center" | "left" | "right" | "distribute";
	gap?: number;
	wrap?: "nowrap" | "wrap";
	width?: "w-full";
};

const RowCSS = (props?: RowProps) => css`
	display: flex;
	align-items: ${(() => {
		if (props?.verticalAlign) {
			switch (props.verticalAlign) {
				case "center":
					return "center";
				case "top":
					return "flex-start";
				case "bottom":
					return "flex-end";
			}
		} else {
			return "flex-start";
		}
	})()};
	justify-content: ${(() => {
		if (props?.horizonAlign) {
			switch (props.horizonAlign) {
				case "center":
					return "center";
				case "left":
					return "flex-start";
				case "right":
					return "flex-end";
				case "distribute":
					return "space-between";
			}
		} else {
			return "flex-start";
		}
	})()};
	gap: ${(() => {
		if (props?.gap) {
			return `${props.gap}px`;
		} else {
			return 0;
		}
	})()};

	flex-wrap: ${(() => {
		if (props?.wrap) {
			switch (props.wrap) {
				case "nowrap":
					return "nowrap";
				case "wrap":
					return "wrap";
			}
		}
	})()};

	width: ${(() => {
		if (props?.width) {
			switch (props.width) {
				case "w-full":
					return "100%";
			}
		}
	})()};
`;

const Row = styled.div<RowProps>`
	${(props) => RowCSS(props)}
`;

export default Row;
