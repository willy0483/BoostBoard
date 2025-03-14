import { NotFoundPageStyled } from "./notFoundPage.styled";
import { Container } from "../../components/container/container";

export const NotFoundPage = () => {
  return (
    <Container>
      <NotFoundPageStyled>
        <h1>404 Not Found</h1>
      </NotFoundPageStyled>
    </Container>
  );
};
