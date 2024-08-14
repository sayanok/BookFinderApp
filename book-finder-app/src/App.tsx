import axios from "axios";
import React, { useState } from "react";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [resultList, setResultList] = useState<Array<any>>([]);
  const [result, setResult] = useState<string>("");

  function search() {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + inputValue).then(function (response) {
      setResultList(response.data.items);
    });
    setResult("検索結果");
  }

  return (
    <>
      <input
        placeholder={"本のタイトルや著者を入力してください"}
        size={50}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={() => search()}>検索する</button>
      <div>結果を表示する</div>
      <p>{result}</p>
      <div>
        {resultList.map((data) => (
          <>
            <p>タイトル：{data.volumeInfo.title}</p>
            {data.volumeInfo.imageLinks ? (
              <img src={data.volumeInfo.imageLinks.smallThumbnail} />
            ) : (
              "イメージが存在しません"
            )}
            <p>著者：{data.volumeInfo.authors || "データが存在しません"}</p>
            {console.log(data.volumeInfo)}
            <p>発行日：{data.volumeInfo.publishedDate || "データが存在しません"}</p>
            <hr></hr>
          </>
        ))}
      </div>
    </>
  );
};

export default App;
