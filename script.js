const monthlyData=[
    { month:'Jan', revenue:1250, units:3400},
    { month:'Feb', revenue:1180, units:3150},
    { month:'Mar', revenue:1420, units:3900},
    { month:'Apr', revenue:1610, units:4300},
    { month:'May', revenue:1550, units:4050},
    { month:'Jun', revenue:1780, units:4700}
];
const branchData = [
    { branch: "Colombo", revenue:2450},
    { branch: "Kandy", revenue:1320},
    { branch: "Galle", revenue:1170}
];
const totalRevenue = monthlyData.reduce((s, i)=> s+i.revenue,0);
const totalUnits = monthlyData.reduce((s,i)=> s+i.units, 0);
const bestMonthobj = monthlyData.reduce((m,i)=> i.revenue> m.revenue ? i:m, monthlyData[0]);
const bestBranchobj = branchData.reduce((m,i) =>i.revenue> m.revenue ? i:m, branchData[0]);

document.getElementById('totalRevenue').textContent = "Rs."+ totalRevenue;
document.getElementById('totalUnits').textContent = totalUnits;
document.getElementById('bestMonth').textContent = bestMonthobj.month;
document.getElementById('bestBranch').textContent = bestBranchobj.branch;

const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
hamburger.addEventListener('click', () =>{
    sidebar.classList.toggle('show');
});

const links = 
document.querySelectorAll('.nav-links a');
links.forEach(link=>{
    link.addEventListener('click',(e) =>{
        e.preventDefault();
        links.forEach(x=> x.classList.remove('active'));
        link.classList.add('active');
        if (window.innerWidth<= 768){
            sidebar.classList.remove('show');
        
        }
    });
});
const lineCtx=
document.getElementById('lineChart');
new Chart(lineCtx, {
    type:'line',
    data:{
        labels:monthlyData.map(d=>d.month),
        datasets:[{
            label: 'Monthly Revenue',
            data:monthlyData.map(d=>d.revenue),
            borderColor:'#0b2a5e',
            backgroundColor:'#dbe6ff',
            borderWidth:2,
            tension:0.3
        }]
    },
    options:{
        responsive: true,
        maintainAspectRatio: true
    }
}
);
const barCtx= 
document.getElementById('barChart');

new Chart(barCtx, {
    type: 'bar',
    data:{
       labels: branchData.map(d=>d.branch),
       datasets:[{
        label:'Q2 Revenue by Branch',
        data: branchData.map(d=>d.revenue),
        backgroundColor:['#0b2a5e','#1e4db7','#5b8def']
       }]
    },
    options:{
responsive:true,
maintainAspectRatio: true,
scales:{
    y:{
        beginAtZero:true
    }
}
    }
    
});
