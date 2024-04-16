import LoginForm from "@/components/LoginForm";
import { Container } from "@mui/material";

export default function LoginPage() {
    return (
        <Container
            maxWidth="lg"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <LoginForm />
        </Container>
    );
}
