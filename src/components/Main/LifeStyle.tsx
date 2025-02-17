import styled from "styled-components";
import Row from "../Common/Layouts/Row";
import Typography from "../Common/Layouts/Typography";
import Chips from "../DesignStuff/Chips/Chips";

const Line = styled.div`
	width: 100%;
	height: 1px;
	background: #efefef;
	margin: 24px 0px;
`;
const OnlyMargin = styled.div`
	margin: 24px 0px;
`;

export default function LifeStyle({
	title,
	options,
	selected,
	onSelect,
	isLast
}: {
	title: string;
	options: string[];
	selected: string | null;
	onSelect: (value: string) => void;
	isLast?: boolean;
}) {

	return (
		<>
			<Typography typoSize="B2_medium" color="Gray500" style={{ marginBottom: "8px" }}>
				{title}
			</Typography>
			<Row gap={8} wrap="wrap">
				{options.map((val) => (
					<Chips key={val} text={val} isSelected={selected === val} onClick={() => onSelect(val)} />
				))}
			</Row>
			{isLast ? <OnlyMargin /> : <Line />}
		</>
	);
}
