import * as c from "../../components/Common/CommonStyle";
import CalendarGrid from "./components/CalendarGrid";

export default function Calendar () {
	return (
		<c.Totalframe>
			<c.ScreenComponent navigation={true}>
				<c.SubScreen>
					<CalendarGrid
						type="modal"
					/>
				</c.SubScreen>
			</c.ScreenComponent>
		</c.Totalframe>
	);
}