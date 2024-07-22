import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
import queryString from "query-string";

function SubmitUseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { upload } = queryString.parse(window.location.search);
  const showImageUpload = upload === "true";

  const [selectedFile, setSelectedFile] = useState("선택된파일 없음");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    } else {
      setSelectedFile("선택된 파일 없음");
    }
  };

  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  const careLevels = [
    { value: "1", label: "1급" },
    { value: "2", label: "2급" },
    { value: "3", label: "3급" },
    { value: "4", label: "4급" },
    { value: "5", label: "5급" },
  ];

  const onSubmit = async (data) => {
    try {
      if (showImageUpload) {
        const formData = new FormData();
        formData.append("image", data.image[0]);

        const response = await axios.post("", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log(response.data);
      } else {
        const response = await axios.post("", data);
        console.log(response);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Wrapper>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <h1>사용자 개인정보 입력</h1>
        <InputField error={!!errors.name}>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "이름은 필수 항목입니다.",
              minLength: {
                value: 2,
                message: "이름은 2글자 이상입니다.",
              },
            })}
          />
          {errors.name && <small role="alert">{errors.name.message}</small>}
        </InputField>
        <InputField error={!!errors.phone}>
          <label htmlFor="phone">연락처</label>
          <input
            type="tel"
            id="phone"
            {...register("phone", {
              required: "연락처는 필수 항목입니다.",
              minLength: {
                value: 10,
                message: "전화번호는 10자리이상입니다.",
              },
            })}
          />
          {errors.phone && <small role="alert">{errors.phone.message}</small>}
        </InputField>
        <InputField>
          <label htmlFor="birthYear">생년월일</label>
          <div>
            <select id="birthYear" {...register("birthYear")}>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <div>년</div>
            <select id="birthMonth" {...register("birthMonth")}>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <div>월</div>
            <select id="birthDay" {...register("birthDay")}>
              {dates.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <div>일</div>
          </div>
        </InputField>
        {!showImageUpload && (
          <InputField>
            <label htmlFor="careLevel">장기요양등급</label>
            <select id="careLevel" {...register("careLevel")}>
              {careLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </InputField>
        )}
        <InputField>
          <label htmlFor="gender">성별</label>
          <select id="gender" {...register("gender")}>
            <option value="male">남성</option>
            <option value="female">여성</option>
            <option value="Gay">Gay</option>
          </select>
        </InputField>
        {showImageUpload && (
          <InputField error={!!errors.image}>
            <label htmlfor="image">파일 선택</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              {...register("image", { required: "이미지를 선택해주세요" })}
              onChange={handleFileChange}
            />

            <span> {selectedFile} </span>
          </InputField>
        )}
        <SubmitBtn type="submit">제출</SubmitBtn>
      </FormContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100%;
  background-color: white;
`;

const InputField = styled.div`
  width: 100%;
  margin-bottom: 2%;
  /* display: flex; */

  div {
    display: flex;
    align-items: center;
    margin-right: 8px;
  }

  label {
    display: flex;
    margin-bottom: 1%;
    font-weight: bold;
  }

  input,
  select {
    width: 100%;
    padding: 2%;
    border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};
    border-radius: 25px;
    box-sizing: border-box;
    font-size: 16px;
    background-color: #f5f5f5;
  }

  span.error {
    color: red;
    font-size: 12px;
  }

  small {
    color: red;
  }
`;

const SubmitBtn = styled.button`
  display: flex;
  width: 200px;
  height: 30px;
  border-radius: 25px;
  background: var(--Color-8, #8091c9);
  outline: none;
  color: white;
  justify-content: center;
  align-items: center;
  border: none;
`;

export default SubmitUseForm;
