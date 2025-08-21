import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../layouts/footers/Footer";
import LogOutModal from "../../../modals/LogOutModal";
import ScrollTop from "../../common/ScrollTop";

const UserProfile = () => {
  useEffect(() => {
    const chk: HTMLInputElement | null = document.getElementById(
      "check-mode"
    ) as HTMLInputElement;
    const modeChk: HTMLInputElement | null = document.getElementById(
      "mode-change"
    ) as HTMLInputElement;

    const toggleDarkMode = (darkModeStatus: boolean): void => {
      document.body.classList.toggle("dark-mode", darkModeStatus);
    };

    const changeHandler = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const darkModeStatus = target.checked;
      toggleDarkMode(darkModeStatus);
      localStorage.setItem("darkModeStatus", darkModeStatus.toString());
      modeChk.checked = darkModeStatus;
    };

    if (chk) {
      chk.addEventListener("change", changeHandler);

      const storedDarkModeStatus = localStorage.getItem("darkModeStatus");
      if (storedDarkModeStatus === "true") {
        toggleDarkMode(true);
        chk.checked = true;
      }
    }

    if (modeChk) {
      modeChk.addEventListener("change", changeHandler);

      const storedDarkModeStatus = localStorage.getItem("darkModeStatus");
      if (storedDarkModeStatus === "true") {
        toggleDarkMode(true);
        modeChk.checked = true;
      }
    }

    // Clean-up
    return () => {
      if (chk) chk.removeEventListener("change", changeHandler);
      if (modeChk) modeChk.removeEventListener("change", changeHandler);
    };
  }, []);

  const [showModal, setShowModal] = useState(false);
  const handleLogout = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <ScrollTop />
      <main className="user-profile">
        <section className="user-profile-heading d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-12">
            <div className="image rounded-full overflow-hidden shrink-0">
              <img
                src="/assets/images/profile/avatar.png"
                alt="avatar"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
            <div>
              <h3>Andy Lexsian(닉네임)</h3>
              <p className="d-flex align-items-center gap-04 location mt-04">
                <img src="/assets/svg/map-marker.svg" alt="icon" />
                Uttar Pradesh, India (아이디)
              </p>
              <p className="d-flex align-items-center gap-04 location mt-04">
                <img src="/assets/svg/map-marker.svg" alt="icon" />
                회원 코드 :00000001
              </p>
            </div>
          </div>

          <Link to="/user-info" className="edit-info">
            <img src="/assets/svg/edit.svg" alt="icon" />
          </Link>
        </section>

        <section className="user-personal">
          <div className="mt-32">
            <h4 className="mb-16">Friend</h4>
            <ul className="setting-list">
              <li>
                <Link
                  to="/user-address"
                  className="d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center gap-12 shrink-0">
                    <img
                      src="/assets/svg/user-alt-1.svg"
                      alt="icon"
                      width="24px"
                      height="24px"
                    />
                    <p>친구 목록</p>
                  </div>

                  <img src="/assets/svg/chevron-right.svg" alt="Icon" />
                </Link>
              </li>

              <li>
                <Link
                  to="/user-address"
                  className="d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center gap-12 shrink-0">
                    <img
                      src="/assets/svg/ban.svg"
                      alt="icon"
                      width="24px"
                      height="24px"
                    />
                    <p>차단된 계정</p>
                  </div>

                  <img src="/assets/svg/chevron-right.svg" alt="Icon" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-32">
            <h4 className="mb-16">Security</h4>
            <ul className="setting-list">
              <li>
                <Link
                  to="/change-password"
                  className="d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center gap-12 shrink-0">
                    <img src="/assets/svg/lock-close.svg" alt="icon" />
                    <p>비밀번호 변경</p>
                  </div>

                  <img src="/assets/svg/chevron-right.svg" alt="Icon" />
                </Link>
              </li>
              <li>
                <Link
                  to="/forgot-password"
                  className="d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center gap-12 shrink-0">
                    <img src="/assets/svg/lock-open.svg" alt="icon" />
                    <p>Forgot Password</p>
                  </div>

                  <img src="/assets/svg/chevron-right.svg" alt="Icon" />
                </Link>
              </li>

              {/* <li>
                <Link
                  to="/security"
                  className="d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center gap-12 shrink-0">
                    <img src="/assets/svg/shield.svg" alt="icon" />
                    <p>Security</p>
                  </div>

                  <img src="/assets/svg/chevron-right.svg" alt="Icon" />
                </Link>
              </li> */}
              <li>
                <Link
                  to="/notifications"
                  className="d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center gap-12 shrink-0">
                    <img src="/assets/svg/bell-black.svg" alt="icon" />
                    <p>알림</p>
                  </div>

                  <img src="/assets/svg/chevron-right.svg" alt="Icon" />
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="mt-32">
            <h4 className="mb-16">General</h4>
            <ul className="setting-list">
              <li>
                <Link
                  to="/language"
                  className="d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center gap-12 shrink-0">
                    <img src="/assets/svg/globe.svg" alt="icon" />
                    <p>Language</p>
                  </div>

                  <img src="/assets/svg/chevron-right.svg" alt="Icon" />
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center gap-12 shrink-0">
                    <img src="/assets/svg/trash.svg" alt="icon" />
                    <p>Clear Cache</p>
                  </div>

                  <small>88 MB</small>
                </a>
              </li>
            </ul>
          </div> */}

          <div className="mt-32">
            <h4 className="mb-16">About</h4>
            <ul className="setting-list">
              <li>
                <Link
                  to="/policy"
                  className="d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center gap-12 shrink-0">
                    <img src="/assets/svg/shield-round.svg" alt="icon" />
                    <p>Legal and Policies</p>
                  </div>

                  <img src="/assets/svg/chevron-right.svg" alt="Icon" />
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center gap-12 shrink-0">
                    <img src="/assets/svg/question.svg" alt="icon" />
                    <p>Help & Support</p>
                  </div>

                  <img src="/assets/svg/chevron-right.svg" alt="Icon" />
                </Link>
              </li>
              <li>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-12 shrink-0">
                    <img src="/assets/svg/activity.svg" alt="icon" />
                    <p className="mode-text">Dark Mode</p>
                  </div>

                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      id="mode-change"
                      className="mode-switch"
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <div className="py-32">
          <button
            type="button"
            onClick={handleLogout}
            className="btn-primary-outline"
            data-bs-toggle="modal"
            data-bs-target="#logOutModal"
          >
            Log Out
          </button>
        </div>
      </main>

      <Footer />

      <LogOutModal handleLogout={handleLogout} showModal={showModal} />
    </>
  );
};

export default UserProfile;
