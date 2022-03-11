import "./textCardWithList.css";

const TextCardWithList = ({ title, data1, singleCard }) => {
  return (
    <>
      <div className="section-container bg-gray-lite">
        <div className="section-title-cont">
          <hr className="section-title-line" />
          <h3 className="section-title">{title}</h3>
        </div>

        {singleCard ? (
          <div className="card-holder">
            <div className="card-landscape wide-text-card">
              {data1.map((item) => {
                return (
                  <>
                    <h5 className="card-sub-title wc-title wc-title-singleCard">{item.title}</h5>
                    <ul className="p-text">
                      {item.data.map((itemin) => {
                        return (
                          <>
                            <li>{itemin.title}</li>
                            {itemin.data && (
                              <ul className="innerUlList">
                                {itemin.data.map((a) => {
                                  return <li>{a}</li>;
                                })}
                              </ul>
                            )}
                          </>
                        );
                      })}
                    </ul>
                  </>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="card-holder">
            {data1.map((item) => {
              return (
                <div className="card-landscape wide-text-card">
                  <h5 className="card-sub-title wc-title">{item.title}</h5>
                  <ul className="p-text">
                    {item.data.map((itemin) => {
                      return (
                        <>
                          <li>{itemin.title}</li>
                          {itemin.data && (
                            <ul className="innerUlList">
                              {itemin.data.map((a) => {
                                return <li>{a}</li>;
                              })}
                            </ul>
                          )}
                        </>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default TextCardWithList;

