import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ChatAreaInfo = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // -1 navigates back to the previous page
  };

  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("example@recordon.com");

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    // 서버 저장 로직이 들어갈 수 있음
    setIsEditing(false);
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
          <h3 className="main-title">채팅방 설정</h3>
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
          <div className="mb-16 mt-24 bt-border">
            <h4 className="mb-16">채팅방명</h4>
            <div className="edit-before mt-16 d-flex justify-content-between">
              <input
                type="text"
                className="input"
                placeholder="First Name"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={!isEditing}
              />
              <div className="d-flex align-item-center gap-2">
                {isEditing ? (
                  <>
                    <button
                      type="button"
                      onClick={handleSave}
                      className="btn btn-primary"
                    >
                      저장
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="btn btn-secondary"
                    >
                      취소
                    </button>
                  </>
                ) : (
                  <button type="button" onClick={handleEdit}>
                    <img src="/assets/svg/edit.svg" alt="edit icon" />
                  </button>
                )}
              </div>
            </div>

            {/* 모달 띄우는 버전 */}
            {/* <div className="mt-16 d-flex justify-content-between">
              <input
                type="text"
                placeholder="First Name"
                className="input"
                value="example@recordon.com"
                disabled
              />
              <div className="d-flex align-item-center">
                
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#editChatRoomNameModal"
                >
                  <img src="/assets/svg/edit.svg" alt="icon" />
                </button>
              </div>
            </div> */}
          </div>

          <div className="mb-16 mt-16 bt-border">
            <h4 className="mb-16">대화 상대</h4>

            <div className="add-chat-person">
              <div className="friend-item d-flex justify-content-between align-items-center position-relative">
                <div className="friend-info">
                  <div className="shrink-0 w-100 d-flex justify-content-reverse align-items-center gap-12">
                    <div className="image shrink-0 position-relative">
                      <img
                        src="/assets/svg/plus-square.svg"
                        alt="Avatar"
                        className="img-fluid w-100 h-100 object-fit-cover"
                      />
                    </div>
                    <div className="me rounded-full hide">
                      <p>나</p>
                    </div>
                    <div className="text">
                      <h4>초대하기</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 여기에는 대화상대 목록이 떴음 좋겠네.... 아래는 임시 이걸로 친구 목록 아이템 컴포넌트화 가능할 듯 */}
            <div className="friend-list">
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
                    <div className="me rounded-full">
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
          </div>

          <div className="out-chat-room">
            <h4>채팅방 나가기</h4>
          </div>
        </section>

        {/* <div className="save-btn mt-16 px-24">
          <Link to="" className="btn-primary">
            변경 내용 저장
          </Link>
        </div> */}
      </main>

      <div
        className="modal fade"
        id="editChatRoomNameModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                모달 제목
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">여기 모달 내용이 들어갑니다.</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                닫기
              </button>
              <button type="button" className="btn btn-primary">
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatAreaInfo;
