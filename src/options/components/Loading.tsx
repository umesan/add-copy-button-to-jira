import CircularProgress from "@mui/material/CircularProgress";
import type { FC } from "react";
import styled from "styled-components";

type FooterProps = {};
const Component: FC<FooterProps & { className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <CircularProgress />
    </div>
  );
};

export const Loading = styled(Component)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;
