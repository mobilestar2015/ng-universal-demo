const PORT = process.env.PORT || 8000;
const protocol = process.env.PORT ? "https" : "http";

export const config = {
    baseUrl : `${protocol}://localhost:${PORT}/`
};