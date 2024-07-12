document.addEventListener('DOMContentLoaded', function () {
    var ctxSales = document.getElementById('salesChart').getContext('2d');
    var salesChart = new Chart(ctxSales, {
        type: 'line',
        data: {
            labels: ['Feb 1', 'Feb 4', 'Feb 7', 'Feb 10', 'Feb 13', 'Feb 16', 'Feb 20', 'Feb 23'],
            datasets: [{
                label: 'Sales',
                data: [1200, 1900, 3000, 5000, 4000, 3000, 2000, 3200],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctxSellerPie = document.getElementById('sellerPieChart').getContext('2d');
    var sellerPieChart = new Chart(ctxSellerPie, {
        type: 'pie',
        data: {
            labels: ['Seller A', 'Seller B', 'Seller C'],
            datasets: [{
                label: 'Sellers',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    var ctxCustomerPie = document.getElementById('customerPieChart').getContext('2d');
    var customerPieChart = new Chart(ctxCustomerPie, {
        type: 'pie',
        data: {
            labels: ['Customer A', 'Customer B', 'Customer C'],
            datasets: [{
                label: 'Customers',
                data: [200, 150, 250],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
});
