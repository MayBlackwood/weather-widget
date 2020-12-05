import React from "react";
import styled from "styled-components";
import LoaderGif from "../../assets/images/Loader.gif";

const Image = styled.img`
  height: 150px;
`;

const Loader = () => <Image src={LoaderGif} alt="Loading" />;

export default Loader;
