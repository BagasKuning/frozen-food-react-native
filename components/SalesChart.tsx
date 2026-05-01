import { ScrollView, StyleSheet, Text, View } from "react-native";

import { BarChart } from "react-native-chart-kit";

type Props = {
  title?: string;

  data: {
    labels: string[];

    datasets: {
      data: number[];
    }[];
  };
};

export default function SalesChart({ title, data }: Props) {
  const chartWidth = data.labels.length * 70;

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <BarChart
          data={data}
          width={chartWidth}
          height={220}
          fromZero
          yAxisSuffix="Jt"
          yAxisLabel=""
          showValuesOnTopOfBars
          withInnerLines
          chartConfig={{
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",

            decimalPlaces: 0,

            color: (opacity = 1) => `rgba(20, 152, 214, ${opacity})`,

            labelColor: () => "#6B7280",

            fillShadowGradient: "#1498D6",
            fillShadowGradientOpacity: 1,

            barPercentage: 0.5,

            propsForBackgroundLines: {
              stroke: "#E5E7EB",
            },
          }}
          style={styles.chart}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    borderRadius: 20,

    padding: 16,

    elevation: 2,

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
  },

  title: {
    fontSize: 16,

    fontWeight: "700",

    marginBottom: 20,

    color: "#1F2937",
  },

  chart: {
    borderRadius: 16,
  },
});
