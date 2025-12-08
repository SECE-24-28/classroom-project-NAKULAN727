import styled from "styled-components";

export const OurPromiseStyle = styled.div`
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
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    width: 80%;
    margin: 40px auto;
  }

  /* CARD STYLE */
  .card {
    padding: 20px;
    //border-radius: 12px;
    min-height: 180px;
    border-top: 5px solid;
  }

  /* ICON + TITLE ALIGNMENT */
  .card-header {
    display: flex;
    align-items: center;     /* Vertically centers icon + title */
    gap: 12px;               /* Space between icon and title */
    margin-bottom: 12px;
  }

  .icon {
    font-size: 28px;         /* Matches reference design size */
    line-height: 1;          /* Prevents icon from sitting too high */
    display: flex;
    align-items: center;
  }

  .card-title {
    font-size: 20px;
    font-weight: 700;
    font-family: "Work Sans", sans-serif;
    color:gray;
  }

  .card-text {
    color: rgb(86, 102, 131);
    font-family: "Work Sans", sans-serif;
    font-size: 15px;
    line-height: 22px;
    margin-top: 5px;
  }

  /* INDIVIDUAL COLORS */
  .top-quality { border-color: #19c6c1; }
  .responsive { border-color: #f5a623; }
  .rockstar  { border-color: #1fc1ff; }
  .fast-turn { border-color: #8a56ec; }
  .lifetime  { border-color: #e74c3c; }
  .secured   { border-color: #2ecc71; }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
      width: 90%;
    }

    .icon {
      font-size: 26px;
    }

    .card-header {
      gap: 10px;
    }
  }
`;
