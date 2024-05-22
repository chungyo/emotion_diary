import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App.jsx";
import {useNavigate} from "react-router-dom";

const useDiary = (id) => {
    const nav = useNavigate();
    const data = useContext(DiaryStateContext);
    const [currentDiaryItem, setCurrentDiaryItem] = useState();

    // useEffect를 사용하여 현재 일기 데이터를 찾아서 currentDiaryItem에 저장합니다.
    useEffect(() => {
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(id)
        );
        if (!currentDiaryItem) {
            window.alert("해당 일기를 찾을 수 없습니다.");
            nav("/");
        }

        setCurrentDiaryItem(currentDiaryItem);
    }, [id, data]);

    return currentDiaryItem;
}

export default useDiary