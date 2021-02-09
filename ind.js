let l=(a)=>{
    city=a
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${a}&appid=fd47f02391e6111136956ae59beeff4c`
    fetch(url)
    .then((data)=>{
        return(data.json())
    })
    .then((data)=>{
        if (data.cod=='404'){
            alert('sorry we are not able to find the place');
        }
        else{
            let kl=(data.weather[0].description)
            let k=(data.main.temp);
            let n=(data.name);
            let j= (k-273.15);
            let m=j.toFixed(2)
            document.querySelector('.location-timezone').textContent=a;
            document.querySelector('.temperature-degree').textContent=m+'°C';
            document.querySelector('.temperature-description').textContent=kl;

        }
})
}



// // let temp_change()
// l('Banapura')
// console.log('Hii')
// console.log(document.getElementById('hey').value)

let func=()=>{
    let c=(document.getElementById('hey').value);

    l(c)
    }


