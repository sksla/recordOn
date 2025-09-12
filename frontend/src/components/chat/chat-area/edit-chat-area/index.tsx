//import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
//import Button from "react-bootstrap/Button";

const EditChatArea = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // -1 navigates back to the previous page
  };

  // const fileInputRef = useRef(null);

  // const clickFileEditBtn = () => {
  //   fileInputRef.current.click();
  // };

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
          <h3 className="main-title">채팅방 편집</h3>
        </div>

        {/* 정 안되면 단체 체팅방용 기본 프로필로 하자 */}
        {/* 여기에도 GroupAvatar 컴포넌트 쓸 수 있음 좋겠다.... 만든다면 */}
        <section className="profile-image py-16">
          <div className="image">
            <div className="image-group count-1">
              <img
                src="/assets/images/profile/avatar.png"
                alt="avatar"
                className="object-fit-cover img-fluid rounded-full"
              />
              <img
                src="/assets/images/profile/avatar.png"
                alt="avatar"
                className="object-fit-cover img-fluid rounded-full"
              />
            </div>
            {/* <img
              src="/assets/images/profile/avatar.png"
              alt="avatar"
              className="w-100 h-100 object-fit-cover img-fluid rounded-full"
            /> */}

            <label
              htmlFor="fileUpload"
              className="d-flex align-items-center justify-content-center rounded-full"
            >
              <img src="/assets/svg/edit-white.svg" alt="icon" />
            </label>

            <input type="file" id="fileUpload" accept="image/*" hidden />
          </div>
        </section>

        {/* 채팅방 정보 */}
        <section className="info-chat-room px-24">
          <div className="mb-16">
            <label className="input-label">채팅방명</label>
            <input
              type="text"
              placeholder="First Name"
              className="input"
              value="example@recordon.com"
              disabled
            />
          </div>
          <div className="mb-16">
            <h4 className="mb-16">대화 상대 목록</h4>
            {/* 여기에는 대화상대 목록이 떴음 좋겠네.... 아래는 임시 이걸로 친구 목록 아이템 컴포넌트화 가능할 듯 */}
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
                    {/* <p>Adipisicing elit. Asperiores, laboriosam...</p> */}
                  </div>
                </div>
              </div>

              <div className="checkbox hide">
                <input type="checkbox"></input>
              </div>
            </div>
          </div>

          <div>
            <label className="input-label">상태메세지</label>
            <textarea
              id="myTextarea"
              placeholder="상태메세지를 입력하세요.(60자 이내)"
              className="input"
            ></textarea>
          </div>
        </section>

        <div className="save-btn mt-64 px-24 mb-32">
          <Link to="" className="btn-primary">
            변경 내용 저장
          </Link>
        </div>
      </main>
    </>
  );
};

export default EditChatArea;
