import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { setSearchData, setDataList } from "../services/stateService";
import { useDispatch, useSelector } from "react-redux";
import { defaultData } from "../services/apiService";

function SearchForm({ closeSideBar }) {
  console.log("SearchForm");
  const dispatch = useDispatch();

  const searchData = useSelector((state) => state.searchData);
  const [articlesSortDisabled, setArticlesSortDisabled] = useState(false);

  const resultType = [
    "articles",
    "uriWgtList",
    "langAggr",
    "timeAggr",
    "sourceAggr",
    "sourceExAggr",
    "authorAggr",
    "keywordAggr",
    "locAggr",
    "conceptAggr",
    "conceptGraph",
    "categoryAggr",
    "dateMentionAggr",
    "sentimentAggr",
    "recentActivityArticles",
  ];

  const articlesSortBy = [
    "date",
    "rel",
    "sourceImportance",
    "sourceAlexaGlobalRank",
    "sourceAlexaCountryRank",
    "socialScore",
    "facebookShares",
  ];

  const dataType = ["news", "pr", "blog"];

  const languages = [
    {
      label: "English",
      value: "eng",
    },
    {
      label: "Eesti",
      value: "est",
    },
    {
      label: "Русский",
      value: "rus",
    },
    {
      label: "日本語",
      value: "jpn",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      keyword: event.target.keyword.value,
      resultType: event.target.resultType.value,
      articlesSortBy: event.target.articlesSortBy.value,
      dataType: event.target.dataType.value,
      lang: event.target.lang.value,
      dateStart: event.target.dateStart.value,
      dateEnd: event.target.dateEnd.value,
    };

    dispatch(setSearchData(data));
    dispatch(setDataList(null));

    closeSideBar();
  };

  const handleResultTypeChange = (event) => {
    if (event.target.value !== "articles") {
      setArticlesSortDisabled(true);
    } else {
      setArticlesSortDisabled(false);
    }
  };

  const handleRestore = () => {
    dispatch(setSearchData({}));
    closeSideBar();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Keywords</Form.Label>
          <Form.Control
            type="text"
            name="keyword"
            defaultValue={searchData?.keyword || defaultData.keyword}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Result Type</Form.Label>
          <Form.Select
            name="resultType"
            onChange={handleResultTypeChange}
            defaultValue={searchData?.resultType  || defaultData.resultType}
          >
            {resultType.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Articles Sort by</Form.Label>
          <Form.Select
            name="articlesSortBy"
            disabled={articlesSortDisabled}
            defaultValue={searchData?.articlesSortBy || defaultData.articlesSortBy}
          >
            {articlesSortBy.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Data type</Form.Label>
          {dataType.map((type) => (
            <Form.Check
              type="radio"
              label={type}
              key={type}
              name="dataType"
              value={type}
              defaultChecked={searchData.dataType?.includes(type) || defaultData.dataType?.includes(type)}
            />
          ))}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Language</Form.Label>
          <Form.Select name="lang" defaultValue={searchData?.lang || defaultData.lang}>
            {languages.map(({ value, label }) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date start</Form.Label>
          <Form.Control
            type="date"
            name="dateStart"
            defaultValue={searchData?.dateStart || defaultData.dateStart}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date end</Form.Label>
          <Form.Control
            type="date"
            name="dateEnd"
            defaultValue={searchData?.dateEnd || defaultData.dateEnd}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Search
        </Button>

        <Button variant="light" className="w-100 mt-3" onClick={handleRestore}>
          Restore
        </Button>
      </Form>
    </>
  );
}

export default SearchForm;
