import moment from "moment";

const apiUrl = 'http://eventregistry.org/api/v1';

const apiKey = process.env.REACT_APP_API_KEY;

export const defaultData = {
    keyword: 'Elon Musk',
    resultType: "articles",
    articlesSortBy: "date",
    dataType: "news",
    lang: "eng",
    dateStart: moment().subtract(1, 'month').format('YYYY-MM-DD'),
    articlesCount: 12,
};

export async function getArticles(params = {}) {
    const urlParams = new URLSearchParams({ ...defaultData, ...params, apiKey });

    const response = await fetch(`${apiUrl}/article/getArticles?${urlParams}`);

    if (!response.ok) {
        throw new Error('Error in response, status code: ' + response.status);
    }

    const data = await response.json();

    if (data.error) {
        throw new Error('Api error: ' + data.error);
    }

    return data;
}
