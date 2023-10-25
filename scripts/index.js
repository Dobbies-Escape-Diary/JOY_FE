const url = "https://www.example.com";
const base64Encoded = btoa(url);

// const resultElement = document.getElementById("base64");
// resultElement.textContent = base64Encoded;

document.getElementById("codeGenerateBtn").addEventListener("click", function() {
    const url = "https://www.example.com";
    const base64Encoded = btoa(url);

    const resultContainer = document.getElementById("base64");
    const resultElement = document.createElement("div");
    
    resultElement.textContent = base64Encoded;
    resultContainer.appendChild(resultElement);
});