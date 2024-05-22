import {useNavigate} from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import {useContext, useEffect} from "react";
import {DiaryDispatchContext} from "../App";
import usePageTitle from "../hooks/usePageTitle";

const New = () => {
    const nav = useNavigate();
    const {onCreate} = useContext(DiaryDispatchContext);
    usePageTitle("새 일기 쓰기");


    const onSubmit = (input) => {
        onCreate(
            input.createdDate.getTime(),
            input.emotionId,
            input.content
        );
        nav('/',{replace: true});
    }

    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
            />
            <Editor onSubmit={onSubmit} />
        </div>
    )
}

export default New