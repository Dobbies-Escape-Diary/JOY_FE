import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
const server_ip ='http://ec2-43-202-43-121.ap-northeast-2.compute.amazonaws.com:8080';

const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // 24시간 형식
    timeZoneName: "short"
};

document.addEventListener("DOMContentLoaded", () => {
    async function fetchData() {
        try {
            const response = await axios.get(server_ip+'/api/v1/results');
            const data = response.data;
            console.log(data)

            const dataContainer = document.getElementById("dataContainer");
            const table = document.getElementById("resultTable");
            const thead = table.children[0];
            const tbody = table.children[1];

            data.forEach(item => {
                console.log(item.endTime)
                const row = tbody.insertRow();
                const formattedDateTime = new Date(item.endTime).toLocaleString(undefined, options);

                row.innerHTML = 
                `<td>${item.studentId}</td>
                <td>${item.correctProblemId}</td>
                <td>${item.correctRate}</td>
                <td>${formattedDateTime}</td>`;

            });
            dataContainer.appendChild(table);
        } catch (error) {
            console.error("Fail: ", error);
        }
    }
    fetchData();
});