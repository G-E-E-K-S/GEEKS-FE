import React from "react";
import * as S from "./style";
import Typography from "../../Common/Layouts/Typography";
import Row from "../../Common/Layouts/Row";
import MenuArrow from "../../../assets/img/MyPage/menuArrow.svg";

// const MenuImg = styled.img`
// 	margin-right: 16px;
// 	width: 28px;
// 	height: 28px;
// `;
// const MenuName = styled.div`
// 	display: flex;
// 	align-items: center;
// 	color: ${(props) => (props.isShow ? "#D0D0D0" : props.isSecession ? "#CB3D0B" : "#333")};
// 	font-size: 1.125rem;
// 	font-style: normal;
// 	font-weight: 600;
// `;
// const Arrow = styled.img`
// 	width: 20px;
// 	height: 20px;
// `;

// const Arrows = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// `;
interface MenuListProps {
	icon: string;
	isEnroolListStyle?: boolean;
	menuName: string;
	onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}
export default function MenuList({ icon, menuName, isEnroolListStyle, onClick }: MenuListProps) {
	return (
		<S.TotalMenu horizonAlign="distribute" verticalAlign="center" width="w-full" onClick={onClick}>
			<Row gap={12}>
				<S.MenuIcon src={icon} />
				<Typography typoSize="T3_semibold" color="Gray800">
					{menuName}
				</Typography>
			</Row>
			{isEnroolListStyle && <S.RedCircle />}
			<S.Arrow src={MenuArrow} />
		</S.TotalMenu>
	);
}
