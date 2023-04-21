import styled from "styled-components";

export type SkeletonProps = {
  w?: string;
  h?: string;
};

export const SkeletonStyle = styled.div<SkeletonProps>`
  position: relative;
  width: ${({ w }) => w ?? "100px"};
  height: ${({ h }) => h ?? "20px"};
  background: rgba(36, 36, 36, 0.9);
  overflow: hidden;
  border-radius: 100px;

  &:before {
    content: " ";
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: -50px;
    background: linear-gradient(
      90deg,
      rgba(36, 36, 36, 0.1) 0%,
      rgba(200, 200, 200, 0.1) 50%,
      rgba(36, 36, 36, 0.1) 100%
    );
    width: 50px;
    animation: run 1.5s infinite linear;
  }

  @keyframes run {
    from {
      left: -50px;
    }
    to {
      left: ${({ w }) => w ?? "100px"};
    }
  }
`;
