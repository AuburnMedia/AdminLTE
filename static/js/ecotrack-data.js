/**
 * EcoTrack Data Model
 * Centralized data management for carbon tracking application
 */

class EcoTrackData {
  constructor() {
    this.data = {
      // User profile data
      user: {
        id: null,
        name: 'Demo User',
        email: 'demo@example.com',
        joinDate: '2024-01-01',
        totalCarbonSaved: 0.7
      },

      // Carbon tracking goals
      goals: {
        annual: {
          target: 3.0, // tonnes CO2
          current: 2.3, // tonnes CO2
          startDate: '2024-01-01',
          endDate: '2024-12-31'
        },
        monthly: {
          target: 0.25, // tonnes CO2 per month
          current: 0.18 // current month
        }
      },

      // Historical carbon emissions data (in tonnes CO2)
      emissions: {
        monthly: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          data: [0.25, 0.22, 0.23, 0.21, 0.18, 0.19, 0.20, 0.22, 0.23, 0.21, 0.18, 0.20],
          targets: [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
        },
        weekly: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          data: [0.04, 0.05, 0.04, 0.05] // Current month breakdown
        },
        daily: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          data: [0.008, 0.007, 0.009, 0.008, 0.006, 0.012, 0.010] // Current week
        }
      },

      // Carbon sources breakdown
      sources: {
        transportation: { value: 0.8, label: 'Transportation', color: '#FF6384' },
        energy: { value: 0.6, label: 'Home Energy', color: '#36A2EB' },
        food: { value: 0.4, label: 'Food & Diet', color: '#FFCE56' },
        waste: { value: 0.3, label: 'Waste', color: '#4BC0C0' },
        other: { value: 0.2, label: 'Other', color: '#9966FF' }
      },

      // Activity breakdown
      activities: {
        home: { value: 0.9, label: 'Home', color: '#FF6384' },
        commute: { value: 0.7, label: 'Commute', color: '#36A2EB' },
        work: { value: 0.4, label: 'Work', color: '#FFCE56' },
        travel: { value: 0.2, label: 'Travel', color: '#4BC0C0' },
        leisure: { value: 0.1, label: 'Leisure', color: '#9966FF' }
      },

      // Energy consumption data (kWh)
      energy: {
        monthly: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          electricity: [320, 295, 310, 285, 270, 290, 275, 285, 295, 280, 265, 280],
          gas: [180, 165, 170, 155, 140, 150, 145, 155, 165, 160, 145, 160],
          renewable: [45, 52, 48, 58, 65, 62, 68, 65, 58, 62, 70, 65]
        },
        sources: {
          electricity: { value: 1.2, label: 'Electricity', color: '#36A2EB' },
          gas: { value: 0.8, label: 'Natural Gas', color: '#FF6384' },
          renewable: { value: 0.3, label: 'Renewable', color: '#4BC0C0' }
        }
      },

      // Recent activity history
      history: [
        { date: '2024-11-01', carbon: 0.18, change: -15, activity: 'Monthly Review' },
        { date: '2024-10-01', carbon: 0.21, change: -8, activity: 'Reduced Commuting' },
        { date: '2024-09-01', carbon: 0.23, change: 5, activity: 'Business Travel' },
        { date: '2024-08-01', carbon: 0.22, change: -12, activity: 'Energy Savings' },
        { date: '2024-07-01', carbon: 0.25, change: 18, activity: 'Vacation Travel' }
      ],

      // Recommendations and insights
      insights: {
        topRecommendation: 'Switch to renewable energy to reduce emissions by 15%',
        weeklySavings: 0.02,
        monthlySavings: 0.07,
        bestPerformingCategory: 'Energy',
        needsImprovementCategory: 'Transportation'
      },

      // Application metadata
      metadata: {
        lastUpdated: new Date().toISOString(),
        dataVersion: '1.0.0',
        calculationMethod: 'IPCC 2021 Guidelines'
      }
    };
  }

  // User methods
  getUser() {
    return this.data.user;
  }

  updateUser(userData) {
    this.data.user = { ...this.data.user, ...userData };
    this.saveToStorage();
  }

  // Goals methods
  getAnnualGoal() {
    return this.data.goals.annual;
  }

  updateAnnualGoal(target) {
    this.data.goals.annual.target = target;
    this.saveToStorage();
  }

  getGoalProgress() {
    const { current, target } = this.data.goals.annual;
    return {
      percentage: Math.round((current / target) * 100),
      remaining: (target - current).toFixed(1),
      onTrack: current <= target
    };
  }

  // Emissions methods
  getMonthlyEmissions() {
    return this.data.emissions.monthly;
  }

  getCurrentMonthEmissions() {
    const monthlyData = this.data.emissions.monthly;
    const currentMonth = new Date().getMonth();
    return {
      current: monthlyData.data[currentMonth],
      target: monthlyData.targets[currentMonth],
      label: monthlyData.labels[currentMonth]
    };
  }

  getEmissionsSources() {
    return Object.values(this.data.sources);
  }

  getEmissionsByActivity() {
    return Object.values(this.data.activities);
  }

  // Energy methods
  getEnergyConsumption() {
    return this.data.energy.monthly;
  }

  getEnergySources() {
    return Object.values(this.data.energy.sources);
  }

  // History methods
  getRecentHistory() {
    return this.data.history;
  }

  addHistoryEntry(entry) {
    this.data.history.unshift(entry);
    if (this.data.history.length > 10) {
      this.data.history = this.data.history.slice(0, 10);
    }
    this.saveToStorage();
  }

  // Insights methods
  getInsights() {
    return this.data.insights;
  }

  // Chart data generators
  getAreaChartData() {
    const monthlyData = this.getMonthlyEmissions();
    return {
      labels: monthlyData.labels,
      datasets: [{
        label: 'Actual Emissions (tonnes CO₂)',
        data: monthlyData.data,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4
      }, {
        label: 'Target Emissions (tonnes CO₂)',
        data: monthlyData.targets,
        backgroundColor: 'rgba(40, 167, 69, 0.2)',
        borderColor: 'rgba(40, 167, 69, 1)',
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        borderDash: [5, 5]
      }]
    };
  }

  getBarChartData() {
    const monthlyData = this.getMonthlyEmissions();
    return {
      labels: monthlyData.labels.slice(-7), // Last 7 months
      datasets: [{
        label: 'Emissions (tonnes CO₂)',
        data: monthlyData.data.slice(-7),
        backgroundColor: 'rgba(40, 167, 69, 0.8)',
        borderColor: 'rgba(40, 167, 69, 1)',
        borderWidth: 1
      }, {
        label: 'Target (tonnes CO₂)',
        data: monthlyData.targets.slice(-7),
        backgroundColor: 'rgba(201, 203, 207, 0.8)',
        borderColor: 'rgba(201, 203, 207, 1)',
        borderWidth: 1
      }]
    };
  }

  getDonutChartData() {
    const sources = this.getEmissionsSources();
    return {
      labels: sources.map(s => s.label),
      datasets: [{
        data: sources.map(s => s.value),
        backgroundColor: sources.map(s => s.color)
      }]
    };
  }

  getPieChartData() {
    const activities = this.getEmissionsByActivity();
    return {
      labels: activities.map(a => a.label),
      datasets: [{
        data: activities.map(a => a.value),
        backgroundColor: activities.map(a => a.color)
      }]
    };
  }

  getLineChartData() {
    const energyData = this.getEnergyConsumption();
    return {
      labels: energyData.labels,
      datasets: [{
        label: 'Energy Consumption (kWh)',
        data: energyData.electricity,
        borderColor: 'rgba(23, 162, 184, 1)',
        backgroundColor: 'rgba(23, 162, 184, 0.1)',
        borderWidth: 2,
        tension: 0.4
      }]
    };
  }

  getStackedBarChartData() {
    const energyData = this.getEnergyConsumption();
    return {
      labels: energyData.labels.slice(-7),
      datasets: [{
        label: 'Electricity (kWh)',
        data: energyData.electricity.slice(-7),
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        stack: 'Stack 0'
      }, {
        label: 'Gas (kWh)',
        data: energyData.gas.slice(-7),
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        stack: 'Stack 0'
      }, {
        label: 'Renewable (kWh)',
        data: energyData.renewable.slice(-7),
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        stack: 'Stack 0'
      }]
    };
  }

  // Utility methods
  calculateMonthlyChange() {
    const current = this.getCurrentMonthEmissions();
    const lastMonth = this.data.emissions.monthly.data[new Date().getMonth() - 1] || current.current;
    return ((current.current - lastMonth) / lastMonth * 100).toFixed(1);
  }

  getTotalEmissions() {
    return this.data.emissions.monthly.data.reduce((sum, val) => sum + val, 0).toFixed(1);
  }

  // Data persistence
  saveToStorage() {
    try {
      localStorage.setItem('ecotrack_data', JSON.stringify(this.data));
      this.data.metadata.lastUpdated = new Date().toISOString();
    } catch (error) {
      console.warn('Could not save to localStorage:', error);
    }
  }

  loadFromStorage() {
    try {
      const stored = localStorage.getItem('ecotrack_data');
      if (stored) {
        const parsedData = JSON.parse(stored);
        this.data = { ...this.data, ...parsedData };
      }
    } catch (error) {
      console.warn('Could not load from localStorage:', error);
    }
  }

  // Initialize data
  init() {
    this.loadFromStorage();
    return this;
  }
}

// Global instance
window.EcoTrackData = window.EcoTrackData || new EcoTrackData().init();
