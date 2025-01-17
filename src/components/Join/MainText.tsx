import styled from "styled-components";
import Typography from "../Common/Layouts/Typography";

const MainText = ({ maintitle }: { maintitle: string }) => {
	return (
		<Typography typoSize="H3" color="Gray800" style={{ marginTop: "3.79vh", marginBottom: "4.5rem" }}>
			{maintitle}
		</Typography>
	);
};
export default MainText;
