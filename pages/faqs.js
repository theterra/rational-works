import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import MetaContent from "../components/MetaContent";
import { getContentUrl } from "../components/common/getContentUrl";

import { getFaqsAPI } from "../api";

import "./faqs.scss";

const Faqs = ({ data }) => {
  const [contentUrl] = getContentUrl();
  const [tab, tabHandler] = useState(null);

  const openHandler = idx => {
    tabHandler(tab == idx ? null : idx);
  };

  const questionList = data.questions_list || [];

  return (
    <Layout circle paddingTop={"7rem"}>
      <MetaContent
        contentType={"article"}
        contentTitle={"Be a rationalist"}
        contentDescription={
          "1% people run the world while other 99% follows it. We help you to be in that 1%."
        }
        contentImage={"/static/assets/images/logo.png"}
        contentUrl={contentUrl}
      />
      <section className="section__questions">
        <div className="questions">
          <div className="questions__main-title">
            <span>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 28 28"
                className="questions__icon"
              >
                <path d="M11 6c-4.875 0-9 2.75-9 6 0 1.719 1.156 3.375 3.156 4.531l1.516 0.875-0.547 1.313c0.328-0.187 0.656-0.391 0.969-0.609l0.688-0.484 0.828 0.156c0.781 0.141 1.578 0.219 2.391 0.219 4.875 0 9-2.75 9-6s-4.125-6-9-6zM11 4c6.078 0 11 3.578 11 8s-4.922 8-11 8c-0.953 0-1.875-0.094-2.75-0.25-1.297 0.922-2.766 1.594-4.344 2-0.422 0.109-0.875 0.187-1.344 0.25h-0.047c-0.234 0-0.453-0.187-0.5-0.453v0c-0.063-0.297 0.141-0.484 0.313-0.688 0.609-0.688 1.297-1.297 1.828-2.594-2.531-1.469-4.156-3.734-4.156-6.266 0-4.422 4.922-8 11-8zM23.844 22.266c0.531 1.297 1.219 1.906 1.828 2.594 0.172 0.203 0.375 0.391 0.313 0.688v0c-0.063 0.281-0.297 0.484-0.547 0.453-0.469-0.063-0.922-0.141-1.344-0.25-1.578-0.406-3.047-1.078-4.344-2-0.875 0.156-1.797 0.25-2.75 0.25-2.828 0-5.422-0.781-7.375-2.063 0.453 0.031 0.922 0.063 1.375 0.063 3.359 0 6.531-0.969 8.953-2.719 2.609-1.906 4.047-4.484 4.047-7.281 0-0.812-0.125-1.609-0.359-2.375 2.641 1.453 4.359 3.766 4.359 6.375 0 2.547-1.625 4.797-4.156 6.266z" />
              </svg>
            </span>
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="questions__list">
            {Array.isArray(questionList) &&
              questionList.map((item, index) => (
                <QuestionCard
                  item={item}
                  tab={tab}
                  index={index}
                  openHandler={openHandler}
                  key={index}
                />
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

const QuestionCard = ({ item, tab, openHandler, index }) => {
  const question = item.question.length ? item.question[0].text : "";
  const answer = item.answer.length ? item.answer[0].text : "";
  return (
    <div className="questions__list__item" onClick={() => openHandler(index)}>
      <div className="questions__list__item--question">
        <h3>{question}</h3>
        <Icon isActive={tab === index} />
      </div>
      {tab === index && (
        <div className="questions__list__item--answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Icon = ({ isActive }) => {
  return isActive ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path
        fill="#010101"
        d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
      />
    </svg>
  );
};

Faqs.getInitialProps = async () => {
  const response = await getFaqsAPI();
  console.log(response);
  return {
    data: response.results[0].data
  };
};

export default Faqs;
