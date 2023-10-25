import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

const url='https://jsonplaceholder.typicode.com/posts';

document.addEventListener("DOMContentLoaded", () => {
    async function fetchData() {
        try {
            const response = await axios.get(url);
            const data = response.data;

            const dataContainer = document.getElementById("dataContainer");
            const table = document.getElementById("resultTable");
            const thead = table.children[0];
            const tbody = table.children[1];

            data.forEach(item => {
                const row = tbody.insertRow();
                row.innerHTML = 
                `<td>${item.id}</td>
                <td>${item.studentId}</td>
                <td>맞춘문제</td>
                <td>정답률</td>
                <td>종료시각</td>`;
                const deleteButton = row.querySelector('.delete-button');
                deleteButton.addEventListener('click', function() {
                    deleteProblem(item);
                });
            });
            dataContainer.appendChild(table);
        } catch (error) {
            console.error("Fail: ", error);
        }
    }
    fetchData();
});