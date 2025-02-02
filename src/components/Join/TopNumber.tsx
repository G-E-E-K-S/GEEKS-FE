import styled from "styled-components";
import NumCheck from "../../assets/img/Join/NumCheck.svg";
import Row from "../Common/Layouts/Row";

const Number = styled.div<{ isPage: boolean }>`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	background-color: ${({ isPage }) => (isPage ? "#FFC700" : "#EFEFEF")};
	color: ${({ isPage }) => (isPage ? "#865800" : "#949494")};
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 8px;
`;

const NumberCheck = styled.img.attrs({ src: NumCheck })`
	margin-right: 8px;
`;

export default function TopNumber({ page }: { page: number }) {
	const Num = [1, 2, 3, 4];
	return (
		<Row>
			{Num.map((num) =>
				page > num ? (
					<NumberCheck key={num} />
				) : (
					<Number key={num} isPage={num === page}>
						{num}
					</Number>
				)
			)}
		</Row>
	);
}
