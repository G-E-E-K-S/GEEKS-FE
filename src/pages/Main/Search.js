import React, { useEffect, useState } from "react";
import API from "../../axios/BaseUrl";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import InputSearch from "../../components/Common/InputSearch";
import FindPost from "../../components/Main/FindPost";
import FindMember from "../../components/Main/FindMember";
import FetchMore from "../../components/Community/FetchMore";
import moment from "moment";
import "moment/locale/ko";

const SearchTotalTxt = styled.div`
	margin-top: 204px;
	text-align: center;
`;
const SearchInfoTxt = styled.div`
	color: #333;
	font-size: 1.125rem;
	font-weight: 600;
	line-height: 24px; /* 133.333% */
`;
const SearchSUbTxt = styled(SearchInfoTxt)`
	color: #b7b7b7;
	font-size: 1rem;
	font-weight: 500;
	margin-top: 8px;
`;
const Menu = styled.div`
	width: calc(100% / 2);
	padding: 14px 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: ${(props) => (props.isSelect ? "2px solid #333" : "1px solid #efefef")};
	font-size: 1.125rem;
	font-weight: 600;
	line-height: 24px;
	text-align: center;
	color: ${(props) => (props.isSelect ? "#333" : "#B7B7B7")};
`;
const MemberNotice = styled.div`
	padding: 13px 0 13px 20px;
	width: 100vw;
	background: #fafafa;
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 18px;
	text-align: left;
	color: #949494;
	margin-left: calc(-50vw + 50%);
	position: relative;
	top: 1px;
`;
const FixInput = styled.div`
	width: calc(100% - 5.12vw * 2);
	position: fixed;
	height: 124px;
	background-color: #fff;
	z-index: 3;
`;
const ContentBox = styled.div`
	position: relative;
	top: 124px;
`;
const Search = () => {
	const [keyword, setKeyword] = useState(null);
	const [posts, setPosts] = useState([]);
	const [cursor, setCursor] = useState(-1);
	const [hasNext, setHasNext] = useState(true);
	const [users, setUsers] = useState([]);
	const [isSelect, setIsSelect] = useState("post");

	let navigate = useNavigate();

	async function fetchAllPost() {
		try {
			const res = await API.get("/home/search/post?cursor=" + cursor + "&keyword=" + keyword);
			console.log(res.data);
			setHasNext(res.data.hasNextPage);
			setPosts((prev) => [...prev, ...res.data.posts]);
		} catch (error) {
			console.error(error);
		}
	}

	async function fetchMember() {
		try {
			const res = await API.get("/home/search/member?keyword=" + keyword);
			console.log(res.data);
			setUsers(res.data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		if (!hasNext || keyword == null) {
			return;
		}

		fetchAllPost();
	}, [cursor]);

	useEffect(() => {
		if (keyword == null) {
			return;
		}

		if (isSelect === "post") {
			setCursor(0);
		} else {
			fetchMember();
		}
	}, [keyword]);

	return (
		<c.Totalframe background={`#fff`}>
			<c.ScreenComponent>
				<FixInput>
					<InputSearch search={setKeyword} />
					<c.Flex>
						<Menu isSelect={isSelect === "post"} onClick={() => setIsSelect("post")}>{`게시글`}</Menu>
						<Menu isSelect={isSelect === "member"} onClick={() => setIsSelect("member")}>{`회원`}</Menu>
					</c.Flex>
				</FixInput>
				<ContentBox>
					{isSelect === "post" &&
						posts?.map((post) => (
							<FindPost
								postId={post.postId}
								title={post.title}
								date={moment(post.createDate).format("MM.DD")}
								content={post.content}
							/>
						))}
					{isSelect === "post" && keyword !== null && posts.length !== 0 && (
						<FetchMore items={posts} setCursor={setCursor} />
					)}

					{isSelect === "member" && (
						<>
							<MemberNotice>{`같은 성별의 회원만 검색할 수 있어요`}</MemberNotice>
							{users?.map((user) => (
								<FindMember
									userName={user.nickname}
									profileImg={user.photoName}
									major={user.major}
									onClick={() => navigate("/detail/details/" + user.userId)}
								/>
							))}
						</>
					)}
					{posts.length === 0 && users?.length === 0 && (
						<SearchTotalTxt>
							<SearchInfoTxt>{`모든 키워드를 검색할 수 있어요`}</SearchInfoTxt>
							<SearchSUbTxt>{`예) 닉네임, 커뮤니티 글 제목, 내용 등`}</SearchSUbTxt>
						</SearchTotalTxt>
					)}
				</ContentBox>
			</c.ScreenComponent>
		</c.Totalframe>
	);
};
export default Search;
