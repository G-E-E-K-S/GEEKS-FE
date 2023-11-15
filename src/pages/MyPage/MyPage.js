import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import * as c from '../../components/Common/CommonStyle';
import GoBack from "../../components/Join/GoBack";
import NavigationBar from "../../components/Main/NavigationBar";

const MyPage = () => {
    return(
        <c.Totalframe>
            <c.ScreenComponent>
                <c.SubScreen>
                    <GoBack/>
                </c.SubScreen>
            </c.ScreenComponent>
            <NavigationBar type={`mypage`}/>
        </c.Totalframe>
    )
};
export default MyPage;
