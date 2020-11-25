import { useState, useEffect } from "react";
import { ApiClient } from "admin-bro";
import { Box, H1, Link } from "@admin-bro/design-system";
import {
  ResponsiveContainer,
  LineChart,
  Legend,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const api = new ApiClient();

const Weather = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.getDashboard();
        const proceed = await {
          city: res.data[0].city,
          data: JSON.parse(res.data[0].tenDaysWeather).map(item => {
            return {
              ...item,
              date: new Date(item.date).toLocaleDateString()
            };
          })
        };
        setData(proceed);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [api]);

  console.log(data);

  return (
    <Box variant="grey">
      <Box variant="white" style={{ height: "100%" }}>
        {data && (
          <>
            <H1 textAlign="center" mb="5">
              10 days weather in: {data.city}
            </H1>
            <span>
              Data was collected from{" "}
              <Link href="https://yandex.ru/pogoda/krasnodar/month/november?via=cnav">
                Yandex.Pogoda
              </Link>
            </span>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={data.data}
                margin={{ top: 5, right: 20, bottom: 15, left: 0 }}
              >
                <Legend verticalAlign="top" height={36} />
                <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Weather;
