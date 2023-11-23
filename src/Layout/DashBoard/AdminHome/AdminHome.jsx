import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaJediOrder, FaUsers } from "react-icons/fa";
import axios from "axios";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



const AdminHome = () => {
    const {user} = useAuth();
    // const axiosSecure = useAxiosSecure();
    
    

    const {data : stats} = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async  () =>{
            const res = await axios.get('https://bistro-boss-server-xi-two.vercel.app/admin-stats')
            return res.data;
        }
    })

  const {data: chartData = []} = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-satas");
      return res.data;
    }
  })
  console.log(chartData);
  /// bar chart related
  
  // custom shape for the bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// custom shape for the pie chart
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const pieChartData = chartData.map(data => {
    return {name: data.category, value: data.revenue}
})
    return (
        <div>
            
          <span className="text-2xl text-orange-500 font-bold">Welcome</span>  
          <div className="text-3xl font-bold text-purple-500 ">
          {
                user?.displayName  ? user.displayName : 'Black'
            }
          </div>
          <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <FaDollarSign className="text-2xl"></FaDollarSign>
    </div>
    <div className="stat-title">Revenue</div>
    <div className="stat-value text-primary">${stats?.revenue}</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <FaUsers className="text-2xl"></FaUsers>
    </div>
    <div className="stat-title">User</div>
    <div className="stat-value text-primary">${stats?.users}</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <FaBook className="text-2xl"></FaBook>
    </div>
    <div className="stat-title">Menu Items</div>
    <div className="stat-value text-primary">${stats?.menuItems}</div>
    <div className="stat-desc">21% more than last month</div>

  </div>
  <div className="stat">
    <div className="stat-figure text-primary">
      <FaJediOrder className="text-2xl"></FaJediOrder>
    </div>
    <div className="stat-title">Order</div>
    <div className="stat-value text-primary">${stats?.order}</div>
    <div className="stat-desc">21% more than last month</div>

  </div>
  
  
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src={user.photoURL} />
        </div>
      </div>
    </div>
    {/* <div className="stat-value">86%</div>
    <div className="stat-title">Tasks done</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div> */}
  </div>
  
</div>
<div className="flex">
<div className="w-1/2">
<BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        ))}
      </Bar>
    </BarChart>

</div>
{/* pie chart */}
<div>
<div className="w-1/2">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            
</div>
</div>
        </div>
    );
};

export default AdminHome;