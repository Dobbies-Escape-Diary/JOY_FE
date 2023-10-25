// import axios from 'axios';
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

const url ='https://jsonplaceholder.typicode.com/posts';

// 함수로 빼기
axios.get(url)
    .then(res => {
        console.log(res);
    })
    .catch(err=>{
        console.log(err)}
    )
    .finally(()=>{
        console.log('axios test')
    })
