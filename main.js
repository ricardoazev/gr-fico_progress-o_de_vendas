const ctx = document.getElementById('myChart').getContext("2d")

const gradient = ctx.createLinearGradient(0,0,0, 400)
gradient.addColorStop(0, '#5cffca')
gradient.addColorStop(1, '#66ff')

const labels= [

    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',

]

const data = {
    labels,
    datasets: [{
        data: [211, 299, 289, 344, 411, 377, 499, 389, 421],
        label: "Progressão de vendas",
        fill: true,
        backgroundColor:gradient
    }]
}

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        radios:4,
        hoverRadius:10,
        scales:{
            y:{
                ticks:{
                    callback: function(value){
                        let finalValue = value.toFixed(2)
                        return 'R$ ' + finalValue.replace('.', ',') + ' milhões'
                    }
                }
            }
        }
    }
  };

  const myChart = new Chart(ctx, config)