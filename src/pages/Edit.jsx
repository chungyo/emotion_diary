import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import {useContext} from "react";
import {DiaryDispatchContext} from "../App";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {

    const params = useParams();
    const nav = useNavigate();
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);

    const currentDiaryItem = useDiary(params.id);

    usePageTitle(`${params.id}번 일기 수정`)

    const onClickDelete = () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            onDelete(Number(params.id));
            nav('/', {replace: true});
        }
    }

    const onSubmit = (input) => {
        if (window.confirm("수정하시겠습니까?")) {
            onUpdate(
                params.id,
                input.createdDate.getTime(),
                input.emotionId,
                input.content
            );
            nav('/', {replace: true});
        }
    }


    return (
        <div>
            <Header
                title={"일기 수정하기"}
                leftChild={
                    <Button
                        onClick={() => nav(-1)}
                        text={"< 뒤로 가기"}
                    />
                }
                rightChild={
                    <Button
                        onClick={onClickDelete}
                        text={"삭제하기"}
                        type={"NEGATIVE"}
                    />
                }
            />
            <Editor initData={currentDiaryItem} onSubmit={onSubmit}/>
        </div>
    )
}

export default Edit
