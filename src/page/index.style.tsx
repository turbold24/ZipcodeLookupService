import styled from 'styled-components';

export const HomePageStyled = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  width: 100%;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  .f-column {
    flex: 1 1 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .title {
      width: 100%;
      color: #fff;
    }
  }

  .left {
    padding: 20px;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 600px) {
      padding-bottom: 50px;
    }
    .zip-form {
      width: 100%;
      max-width: 400px;

      .countries-label, .zipcode-label {
        color: #fff;
        display: block;
        font-weight: bold;

        &:last-of-type {
          margin-top: 25px;
        }

        select, input {
          margin-top: 10px;
          height: 50px;
          width: 100%;
          font-size: 20px;
          border: none;
          padding: 0;
          border-radius: 6px;
        }
      }

      .search-btn {
        margin-top: 30px;
        border-radius: 6px;
        width: 100%;
        height: 50px;
        font-size: 20px;
        background-color: #92f4af;
        border: none;
        padding: 0;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .middle {
    padding: 20px;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    @media only screen and (max-width: 600px) {
      border-left: none;
      border-right: none;
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
      padding-bottom: 50px;
    }
  }

  .right {
    padding: 20px;

    .history {
      max-height: 70vh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;
      align-items: center;
      padding: 20px;
          @media only screen and (max-width: 600px) {
            max-height: unset;
            background-color: #282c34;
          }
      }

    .clear-btn {
      height: 40px;
      background-color: #a93939;
      border: none;
      border-radius: 6px;
      color: #fff;
      font-size: 17px;
      max-width: 400px;
      width: 100%;
      @media only screen and (max-width: 600px) {
        margin-top: 20px;
        max-width: 300px;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
