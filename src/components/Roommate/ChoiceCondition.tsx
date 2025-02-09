import React, { useState } from "react";
import styled from "styled-components";
import CommonBottomSheet from "../Common/BottomSheet";
import CloseModal from "../../assets/img/Join/closeModal.svg";
import reset from "../../assets/img/MyPage/reset.svg";
import Row from "../Common/Layouts/Row";
import Typography from "../Common/Layouts/Typography";
import LifeStyle from "../Main/LifeStyle";

const Content = styled.div`
	height: calc(84.83vh - 19.19vh);
	overflow-y: auto;
	overflow-x: hidden;
	&::-webkit-scrollbar {
		display: none;
	}
`;
const BottomMenu = styled(Row)`
	width: 100%;
	/* height: 10.625rem; */
	padding: 20.17px 5.12vw 86px 5.12vw;
	border-top: 1px solid #efefef;
	position: fixed;
	bottom: 0;
	background-color: #fff;
`;
const Reset = styled(Row)`
	border-radius: 12px;
	padding: 16px 5.512vw;
	height: max-content;
	margin-right: 12px;
	background: #fff;
	border: 1px solid #e2e2e2;
	height: 64px;
	white-space: nowrap;
	cursor: pointer;
`;
const ResetImg = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 4px;
`;
const ApplyBtn = styled(Row)`
	border-radius: 12px;
	background-color: #ffc700;
	width: 100%;
	padding: 16px 0;
	height: 64px;
`;
export default function ChoiceCondition({ onClick }: { onClick: (e: React.MouseEvent<HTMLImageElement>) => void }) {
	const [lifestyleSelections, setLifestyleSelections] = useState({
		전공: null,
		흡연: null,
		잠버릇: null,
		취침: null,
		기상: null,
		외출: null
	});

	const handleSelect = (title: string, value: string) => {
		setLifestyleSelections((prev) => ({
			...prev,
			[title]: value
		}));
	};

	const handleReset = () => {
		setLifestyleSelections({
			전공: null,
			흡연: null,
			잠버릇: null,
			취침: null,
			기상: null,
			외출: null
		});
	};

	return (
		<>
			<Content>
				<Row horizonAlign="distribute" style={{ marginBottom: "1.5rem" }}>
					<Typography color="Gray800" typoSize="T2_bold">
						{"룸메이트 기준을 직접 설정하세요"}
					</Typography>
					<img src={CloseModal} onClick={onClick} />
				</Row>
				<LifeStyle
					title="전공"
					options={["같은 전공", "같은 단과대", "타전공"]}
					selected={lifestyleSelections["전공"]}
					onSelect={(value) => handleSelect("전공", value)}
				/>
				<LifeStyle
					title="흡연"
					options={["흡연자", "비흡연자"]}
					selected={lifestyleSelections["흡연"]}
					onSelect={(value) => handleSelect("흡연", value)}
				/>
				<LifeStyle
					title="잠버릇"
					options={["잠버릇 있어요", "잠버릇 없어요"]}
					selected={lifestyleSelections["잠버릇"]}
					onSelect={(value) => handleSelect("잠버릇", value)}
				/>
				<LifeStyle
					title="취침"
					options={["일찍 자요", "늦게 자요", "때마다 달라요"]}
					selected={lifestyleSelections["취침"]}
					onSelect={(value) => handleSelect("취침", value)}
				/>
				<LifeStyle
					title="기상"
					options={["일찍 일어나요", "늦게 일어나요", "때마다 달라요"]}
					selected={lifestyleSelections["기상"]}
					onSelect={(value) => handleSelect("기상", value)}
				/>
				<LifeStyle
					title="외출"
					options={[
						"집순이에요",
						"밖순이에요",
						"본가 자주 가요",
						"약속이 있으면 나가요",
						"학교에 오래 있어요"
					]}
					selected={lifestyleSelections["외출"]}
					onSelect={(value) => handleSelect("외출", value)}
				/>
			</Content>
			<BottomMenu horizonAlign="distribute">
				<Reset horizonAlign="center" verticalAlign="center" onClick={handleReset}>
					<ResetImg src={reset} />
					<Typography color="Gray700" typoSize="T3_semibold" style={{ whiteSpace: "nowrap" }}>
						{"초기화"}
					</Typography>
				</Reset>
				<ApplyBtn horizonAlign="center" verticalAlign="center">
					<Typography typoSize="T3_semibold" color="Black">
						{"적용하기"}
					</Typography>
				</ApplyBtn>
			</BottomMenu>
		</>
	);
}
