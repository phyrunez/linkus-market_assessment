export const baseUrl = "http://localhost:3001/api";

export const postRequest = async(url, body) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body
        });

        const data = await response.json()
        console.log(data)
        return data;
    }catch{
        console.log("Error ocurred")
    }
}