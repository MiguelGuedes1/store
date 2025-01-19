export const fetchProducts = async () => {

    const url = "https://api.escuelajs.co/api/v1/products?offset=1&limit=38"

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Erro ao buscar os dados");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};
