const url = "https://www.example.com";
const base64Encoded = btoa(url);
const server_ip ='http://ec2-43-202-43-121.ap-northeast-2.compute.amazonaws.com:8080';
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';


// const resultElement = document.getElementById("base64");
// resultElement.textContent = base64Encoded;


document.getElementById("codeGenerateBtn").addEventListener("click", function() {
    // const base64Encoded = btoa(server_ip+'/api/v1/code');
    // const resultContainer = document.getElementById("base64");
    // const resultElement = document.createElement("div");

    async function fetchData() {
        try {
            const response = await axios.get(server_ip+'/api/v1/code');
            const data = response.data; 
            console.log(`Welcom page: ${data.result}`) // data.result = {orgUrl, url}

            const base64Encoded = btoa(data.result.url);

            const resultContainer = document.getElementById("base64");
            const resultElement = document.createElement("div");
            
            resultElement.textContent = base64Encoded;
            resultContainer.appendChild(resultElement);
            
        } catch (error) {
            console.error("Fail: ", error);
        }
    }
    fetchData();

});