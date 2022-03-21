import styled from "styled-components";

export const Table = styled.table`
  width: 40%;
  border-bottom: 3px solid #01987a;
  margin: auto;
  margin-top: 10px;
  border-collapse: collapse;

  & > thead {
    background-color: #01987a;
    color: white;
    /* border-spacing: 5px; */
  }

  & > tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  & > tbody tr:hover {
    color: #01987a;
  }
  & > th {
    padding: 5px;
  }

  & > td {
    padding: 5px;
  }
`;
