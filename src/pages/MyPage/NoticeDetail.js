import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import NoticePage from "../../components/MyPage/NoticePage";
import Notices from "../../JSON/notice.json";

const Notice = () => {
  const { noticenum } = useParams();
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        {Notices.notice?.map((notice) => (
          <NoticePage
            NoticeName={notice.noticeName}
            NoticeDate={notice.noticeDate}
            NoticeContent={notice.noticeContent}
          />
        ))}
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default Notice;
