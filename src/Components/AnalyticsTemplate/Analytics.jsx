import './Analytics.css'
import{
    XAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Legend,
    Bar,
    PieChart,
    Pie,
    LineChart,
    YAxis,
    Line,
} from "recharts";
const Analytics = ({chart_i,chart_ii,chart_iii,title,value,illustration}) => {
    const data = [
        {
          "name": "A",
          "Followers": 4000,
          "Earnings": 2400
        },
        {
          "name": "B",
          "Followers": 3000,
          "Earnings": 1398
        },
        {
          "name": "C",
          "Followers": 2000,
          "Earnings": 9800
        },
        {
          "name": "D",
          "Followers": 2780,
          "Earnings": 3908
        }
      ];
    const data1 = [
        {
          "name": "A",
          "Followers": 4000,
          "Subscribers": 2400,
          "amt": 2400
        },
        {
          "name": "B",
          "Followers": 3000,
          "Subscribers": 1398,
          "amt": 2210
        },
        {
          "name": "C",
          "Followers": 2000,
          "Subscribers": 9800,
          "amt": 2290
        },
        {
          "name": "D",
          "Followers": 2780,
          "Subscribers": 3908,
          "amt": 2000
        }
    ];
    const data2= [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];
      const data3 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];
  return (
    <div className="analytics">
     { chart_i && (
     <>
        <header>
            <span className="followers">Subscribers:</span>
            <span className="earnings">Earnings:</span>
        </header>
        <BarChart width={250} height={210} data={data}>
  <CartesianGrid strokeDasharray="100 10" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="Followers" fill="#00464e" />
  <Bar dataKey="Earnings" fill="#810551" />
        </BarChart>
    </>
    )}
    {chart_ii &&(
            <LineChart
             width={260}
             height={220} 
             data={data1}
             margin={{ top: 10, right: 10}}
             >
  
             <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Followers" stroke="#810551" />
            <Line type="monotone" dataKey="Subscribers" stroke="#00464e" />
            </LineChart>
    )}
    {chart_iii &&(
        <PieChart width={730} height={250}>
        <Pie data={data2} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#810551" />
        <Pie data={data3} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#00464e" label />
      </PieChart>
    )}
    {title &&(
        <>
        <h1 className="title">{title}</h1>
        <h2 className="value">{value}</h2>
        <h2 className="extra-txt">
            People are loving your content
            <br />
        </h2>
        <img src={illustration} alt="illus" className="illustration"/>
        </>
    )}
    </div>
  )
}

export default Analytics
