import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

const url='https://jsonplaceholder.typicode.com/posts';
const server_ip ='';

const createProblemButton = document.getElementById("createProblemButton");
createProblemButton.addEventListener("click", () => {
    window.open("/problem/AddProblem.html");
});

// 문제 목록 불러오기
document.addEventListener("DOMContentLoaded", () => {
    async function fetchData() {
        try {
            const response = await axios.get(url);
            const data = response.data;

            const dataContainer = document.getElementById("dataContainer");
            const table = document.getElementById("problemTable");
            const thead = table.children[0];
            const tbody = table.children[1];

            data.forEach(item => {
                const row = tbody.insertRow();
                row.innerHTML = 
                `<td>${item.userId}</td>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.body}</td>
                <td>Output example</td>
                <td><button type="button" class="delete-button">Delete</button>
                </td>`;
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

async function deleteProblem(item) {
    // button 클릭 시 데이터 삭제
    const id = item.id;
    const problemTitle = item.title;
    const problemDescription = item.content;

    const response = await axios.post(url, {
            id: id,
            title: problemTitle,
            content: problemDescription
    });
            
    console.log("응답:", response.data);
    alert("서버 응답: " + response.data.message);
    location.reload();
}