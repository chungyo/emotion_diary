import './DiaryList.css';
import Button from "./Button.jsx";
import DiaryItem from "./DiaryItem.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const DiaryList = ({data}) => {
    const nav = useNavigate();
    const [sortType, setSortType] = useState("latest");

    const onChangeSortType = (e) => {
        setSortType(e.target.value)
    }

    const getSortedData = () => {
        // toSorted를 쓰는 이유는 그냥 sort를 사용하면 원본 데이터를 변경하기 때문입니다.
        return data.toSorted((a,b) => {
            if(sortType ==="latest"){
                return Number(b.createdDate) - Number(a.createdDate)
            }
            else{
                return Number(a.createdDate) - Number(b.createdDate)
            }
        })
    }

    const sortedData = getSortedData()

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button
                    onClick={() => nav("/new")}
                    text={"새 일기 쓰기"}
                    type={"POSITIVE"}
                />
            </div>
            <div className="list_wrapper">
                {sortedData.map ((item) => <DiaryItem key={item.id} {...item}/>)}
            </div>
        </div>
    )
}

export default DiaryList