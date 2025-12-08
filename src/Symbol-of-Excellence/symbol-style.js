import styled from "styled-components";

export const SymbolStyle = styled.div`
  width: 100%;
  padding: 4rem 1rem 6rem 1rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* ---------------- TOP TITLE ---------------- */
  .element__one {
    max-width: 1100px;
    text-align: center;
    margin-bottom: 4rem;
  }

  .element__one h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #0b0b0c;
    margin-bottom: 1.5rem;
  }

  .element__one p {
    font-size: 1.25rem;
    line-height: 1.9;
    color: #475569;
    max-width: 1100px;
    margin: 0 auto;
  }

  /* ---------------- VISION + MISSION WRAPPER ---------------- */
  .element__two {
    display: flex;
    width: 100%;
    max-width: 1400px;
    justify-content: space-between;
    position: relative;
    padding-top: 0;
    align-items: flex-start;
  }

  /* PERFECT SHORT DIVIDER */
  .element__two::before {
    content: "";
    width: 2px;
    background: #d7d7d7;
    height: 250px;           /* FIXED TO MATCH REFERENCE */
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }

  /* ---------------- LEFT & RIGHT BLOCKS ---------------- */
  .element__two__child {
    width: 48%;
    padding: 0 1.5rem;
    text-align: left;
  }

  /* ---------------- HEADINGS ---------------- */
  .sub__title1,
  .sub__title2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    display: inline-block;
    padding-left: 12px;
    border-left: 4px solid;
  }

  .sub__title1 {
    color: rgb(243, 176, 79);
    border-left-color: rgb(243, 176, 79);
  }

  .sub__title2 {
    color: rgb(0, 189, 235);
    border-left-color: rgb(0, 189, 235);
  }

  /* ---------------- PARAGRAPHS ---------------- */
  .element__two__child p {
    font-size: 1.25rem;
    line-height: 2rem;
    color: #475569;
    max-width: 600px;       /* EXACT WIDTH FROM THE REFERENCE */
    margin-top: 0.5rem;     /* FIXED: MAKES VISION TOP ALIGN */
  }
`;