import styled, { css } from "styled-components";

type ColumnProps = {
	verticalAlign?: "center" | "top" | "bottom" | "distribute";
	horizonAlign?: "center" | "left" | "right" | "distribute";
	gap?: number;
	width?: "w-full";
};

const ColumnCSS = (props?: ColumnProps) => css`
	display: flex;
	flex-direction: column;
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

	width: ${(() => {
		if (props?.width) {
			switch (props.width) {
				case "w-full":
					return "100%";
			}
		}
	})()};
`;

const Column = styled.div<ColumnProps>`
	${(props) => ColumnCSS(props)}
`;

export default Column;
