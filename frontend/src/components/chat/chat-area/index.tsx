// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ChatArea = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // -1 navigates back to the previous page
  };

  // const [open, setOpen] = useState(false);
  // const handleOpen = () => {
  //   setOpen(!open);
  // };

  return (
    <>
      <main className="chat">
        <div className="page-title">
          <button
            type="button"
            onClick={handleBack}
            className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
          >
            <img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
          </button>
          <h3 className="main-title ellipsis">
            Richar Kandowend, djklfsjdklf, d,mljdklf ,jkfldjklf
          </h3>

          <div className="more d-flex align-items-center justify-content-around">
            <div className="member-count">
              <p>2</p>
            </div>
            <Link to="/user-info">
              <img src="/assets/svg/more.svg" alt="arrow" />
            </Link>
            {/* <button
              type="button"
              onClick={() => handleOpen()}
              className={`more-btn d-flex align-items-center justify-content-center rounded-full ${
                open ? "show" : ""
              }`}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="/assets/svg/more.svg" alt="arrow" />
            </button> */}
          </div>
        </div>

        <section className="inbox px-24">
          <ul>
            {/* ================상대방이 보낸 메세지=================== */}
            <li className="left d-flex gap-12">
              <div className="avatar position-relative">
                <img
                  src="/assets/images/chat/img-1.png"
                  alt="Avatar"
                  className="w-100 img-fluid h-100 object-fit-cover rounded-full"
                />
                {/* <span className="active-dot rounded-full d-inline-block"></span> */}
              </div>

              <div className="text">
                <p className="msg">무서운 이야기 좀 누가 해줘</p>
              </div>
              <div className="msg-info">
                <p className="read-count pt-04">1</p>
                <p className="time pt-04">15:42 PM</p>
              </div>
            </li>

            {/* ======================================================== */}

            {/* ================내가 보낸 메세지========================== */}
            <li className="right d-flex flex-row-reverse gap-12">
              {/* 
							<div className="avatar position-relative">
								<img
									src="/assets/images/chat/img-1.png"
									alt="Avatar"
									className="w-100 img-fluid h-100 object-fit-cover rounded-full"
								/>
								<span className="active-dot rounded-full d-inline-block"></span>
							</div>
							*/}
              <div className="text">
                <p className="msg">
                  옛날에 아주 무서운 귀신이 있었은 그냥 있었은 딱히 뭘 하진
                  않았은
                </p>
              </div>
              <div className="msg-info">
                <p className="read-count pt-04">1</p>
                <p className="time pt-04">15:42 PM</p>
              </div>
            </li>

            {/* ========================================== */}

            <li className="left d-flex gap-12">
              <div className="avatar position-relative">
                <img
                  src="/assets/images/chat/img-1.png"
                  alt="Avatar"
                  className="w-100 img-fluid h-100 object-fit-cover rounded-full"
                />
              </div>

              <div className="text">
                <p className="msg">
                  Lorem ipsum dolor sit et, consectetur adipiscing.
                </p>
              </div>
              <div className="msg-info">
                <p className="read-count pt-04">1</p>
              </div>
            </li>

            <li className="left d-flex gap-12">
              <div className="avatar position-relative">
                {/* <img
                  src="/assets/images/chat/img-1.png"
                  alt="Avatar"
                  className="w-100 img-fluid h-100 object-fit-cover rounded-full"
                />
                <span className="active-dot rounded-full d-inline-block"></span> */}
              </div>

              <div className="text">
                <p className="msg">
                  Lorem ipsum dolor sit et, consectetur adipiscing.
                </p>
              </div>
              <div className="msg-info">
                <p className="read-count pt-04">1</p>
                <p className="time pt-04">15:42 PM</p>
              </div>
            </li>

            {/* ================내가 보낸 메세지========================== */}
            <li className="right d-flex flex-row-reverse gap-12">
              {/* 
							<div className="avatar position-relative">
								<img
									src="/assets/images/chat/img-1.png"
									alt="Avatar"
									className="w-100 img-fluid h-100 object-fit-cover rounded-full"
								/>
								<span className="active-dot rounded-full d-inline-block"></span>
							</div>
							*/}
              <div className="text">
                <p className="msg">내가 보낸 메세지</p>
              </div>
              <div className="msg-info">
                <p className="read-count pt-04">1</p>
              </div>
            </li>

            <li className="right d-flex flex-row-reverse gap-12">
              {/* 
							<div className="avatar position-relative">
								<img
									src="/assets/images/chat/img-1.png"
									alt="Avatar"
									className="w-100 img-fluid h-100 object-fit-cover rounded-full"
								/>
								<span className="active-dot rounded-full d-inline-block"></span>
							</div>
							*/}
              <div className="text">
                <p className="msg">내가 보낸 메세지</p>
              </div>
              <div className="msg-info">
                <p className="read-count pt-04">1</p>
                <p className="time pt-04">15:42 PM</p>
              </div>
            </li>
            {/* ========================================== */}

            {/* <li className="left d-flex gap-12">
              <div className="avatar position-relative">
                <img
                  src="/assets/images/chat/img-1.png"
                  alt="Avatar"
                  className="w-100 img-fluid h-100 object-fit-cover rounded-full"
                />
                <span className="active-dot rounded-full d-inline-block"></span>
              </div>

              <div className="text">
                <p className="msg">
                  Lorem ipsum dolor sit et, consectetur adipiscing.
                </p>
                <p className="time pt-04">15:42 PM</p>
              </div>
            </li>

            <li className="right d-flex flex-row-reverse gap-12">
              <div className="avatar position-relative">
                <img
                  src="/assets/images/chat/img-1.png"
                  alt="Avatar"
                  className="w-100 img-fluid h-100 object-fit-cover rounded-full"
                />
                <span className="active-dot rounded-full d-inline-block"></span>
              </div>

              <div className="text">
                <p className="msg">
                  Lorem ipsum dolor sit et, consectetur adipiscing.
                </p>
                <p className="time pt-04">15:42 PM</p>
              </div>
            </li> */}
          </ul>
        </section>

        <section className="type-msg">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="d-flex align-items-center gap-8 type-main">
              <label htmlFor="input-file" className="input-file-label shrink-0">
                <input type="file" id="input-file" />
                <span className="d-flex align-items-center justify-content-center rounded-full">
                  <img src="/assets/svg/paperclip.svg" alt="icon" />
                </span>
              </label>

              <input
                type="text"
                placeholder="Message"
                className="flex-grow input-msg"
              />

              <button
                type="button"
                className="d-flex align-items-center justify-content-center rounded-full shrink-0"
              >
                <img src="/assets/svg/send.svg" alt="icon" />
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default ChatArea;
