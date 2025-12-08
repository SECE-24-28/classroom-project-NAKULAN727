import styled from "styled-components";

export const OurCoursesStyle = styled.div`
  width: 100%;
  padding: 50px 0;

  .title {
    font-weight: 600;
    font-size: 48px;
    text-align: center;
    font-family: "Work Sans", sans-serif;
  }

  .title-content {
    font-size: 18px;
    text-align: center;
    margin-block: 8px;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    color: rgb(86, 102, 131);
  }

  /* GRID LAYOUT */
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 columns for courses */
    gap: 40px;
    width: 80%;
    margin: 40px auto;
  }

  /* CARD STYLE */
  .card {
    padding: 20px;
    min-height: 180px;
    border-top: 5px solid;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    border-radius: 8px;
  }

  /* ICON + TITLE ALIGNMENT */
  .card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }

  .icon {
    font-size: 28px;
    display: flex;
    align-items: center;
  }

  .card-title {
    font-size: 20px;
    font-weight: 700;
    font-family: "Work Sans", sans-serif;
    color: gray;
  }

  .card-text {
    color: rgb(86, 102, 131);
    font-family: "Work Sans", sans-serif;
    font-size: 15px;
    line-height: 22px;
    margin-top: 5px;
  }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
      width: 90%;
    }
  }
`;