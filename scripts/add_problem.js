import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

const url ='http://localhost:8083';

document.getElementById("problemForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const problemTitle = document.getElementById("problemTitle").value;
    const problemDescription = document.getElementById("problemDescription").value;
    const problemInput = document.getElementById("problemInput").value;
    const problemOutput = document.getElementById("problemOutput").value;

    try {
        const response = await axios.post(url, {
            id: 1,
            title: problemTitle,
            content: problemDescription,
            exampletestInput: problemInput,
            exampletestOutput: problemOutput
        });
        
        console.log("응답:", response.data);
        alert("서버 응답: " + response.data.message);

        window.alert("문제 추가 성공");
        window.close();
        
        console.log("문제 추가 성공:", response.data);
    } catch (error) {
        window.alert("문제 추가 실패^^");
        window.close();
        
        console.error("문제 추가 실패:", error);
    }
});
