const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001; 


app.use(cors());


const overviewData = {
  sectionTitle: "Strategy in Action",
  score: 54,
  status: "Critical",
  benchmark: "15% below benchmark",
  averageScore: 69,
};


const insightsData = {
  headline: "Retention metrics show stability despite benchmark gap",
  
  insightBlocks: [
    {
      id: 1,
      title: "Active Users",
      value: "12.5k",
      change: "+12%",
      visual: {
        type: "sparkline-sharp", 
        data: [10, 25, 15, 30, 20, 45, 40]
      }
    },
    {
      id: 2,
      title: "Session Time",
      value: "4m 30s",
      change: "-5%",
      visual: {
        type: "sparkline-smooth", 
        data: [20, 22, 25, 24, 28, 30, 32]
      }
    },
    {
     id: 3,
      title: "Completion Rate",
      value: "85%",
      change: "Stable",
      visual: {
        type: "bar", 
        data: [40, 60, 75, 65, 85, 70]
      }
    }
  ],

  
  mainChart: {
    type: "area-spline", 
    title: "6-Month Engagement Trend",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    values: [30, 45, 35, 50, 48, 70, 65],
    highlightPoint: {
      index: 5, 
      label: "Update Released"
    }
  },

  navigation: {
    previous: "Back", 
    next: "Next Insight" 
  }
};

app.get('/overview', (req, res) => {
  setTimeout(() => {
    res.json(overviewData);
  }); 
});

app.get('/insights', (req, res) => {
  setTimeout(() => {
    res.json(insightsData);
  });
});


app.listen(PORT, () => {
  console.log(`Minimal Backend running at http://localhost:${PORT}`);
  console.log(`- Screen A Data: http://localhost:${PORT}/overview`);
  console.log(`- Screen B Data: http://localhost:${PORT}/insights`);
});