import $ from "jquery";

// const nouislider = $('#nouislider')[0]
const slider = document.getElementById('nouislider');

if(slider) {
    noUiSlider.create(slider, {
        start: [5000, 10000],
        connect: true,
        range: {
            'min': 3000,
            'max': 15000
        }
    }); 
    const input0 = document.getElementById('input-0');
    const input1 = document.getElementById('input-1');
    const inputs = [input0, input1];

    slider.noUiSlider.on('update', function(values, handle){
        inputs[handle].value = Math.round(values[handle]);
    })

    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value
        console.log(arr)
        slider.noUiSlider.set(arr)
    }    

    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            console.log(index)
            setRangeSlider(index, e.currentTarget.value)
        });
    });

}



