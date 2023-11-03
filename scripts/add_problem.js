import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
const url ='http://localhost:8083';
const server_ip ='http://ec2-43-202-43-121.ap-northeast-2.compute.amazonaws.com:8080';

document.getElementById("problemForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const problemTitle = document.getElementById("problemTitle").value;
    const problemDescription = document.getElementById("problemDescription").value;
    const problemInput = document.getElementById("problemInput").value;
    const problemOutput = document.getElementById("problemOutput").value;

    try {
        const response = await axios.post(server_ip+'/api/v1/problems', {
            id: 1,
            title: problemTitle,
            content: problemDescription,
            exampleTestInput: problemInput,
            exampleTestOutput: problemOutput
        });
        
        console.log("문제 추가 성공:", response.data);
        window.alert("문제가 추가되었습니다.");
        window.close();

    } catch (error) {
        window.alert("문제 추가 실패^^");
        window.close();
        
        console.error("문제 추가 실패:", error);
    }
});
