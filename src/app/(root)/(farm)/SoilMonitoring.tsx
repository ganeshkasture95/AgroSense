import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const SoilMonitoring = () => {
  // Data for the week (can be dynamic based on actual readings)
  const weekLabels = ['W1', 'W2', 'W3', 'W4'];
  const potassiumData = [120, 100, 80, 60];
  const nitrogenData = [40, 20, 0, 0]; // Assuming these are the values for the week
  const phosphorousData = [48, 28, 24, 0]; // Assuming these are the values for the week

  // Soil conditions
  const soilConditions = {
    humidity: "Normal",
    salts: "High",
    waterLevel: "Normal",
    heat: "Low",
    pH: "17%"
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Soil Status for This Week</Text>
      <BarChart
        data={{
          labels: weekLabels,
          datasets: [
            {
              label: '% Potassium',
              data: potassiumData,
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
              // Add other datasets for Nitrogen and Phosphorous
            },
            {
              label: '% Nitrogen',
              data: nitrogenData,
              color: (opacity = 1) => `rgba(255, 99, 71, ${opacity})`,
            },
            {
              label: '% Phosphorous',
              data: phosphorousData,
              color: (opacity = 1) => `rgba(75, 192, 192, ${opacity})`,
            },
          ],
        }}
        width={350} // from react-native
        height={220}
        yAxisLabel="%"
        chartConfig={{
          backgroundColor: '#FFFFFF',
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <View style={styles.conditionsContainer}>
        {Object.keys(soilConditions).map((key) => (
          <Text key={key} style={styles.conditionText}>
            {key.charAt(0).toUpperCase() + key.slice(1)}: {soilConditions[key]}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F8F5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2e8b57',
    textAlign: 'center',
  },
  conditionsContainer: {
    marginTop: 20,
    backgroundColor: '#DBDDDE',
    padding: 15,
    borderRadius: 10,
  },
  conditionText: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default SoilMonitoring;
