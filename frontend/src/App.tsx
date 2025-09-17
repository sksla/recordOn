import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Otp from "./components/auth/otp";
import AllPages from "./components/all-pages";
import Signup from "./components/auth/signup";
import Signin from "./components/auth/signin";
import MainHome from "./components/homes/home";
import Products from "./components/homes/home-2";
import SignupEmail from "./components/auth/signup-email";
import SigninEmail from "./components/auth/signin-email";
import UserProfile from "./components/profile/user-profile";
import SelectLanguage from "./components/auth/select-language";
import ForgotPassword from "./components/profile/forgot-password";
import CreateNewPassword from "./components/auth/create-new-password";
import ChatArea from "./components/chat/chat-area";
import Message from "./components/chat/message";

import UserInfo from "./components/profile/user-info";
import UserAddress from "./components/profile/user-address";
import AddAddress from "./components/profile/add-address";

import ChangePassword from "./components/profile/change-password";
import Notifications from "./components/profile/notifications";
import Security from "./components/profile/security";
import UserLanguage from "./components/profile/user-language";

import Wishlist from "./components/profile/wishlist";

import ServiceLocation from "./components/inner-homes/service-location";

import Notification from "./components/notification";

import Policy from "./components/profile/policy";
import HelpSupport from "./components/profile/help-support";
import SplashScreen from "./components/splash-screen";
import Support from "./components/profile/support";
import Language from "./components/profile/language";

import KakaoMap from "./components/auth/map"; //map 경로 설정
import TodoMain from "./components/auth/todo"; //todo 경로
import Calendar from "./components/auth/calendar";

import ChatAreaInfo from "./components/chat/chat-area/chat-area-info"; // 채팅방 정보 경로
import FriendList from "./components/profile/friend/friend-list"; // 친구 목록 경로

const router = createBrowserRouter([
  { path: "/", element: <MainHome /> },
  { path: "/user-profile", element: <UserProfile /> },
  { path: "/home", element: <Products /> },
  { path: "/all-pages", element: <AllPages /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signup-email", element: <SignupEmail /> },
  { path: "/signin", element: <Signin /> },
  { path: "/signin-email", element: <SigninEmail /> },
  { path: "/create-new-password", element: <CreateNewPassword /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/otp", element: <Otp /> },
  { path: "/select-language", element: <SelectLanguage /> },
  { path: "/chat", element: <ChatArea /> },
  { path: "/message", element: <Message /> },

  { path: "/user-info", element: <UserInfo /> },
  { path: "/user-address", element: <UserAddress /> },
  { path: "/add-address", element: <AddAddress /> },
  { path: "/change-password", element: <ChangePassword /> },
  { path: "/notifications", element: <Notifications /> },
  { path: "/security", element: <Security /> },
  { path: "/user-language", element: <UserLanguage /> },
  { path: "/wishlist", element: <Wishlist /> },
  { path: "/service-location", element: <ServiceLocation /> },
  { path: "/notification", element: <Notification /> },
  { path: "/policy", element: <Policy /> },
  { path: "/help-support", element: <HelpSupport /> },
  { path: "/splash-screen", element: <SplashScreen /> },
  { path: "/support", element: <Support /> },
  { path: "/language", element: <Language /> },

  { path: "/map", element: <KakaoMap /> }, // map 경로 설정
  { path: "/todo", element: <TodoMain /> }, // todo 경로
  { path: "calendar", element: <Calendar /> }, // calendar 경로

  { path: "/chat-area-info", element: <ChatAreaInfo /> }, // 채팅방 편집 페이지 경로
  { path: "/friend-list", element: <FriendList /> }, // 채팅방 편집 페이지 경로

  // { path: "*", element: <NotFound />, errorElement: <CustomError /> },
]);

function App() {
  return (
    <div className="page-wrapper">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
