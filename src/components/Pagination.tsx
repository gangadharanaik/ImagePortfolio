import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { jsx } from "@emotion/react";
import { CustomeImageData } from "../models/Model";
import PortfolioImageList from "./Portfolio";
import { useEffect } from "react";

export default function PaginationControlled({ dataI }: any) {
  const [pagedata, setPageData] = React.useState<Array<CustomeImageData>>([]);
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setPageData(filterData(dataI, value));
  };
  const filterData = (dataa: any, i: number) => {
    let startingNum = 5 * i - 5;
    let endNum = startingNum + 5;
    let filteredData = [];
    if (dataa.length > 0) {
      filteredData = dataa.filter((_data: any, ind: any) => {
        return ind > startingNum && ind <= endNum;
      });
      return filteredData;
    }
  };
  useEffect(() => {
    setPageData(filterData(dataI, page));
  });
  return (
    <Stack spacing={2}>
      <PortfolioImageList pageDat={pagedata} />
      <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        style={{ margin: "0 auto" }}
      />
    </Stack>
  );
}
