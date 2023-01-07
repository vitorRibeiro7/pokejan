import { Container, StyledLogo } from "./style";
import Button from "../Button";

function Header() {
    return (
        <Container>
            <StyledLogo />
            <Button text={"About"} onClick={"https://github.com/vitorRibeiro7/pokejan-app-moove"} />
        </Container>
    );
}

export default Header;
