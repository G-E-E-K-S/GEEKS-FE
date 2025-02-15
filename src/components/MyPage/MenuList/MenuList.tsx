import React from "react";
import * as S from "./style";
import Typography from "../../Common/Layouts/Typography";
import Row from "../../Common/Layouts/Row";
import MenuArrow from "../../../assets/img/MyPage/menuArrow.svg";

interface MenuListProps {
	icon?: string;
	isEnroolListStyle?: boolean;
	menuName: string;
	onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}
export default function MenuList({ icon, menuName, isEnroolListStyle, onClick }: MenuListProps) {
	return (
		<S.TotalMenu horizonAlign="distribute" verticalAlign="center" width="w-full" onClick={onClick}>
			<Row gap={12}>
				{icon && <S.MenuIcon src={icon} />}
				<Typography typoSize="T3_semibold" color="Gray800">
					{menuName}
				</Typography>
			</Row>
			{isEnroolListStyle && <S.RedCircle />}
			<S.Arrow src={MenuArrow} />
		</S.TotalMenu>
	);
}
