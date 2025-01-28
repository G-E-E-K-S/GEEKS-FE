import styled from "styled-components";
import smallDownArrow from "../../assets/img/Roommate/smallDownArrow.svg";
import Row from "../Common/Layouts/Row";
import Typography from "../Common/Layouts/Typography";

export default function Condition({ condition }: { condition: string }) {
	return (
		<ConditionTotal>
			<Row>
				<Typography typoSize="B2_semibold" color="Gray700" style={{ marginRight: "2px", whiteSpace: "nowrap" }}>
					{condition}
				</Typography>
				<img src={smallDownArrow} />
			</Row>
		</ConditionTotal>
	);
}

const ConditionTotal = styled.div`
	width: max-content;
	height: 34px;
	padding: 8px 2.56vw 8px 4.1vw;
	border-radius: 24px;
	border: 1px solid #e2e2e2;
	background: #fff;
	margin-bottom: 2.36vh;
	margin-right: 6px;
	cursor: pointer;
`;
