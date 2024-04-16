import { useRouter } from "next/router";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

function validateAccessToken() {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
        return false;
    }

    const decodedToken = jwtDecode(accessToken);

    if (decodedToken.exp == null) {
        throw new Error("Token has no expiration date");
    }
    if (decodedToken.exp * 1000 < Date.now()) {
        return false;
    }

    return true;
}

const requireAuthorization = (WrappedComponent: React.ComponentType) => {
    const WithAuthorization = (props: any) => {
        const router = useRouter();

        useEffect(() => {
            const isTokenValid = validateAccessToken();

            if (!isTokenValid) {
                router.push("/login");
            }
        });

        return <WrappedComponent {...props} />;
    };

    return WithAuthorization;
};

export default requireAuthorization;
