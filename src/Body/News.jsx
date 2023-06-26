import { useEffect, useState } from "react";
import { getArticles } from "../services/apiService";
import { useParams } from "react-router-dom";
import DataList from "./DataList";
import { useSelector, useDispatch } from "react-redux";
import { setErrorMessage } from "../services/stateService";

function News({ setInfo, info }) {
  const dispatch = useDispatch();

  const searchData = useSelector((state) => state.searchData);

  const [dataList, setDataList] = useState(null);
  const [page, setPage] = useState(1);

  const { keyword } = useParams();

  useEffect(() => {
    getArticles({
      ...searchData,
      articlesPage: page,
      ...(keyword ? { keyword } : {}),
    })
      .then(({ articles, info }) => {
        articles &&
          setDataList(
            dataList ? [...dataList, ...articles.results] : articles.results
          );
        info ? setInfo(info) : setInfo(null);
      })
      .catch((error) => dispatch(setErrorMessage(error.toString())));
  }, [setDataList, setInfo, page, keyword, searchData, dispatch]);

  return (
    <DataList info={info} dataList={dataList} page={page} setPage={setPage} />
  );
}

export default News;
