import styled from "styled-components";
import Typography from "../Common/Layouts/Typography";

const MainText = ({ maintitle }: { maintitle: string }) => {
	return (
		<Typography typoSize="H3" color="Gray800" style={{ marginTop: "16px", marginBottom: "40px" }}>
			{maintitle}
		</Typography>
	);
};
export default MainText;
