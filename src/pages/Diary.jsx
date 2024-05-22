import {useParams, useNavigate} from "react-router-dom";
import Header from "../components/Header.jsx";
import Viewer from "../components/Viewer.jsx";
import Button from "../components/Button.jsx";
import useDiary from "../hooks/useDiary";
import getStringedDate from "../util/get-stringed-date.js";
import usePageTitle from "../hooks/usePageTitle.jsx";

const Diary = () => {
    const nav = useNavigate();
    const params = useParams();

    const currentDiaryItem = useDiary(params.id);

    usePageTitle(`${params.id}번 일기`)

    if(!currentDiaryItem) {
        return <div>데이터 로딩중....!</div>
    }

    const {createdDate, emotionId, content} = currentDiaryItem;

    const title= getStringedDate(new Date(createdDate));

    return (
        <div>
            <Header
                title={title}
                leftChild={
                    <Button
                        onClick={() => nav(-1)}
                        text={"< 뒤로 가기"}
                    />
                }
                rightChild={
                    <Button
                        onClick={()=>nav(`/edit/${params.id}`)}
                        text={"수정하기"}
                    />
                }
            />
            <Viewer emotionId={emotionId} content={content}>
            </Viewer>
        </div>
    )
}

export default Diary