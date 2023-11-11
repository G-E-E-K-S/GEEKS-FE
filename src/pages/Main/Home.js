import React from "react";
import * as c from '../../components/Common/CommonStyle';
import NavigationBar from '../../components/Main/NavigationBar';
import styled from 'styled-components';

const Home = () => {
    return (
        <c.Totalframe>
            <c.ScreenComponent>
                <c.SubScreen></c.SubScreen>
            </c.ScreenComponent>
            <NavigationBar/>
        </c.Totalframe>
    );
}
export default Home