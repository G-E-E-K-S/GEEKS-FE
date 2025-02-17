import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../axios/BaseUrl";
import * as CS from "../../../components/Common/CommonStyle";
import * as S from "./style";
import LifeStyle from "../../../components/Main/LifeStyle";
import reset from "../../../assets/img/MyPage/reset.svg";
import Typography from "../../../components/Common/Layouts/Typography";
import Column from "../../../components/Common/Layouts/Column";
import GoBack from "../../../components/Common/GoBack";
import { useQuery } from "@tanstack/react-query";

export default function LifeStyles() {
	const navigate = useNavigate();
	const [lifestyleSelections, setLifestyleSelections] = useState({
		smoke: "",
		habit: "",
		ear: "",
		activityTime: "",
		outing: "",
		cleaning: "",
		tendency: ""
	});

	const handleSelect = (title: string, value: string) => {
		setLifestyleSelections((prev) => ({
			...prev,
			[title]: value
		}));
	};

	const handleReset = () => {
		setLifestyleSelections({
			smoke: "",
			habit: "",
			ear: "",
			activityTime: "",
			outing: "",
			cleaning: "",
			tendency: ""
		});
	};

	const { refetch } = useQuery({
		// TODO BE로 데이터 넘기는 방식 변경해야함.
		queryKey: ["sendLifeStyles"],
		queryFn: async () => {
			const res = await API.post(`/api/v1/user/detail/create`, {
				smoke: lifestyleSelections["smoke"] === "흡연자" ? "SMOKER" : "NONSMOKER",
				habit: lifestyleSelections["habit"] === "잠버릇 있어요" ? "HABIT" : "NONHABIT",
				ear: lifestyleSelections["ear"] === "귀 밝아요" ? "BRIGHT" : "DARK",
				activityTime: lifestyleSelections["activityTime"] === "아침형이에요" ? "MORNING" : "DAWN",
				outing: lifestyleSelections["outing"] === "집에 있는 걸 좋아해요" ? "INSIDE" : "OUTSIDE",
				cleaning: lifestyleSelections["cleaning"] === "주기적으로 청소해요" ? "CLEAN" : "DIRTY",
				tendency: lifestyleSelections["tendency"] === "혼자 조용히 지내요" ? "ALONE" : "TOGETHER"
			});
			return res.data;
		},
		enabled: false
	});

	const { data } = useQuery({
		queryKey: ["getLifeStyle"],
		queryFn: async () => {
			const res = await API.get(`/api/v1/user/detail/get`);
			return res.data;
		},
		retry: 2
	});

	useEffect(() => {
		if (!data) return;
		if (data.success) {
			setLifestyleSelections({
				smoke: data.data.smoke === "SMOKER" ? "흡연자에요" : "비흡연자에요",
				habit: data.data.habit === "NONHABIT" ? "잠버릇 없어요" : "잠버릇 있어요",
				ear: data.data.ear === "DARK" ? "귀 어두워요" : "귀 밝아요",
				activityTime: data.data.activityTime === "DAWN" ? "새벽형이에요" : "아침형이에요",
				outing: data.data.outing === "OUTSIDE" ? "나가는 걸 좋아해요" : "집에 있는 걸 좋아해요",
				cleaning: data.data.cleaning === "DIRTY" ? "주기적으로 청소해요" : "더러워지면 청소해요",
				tendency: data.data.tendency === "ALONE" ? "혼자 조용히 지내요" : "함께 놀고 싶어요"
			});
		}
	}, [data]);

	const handleApply = () => {
		refetch().then((val) => {
			val.status === "success" && navigate("/mypage");
		});
	};
	const isAllSelected = Object.values(lifestyleSelections).every((value) => value !== "");
	console.log(';;lifestyleSelections?.["smoke"]', lifestyleSelections?.["smoke"]);
	return (
		<CS.Totalframe>
			<CS.ScreenComponent navigation={true}>
				<CS.Header backgroundColor="White">
					<Column gap={20} style={{ marginBottom: "2.5rem" }}>
						<GoBack />
						<Typography typoSize="H3" color="Gray800">{`나의 생활 습관을\n등록해 보세요`}</Typography>
					</Column>
				</CS.Header>
				<LifeStyle
					title="흡연"
					options={["흡연자에요", "비흡연자에요"]}
					selected={lifestyleSelections?.["smoke"]}
					onSelect={(value) => handleSelect("smoke", value)}
				/>
				<LifeStyle
					title="잠버릇"
					options={["잠버릇 있어요", "잠버릇 없어요"]}
					selected={lifestyleSelections?.["habit"]}
					onSelect={(value) => handleSelect("habit", value)}
				/>
				<LifeStyle
					title="잠귀"
					options={["귀 밝아요", "귀 어두워요"]}
					selected={lifestyleSelections?.["ear"]}
					onSelect={(value) => handleSelect("ear", value)}
				/>
				<LifeStyle
					title="활동 시간"
					options={["아침형이에요", "새벽형이에요"]}
					selected={lifestyleSelections?.["activityTime"]}
					onSelect={(value) => handleSelect("activityTime", value)}
				/>
				<LifeStyle
					title="외출"
					options={["집에 있는 걸 좋아해요", "나가는 걸 좋아해요"]}
					selected={lifestyleSelections?.["outing"]}
					onSelect={(value) => handleSelect("outing", value)}
				/>
				<LifeStyle
					title="청소"
					options={["주기적으로 청소해요", "더러워지면 청소해요"]}
					selected={lifestyleSelections?.["cleaning"]}
					onSelect={(value) => handleSelect("cleaning", value)}
				/>
				<LifeStyle
					title="성향"
					options={["혼자 조용히 지내요", "함께 놀고 싶어요"]}
					selected={lifestyleSelections?.["tendency"]}
					onSelect={(value) => handleSelect("tendency", value)}
				/>
			</CS.ScreenComponent>
			<S.BottomMenu horizonAlign="distribute">
				<S.Reset horizonAlign="center" verticalAlign="center" onClick={handleReset}>
					<S.ResetImg src={reset} />
					<Typography color="Gray700" typoSize="T3_semibold" style={{ whiteSpace: "nowrap" }}>
						{"초기화"}
					</Typography>
				</S.Reset>
				<S.ApplyBtn
					horizonAlign="center"
					verticalAlign="center"
					onClick={() => handleApply()}
					isApply={isAllSelected}
				>
					<Typography typoSize="T3_semibold" color={isAllSelected ? "Black" : "Gray400"}>
						{"등록하기"}
					</Typography>
				</S.ApplyBtn>
			</S.BottomMenu>
		</CS.Totalframe>
	);
}
