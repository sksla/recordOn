import { Link, useNavigate } from "react-router-dom";

const EditChatArea = () => {
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
          <h3 className="main-title">채팅방 편집</h3>
        </div>

        {/* 여기에도 GroupAvatar 컴포넌트 쓸 수 있음 좋겠다.... 만든다면 */}
        <section className="profile-image py-16">
          <div className="image">
            <img
              src="/assets/images/profile/avatar.png"
              alt="avatar"
              className="w-100 h-100 object-fit-cover img-fluid rounded-full"
            />
            <button
              type="button"
              className="d-flex align-items-center justify-content-center rounded-full"
              data-bs-toggle="modal"
              data-bs-target="#editImageModal"
            >
              <img src="/assets/svg/edit-white.svg" alt="icon" />
            </button>
          </div>
        </section>

        <section className="user-info px-24">
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
            <label className="input-label">닉네임</label>
            <input
              type="text"
              placeholder="Last Name"
              className="input"
              value="닉네임"
            />
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
          <Link to="/user-profile" className="btn-primary">
            변경 내용 저장
          </Link>
        </div>

        <div className="py-32">
          <button
            type="button"
            className="btn-secondary-outline"
            data-bs-toggle="modal"
            data-bs-target="#logOutModal"
          >
            Log Out
          </button>
        </div>
      </main>
    </>
  );
};

export default EditChatArea;
