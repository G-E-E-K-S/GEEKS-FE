import React, { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

// import API from "../../axios/BaseUrl";
import * as c from "../../../components/Common/CommonStyle";
import HeaderMenu from "../../../components/Common/HeaderMenu";
import Loading from "../../Loading";
import Typography from "../../../components/Common/Layouts/Typography";
import TextFields from "../../../components/DesignStuff/TextFields/TextFields";
import Button from "../../../components/DesignStuff/Button/Button";
import Row from "../../../components/Common/Layouts/Row";

// const Total = styled.div`
// 	display: flex;
// 	align-items: center;
// 	margin-top: 19px;
// `;
// const SendEmail = styled.div`
// 	color: #949494;
// 	font-size: 1rem;
// 	font-weight: 500;
// 	margin-right: 8px;
// `;
// const ResendMail = styled.div`
// 	border-radius: 6px;
// 	background: #efefef;
// 	padding: 4px 12px;
// 	color: #525252;
// 	font-size: 0.875rem;
// 	font-style: normal;
// 	font-weight: 600;
// 	height: max-content;
// 	line-height: 18px;
// 	&:active {
// 		background: #d0d0d0;
// 	}
// `;
export default function FindPassword() {
	const [isEmailSelected, setIsEmailSelected] = useState(false);
	const [isNextPage, setIsNextPage] = useState(false);
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

    //TODO API연결
	const handleEmail = () => {
		//useQuery쓸 예정
		// async function fetchLogin() {
		// 	setLoading(true);
		// 	try {
		// 		let email = emailVal.current.value + "@sangmyung.kr";
		// 		const res = await API.get("/mail/temporary?email=" + email);
		// 		if (res.data === "success") {
		// 			navigate("/login");
		// 			setLoading(false);
		// 		}
		// 	} catch (error) {
		// 		console.error(error);
		// 	}
		// }
		// fetchLogin();
	};
	useMemo(() => {
		email.length > 0 ? setIsNextPage(true) : setIsNextPage(false);
	}, [email]);
	{
		/* <Row verticalAlign="center">
                        <SendEmail>{`비밀번호 변경 메일을 보내드려요`}</SendEmail>
                        <ResendMail>{`메일 재전송`}</ResendMail>
                    </Row> */
	}

	return (
		<c.Totalframe>
			<c.ScreenComponent>
				<HeaderMenu />
				<Typography
					typoSize="H3"
					color="Gray800"
					style={{ marginTop: "32px", marginBottom: "6.27vh" }}
				>{`비밀번호를 찾아드릴게요\n\n기존에 가입하셨던\n이메일 주소를 입력해 주세요`}</Typography>
				<TextFields fixedText={"@sangmyung.kr"} placeholder={"학번"} onChange={(value) => setEmail(value)} />
				<Button onClick={() => handleEmail()} isNextPage={isNextPage} text={"메일 받기"}></Button>
			</c.ScreenComponent>
		</c.Totalframe>
	);
}
