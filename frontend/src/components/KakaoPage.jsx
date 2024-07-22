import React, { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { URL } from "../URL"; // 실제 URL 경로로 수정

const KakaoPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동

  useEffect(() => {
    // Extract the code from the URL
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code");

    if (code) {
      // Send the code to the backend
      axios
        .post(`${URL}/api/auth/kakao`, { code })
        .then((response) => {
          console.log("Code sent successfully", response.data);
          localStorage.setItem("name", response.data.user_name); // 일단 이름만 저장했다.
          navigate("/");
        })

        .catch((error) => {
          console.error("There was an error sending the code!", error);

          // Check if the error response status is 400
          if (error.response && error.response.status === 404) {
            // Redirect to the signup page
            navigate("/signup");
          }
        });
    }
  }, [location.search, navigate]); // navigate를 의존성 배열에 추가

  return <div>Processing...</div>;
};

export default KakaoPage;
