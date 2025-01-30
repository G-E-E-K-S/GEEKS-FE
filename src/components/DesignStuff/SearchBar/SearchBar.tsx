import { useState } from "react";

import * as S from "./style";
import SearchIcon from "../../../assets/img/Home/graySearch.svg";

export default function SearchBar({
	placeHolder,
	inputVal
}: {
	placeHolder: string;
	inputVal: (value: string) => void;
}) {
	const [isFocus, setIsFocus] = useState(false);

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			inputVal(e.target.value);
		}
	};
	return (
		<S.InputBox isFocus={isFocus}>
			<img src={SearchIcon} style={{ width: "20px", height: "20px" }} />
			<S.InputForm
				placeholder={placeHolder}
				onKeyDown={(e) => handleKeyDown(e)}
				onFocus={() => setIsFocus(true)}
				onBlur={() => setIsFocus(false)}
				// enterkeyhint="search"
			/>
		</S.InputBox>
	);
}
