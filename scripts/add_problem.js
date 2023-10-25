import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

const url ='http://localhost:8083';

// 미니 데이터 베이스
// api 로 호출하기 귀찮으니까
// api 로 호출 했을때 데이터 형식에 맞춰 더미 데이터를 만들자
// data = { "title" : "엄호정 바보", "sub title" : "엄호정은 김기환을 좋아한다.", "지은이" : "김기환"
// }
// // 여러 데이터들이 뭉친것
// datas = [data1, data2]

// def GamepadHapticActuator():

//     return datas


// <div>
//     <li>

//     </li>
//     <li>
        
//     </li>
//     <li>
        
//     </li>
//     <li>
        
//     </li>

// </div>

// listElement = document.getElementById()

// 창이 떴을때 = function() {

//     // 문제 목록 데이터를 가져온다.

//     // 가져온 결과 = datas (더미데이터)

//     for data in dats:
//         listElement.append(createListElement(data))

// }


// def createListElement():
//     <li>
//         <title>
//              data[0]
//         </title>
//         <>
//             data[1]
//         </>
//         <>
//             data[2]
//         </>
//     </li>

//     list_var = createElement()
//     return (list_var)


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
