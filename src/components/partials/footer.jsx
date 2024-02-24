import styled from 'styled-components'

const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (
        <FooterContent>
            <div className="container">
                <p>Copyright © {currentYear}. Todos os direitos reservados.</p>
            </div>
        </FooterContent>
    )
}

export default Footer

const FooterContent = styled.footer`
    position: relative;
    z-index: 999;
    width: 100%;
    padding: 1.5rem 0;
    background: #08090a;

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        p {
            font-size: 1.25rem;
            font-weight: 500;
            color: #A2A1A7;
        }
    }
`