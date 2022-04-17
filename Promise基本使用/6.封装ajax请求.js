function sendAjax(url) {
   return new Promise((resolve, reject) => {
       const xhr = new XMLHttpRequest();
       xhr.open('GET',url);
       xhr.send()
       xhr.onreadystatechange = function () {
            if(xhr.readyState ===4 ){
                if(xhr.status>=200 && xhr.status<=300){
                    resolve(xhr.data)
                }
            }else{
                reject(xhr.onerror)
            }
       }
   })
}
sendAjax('https://qqlykm.cn/api/yan/gc.php')
