import { /*Link,*/ useNavigate } from "react-router-dom";
import Footer from "../../../../layouts/footers/Footer";

const FriendList = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // -1 navigates back to the previous page
  };

  return (
    <>
      <main>
        <div className="page-title">
          <button
            type="button"
            onClick={handleBack}
            className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
          >
            <img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
          </button>
          <h3 className="main-title">친구</h3>

          <div className="more d-flex align-items-center justify-content-around">
            {/* <Link to="/search-friend"> */}
            <img src="/assets/svg/user-plus-alt-1.svg" alt="user-plus" />
            {/*</Link> */}
          </div>
        </div>

        {/* 검색창 */}
        <section className="friend-main search px-24">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="friend-search w-100 d-flex align-items-center gap-8 radius-24">
              <img
                src="/assets/svg/search.svg"
                alt="search"
                className="shrink-0"
              />
              <input
                type="search"
                className="input-search input-field"
                placeholder="Search..."
              />
            </div>
          </form>
        </section>

        {/* 친구 목록 */}
        <div className="list-count mt-24 px-24">
          <h4 className="mb-16">친구</h4>
        </div>

        <section className="friend-list mt-16 px-24">
          {/* ======friend item ==================== */}
          <div className="friend-item d-flex justify-content-between align-items-center position-relative">
            <div className="friend-info">
              <div className="shrink-0 d-flex justify-content-reverse align-items-center gap-12">
                <div className="image shrink-0 position-relative">
                  <img
                    src="/assets/images/chat/img-3.png"
                    alt="Avatar"
                    className="img-fluid w-100 h-100 object-fit-cover rounded-full"
                  />
                </div>
                <div className="me rounded-full hide">
                  <p>나</p>
                </div>
                <div className="text">
                  <h4>Chris Offile</h4>
                  <p>Adipisicing elit. Asperiores, laboriosam...</p>
                </div>
              </div>
            </div>

            <div className="checkbox hide">
              <input type="checkbox"></input>
            </div>
          </div>
          {/* ======friend item end ==================== */}
          {/* ======friend item ==================== */}
          <div className="friend-item d-flex justify-content-between align-items-center position-relative">
            <div className="friend-info">
              <div className="shrink-0 d-flex justify-content-reverse align-items-center gap-12">
                <div className="image shrink-0 position-relative">
                  <img
                    src="/assets/images/chat/img-3.png"
                    alt="Avatar"
                    className="img-fluid w-100 h-100 object-fit-cover rounded-full"
                  />
                </div>
                <div className="me rounded-full hide">
                  <p>나</p>
                </div>
                <div className="text">
                  <h4>Chris Offile</h4>
                  <p>Adipisicing elit. Asperiores, laboriosam...</p>
                </div>
              </div>
            </div>

            <div className="checkbox hide">
              <input type="checkbox"></input>
            </div>
          </div>
          {/* ======friend item end ==================== */}
          {/* ======friend item ==================== */}
          <div className="friend-item d-flex justify-content-between align-items-center position-relative">
            <div className="friend-info">
              <div className="shrink-0 d-flex justify-content-reverse align-items-center gap-12">
                <div className="image shrink-0 position-relative">
                  <img
                    src="/assets/images/chat/img-3.png"
                    alt="Avatar"
                    className="img-fluid w-100 h-100 object-fit-cover rounded-full"
                  />
                </div>
                <div className="me rounded-full hide">
                  <p>나</p>
                </div>
                <div className="text">
                  <h4>Chris Offile</h4>
                  <p>Adipisicing elit. Asperiores, laboriosam...</p>
                </div>
              </div>
            </div>

            <div className="checkbox hide">
              <input type="checkbox"></input>
            </div>
          </div>
          {/* ======friend item end ==================== */}
          {/* ======friend item ==================== */}
          <div className="friend-item d-flex justify-content-between align-items-center position-relative">
            <div className="friend-info">
              <div className="shrink-0 d-flex justify-content-reverse align-items-center gap-12">
                <div className="image shrink-0 position-relative">
                  <img
                    src="/assets/images/chat/img-3.png"
                    alt="Avatar"
                    className="img-fluid w-100 h-100 object-fit-cover rounded-full"
                  />
                </div>
                <div className="me rounded-full hide">
                  <p>나</p>
                </div>
                <div className="text">
                  <h4>Chris Offile</h4>
                  <p>Adipisicing elit. Asperiores, laboriosam...</p>
                </div>
              </div>
            </div>

            <div className="checkbox hide">
              <input type="checkbox"></input>
            </div>
          </div>
          {/* ======friend item end ==================== */}
        </section>

        {/* <button
          type="button"
          className="add-chat d-flex align-items-center justify-content-center rounded-full"
        >
          <img src="/assets/svg/plus-white.svg" alt="plus" />
        </button> */}
      </main>
      <Footer />
    </>
  );
};

export default FriendList;
