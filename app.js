// Mock Data for demo purposes
const tariffs = {
    current: { rate: 0.12, timeOfDay: 'Off-Peak' },
    upcoming: { rate: 0.25, timeOfDay: 'Peak' }
};

const solarProduction = 5; // kWh
const batteryStorage = 80; // percentage

const consumptionData = [
    { time: '10:00 AM', consumption: 1.2 },
    { time: '11:00 AM', consumption: 1.8 },
    { time: '12:00 PM', consumption: 2.1 },
    { time: '01:00 PM', consumption: 2.5 },
    { time: '02:00 PM', consumption: 1.7 }
];

// Real-Time Tariff Monitoring
const tariffRateElement = document.getElementById('tariff-rate');
const timeOfDayElement = document.getElementById('time-of-day');

function updateTariff() {
    // Simulating fetching updated tariff data
    const newRate = (Math.random() * (0.2 - 0.1) + 0.1).toFixed(2);
    const newTimeOfDay = Math.random() > 0.5 ? 'Peak' : 'Off-Peak';

    tariffs.current.rate = newRate;
    tariffs.current.timeOfDay = newTimeOfDay;

    tariffRateElement.innerText = `$${newRate}`;
    timeOfDayElement.innerText = newTimeOfDay;
}

// Energy Consumption Analytics (Using Chart.js)
const ctx = document.getElementById('energyChart').getContext('2d');
const energyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: consumptionData.map(item => item.time),
        datasets: [{
            label: 'Energy Consumption (kWh)',
            data: consumptionData.map(item => item.consumption),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: true,
            pointStyle: 'circle',
            pointRadius: 5,
            pointBackgroundColor: 'rgba(75,192,192,1)',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `Consumption: ${context.raw} kWh`;
                    }
                }
            }
        }
    }
});

// Smart Scheduling
const scheduleFeedbackElement = document.getElementById('schedule-feedback');

function scheduleAppliance(appliance) {
    // Simulating appliance scheduling
    const scheduledTime = '1:00 AM (Off-Peak)';
    scheduleFeedbackElement.innerText = `${appliance} scheduled to run at ${scheduledTime}.`;
}

// Solar Energy Management
const solarProductionElement = document.getElementById('solar-production');
const batteryStorageElement = document.getElementById('battery-storage');

function updateSolarData() {
    // Simulating real-time solar data update
    const newProduction = (Math.random() * (6 - 4) + 4).toFixed(1);
    const newBatteryStorage = Math.floor(Math.random() * (100 - 60) + 60);

    solarProductionElement.innerText = `${newProduction} kWh`;
    batteryStorageElement.innerText = `${newBatteryStorage}%`;
}
