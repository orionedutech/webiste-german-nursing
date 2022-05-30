import { faqData } from "./data";

import "./faq.css";

const FAQPage = () => {
  return (
    <div className="one-view">
      <div className="page-title">
        <h1>FAQ</h1>
      </div>

      {faqData.map((item, i) => {
        return (
          <div className="one-view-sub">
            <h4>
              {i + 1}. {item.question}
            </h4>
            <p className="one-view-sub-p">{item.answer}</p>
            {item.points && item.points.map(item2 => {
                return(
                    <li className="one-view-sub-p" >{item2}</li>
                )
            })}
          </div>
        );
      })}
    </div>
  );
};

export default FAQPage;
