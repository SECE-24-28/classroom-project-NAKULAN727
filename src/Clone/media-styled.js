import styled from "styled-components";

export const MediaStyle = styled.div`
  /* outer container makes the banner full-width while centering the pill */
  width: 100%;
  background: transparent;
  padding: 30px 16px; /* space around the pill */

  .parent {
    width: 100%;
    max-width: 1300px;         /* controls how wide the pill becomes */
    margin: 0 auto;            /* center horizontally */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;              /* small breathing room inside the outer area */
  }

  .content {
    width: 100%;
    background: #f82b45;       /* bright red like the image */
    color: #ffffff;
    padding: 48px 36px;        /* tall padding to produce the pill height */
    border-radius: 120px;      /* large radius to get capsule shape */
    box-shadow: 0 2px 0 rgba(0,0,0,0.06);
    border: 2px solid rgba(0,0,0,0.06);
    text-align: center;

    /* keep content constrained so text lines are readable */
    max-width: 1180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content h1 {
    margin: 0;
    font-size: 34px;
    font-weight: 800;
    letter-spacing: 0.2px;
    line-height: 1.05;
  }

  .content p {
    margin: 12px 0 0;
    max-width: 760px;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.45;
    opacity: 0.98;
  }

  /* Responsive: smaller screens */
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;