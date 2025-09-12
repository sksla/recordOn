// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import BirthModal from "../../../modals/BirthModal";

const UserInfo = () => {
  // const [showBirthModal, setShowBirthModal] = useState(false);
  // const handleShowBirthModal = () => {
  //   setShowBirthModal(!showBirthModal);
  // };

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
          <h3 className="main-title">프로필 편집</h3>
        </div>

        <section className="profile-image py-16">
          <div className="image">
            <img
              src="/assets/images/profile/avatar.png"
              alt="avatar"
              className="w-100 h-100 object-fit-cover img-fluid rounded-full"
            />
            <label
              htmlFor="fileUpload"
              className="d-flex align-items-center justify-content-center rounded-full"
            >
              <img src="/assets/svg/edit-white.svg" alt="icon" />
            </label>

            <input type="file" id="fileUpload" accept="image/*" hidden />
          </div>
        </section>

        <section className="user-info px-24">
          <div className="mb-16">
            <label className="input-label">계정(아이디)</label>
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
          {/* <div className="mb-16">
            <label className="input-label">E-mail</label>
            <input type="email" placeholder="E-mail" className="input" />
          </div> */}
          {/* <div className="mb-16">
            <label className="input-label">Date of Birth</label>
            <div className="dob position-relative d-flex align-items-center">
              <input
                type="text"
                placeholder="Date of Birth"
                className="input"
                id="dobdate"
              />
              <button
                type="button"
                onClick={handleShowBirthModal}
                data-bs-toggle="modal"
                data-bs-target="#dateOfBirthModal"
              >
                <img src="/assets/svg/calendar-blue.svg" alt="icon" />
              </button>
            </div>
          </div> */}

          {/* <div className="mb-16">
            <label className="input-label">Gender</label>
            <div className="grid">
              <label
                htmlFor="male"
                className="custom-check-container gender-container"
              >
                <input type="radio" name="gender" id="male" defaultChecked />
                Male
                <span className="checkmark"></span>
              </label>
              <label
                htmlFor="female"
                className="custom-check-container gender-container"
              >
                <input type="radio" name="gender" id="female" />
                Female
                <span className="checkmark"></span>
              </label>
            </div>
          </div> */}

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
      </main>

      {/* <BirthModal
        showBirthModal={showBirthModal}
        handleShowBirthModal={handleShowBirthModal}
      /> */}
    </>
  );
};

export default UserInfo;
