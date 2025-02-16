import { useNavigate } from "react-router-dom";

import Row from "../../Common/Layouts/Row";
import search from "../../../assets/img/Home/search.svg";
import noti from "../../../assets/img/Home/noti.svg";
import GeeksLogo from "../../../assets/img/Common/geeksLogo.svg";
import * as S from "./style";

export default function Header() {
	const navigate = useNavigate();
	return (
		<S.TotalHeader horizonAlign="distribute">
			<img src={GeeksLogo} />
		</S.TotalHeader>
	);
}
{
	/* <Row gap={16}>
				<img src={search} onClick={() => navigate("/search")} />
				<img src={noti} onClick={() => navigate("/noti")} />
				{/* {props.isEdit && <img src={edit} />} */
}
// </Row>
