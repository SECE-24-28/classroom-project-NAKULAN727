import styled from "styled-components";

export const ContactUsStyle = styled.div`
  width: 100%;
  background-color: #ff4f61;
  padding: 80px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  color: white;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 40px 20px;
    text-align: center;
  }

  /* LEFT SIDE CONTENT */
  .content {
    flex: 1;
    max-width: 600px;
  }

  h1 {
    font-size: 70px;
    font-weight: 800;
    margin-bottom: 20px;
    font-family: "Poppins", sans-serif;

    @media (max-width: 600px) {
      font-size: 40px;
    }
  }

  p {
    font-size: 22px;
    line-height: 1.6;
    margin-bottom: 35px;
    font-family: "Poppins", sans-serif;

    @media (max-width: 600px) {
      font-size: 18px;
    }
  }

  .contactBtn {
    padding: 14px 32px;
    font-size: 20px;
    background: white;
    color: #ff4f61;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.3s;

    &:hover {
      background-color: #ffe3e6;
    }
  }

  /* RIGHT SIDE IMAGE */
  .imageWrap {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .imageContainer {
    width: 450px;
    height: auto;
    border-radius: 50%;
    object-fit: contain;

    @media (max-width: 600px) {
      width: 300px;
    }
  }
`;