import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts"

function PortfolioChart({ assets }) {

  const data = assets.map((asset) => ({

    name: asset.name,
    value: asset.value,

    color:

      asset.name.includes("GOLD")
        ? "#FFD700"

      : asset.name.includes("SILVER")
        ? "#C0C0C0"

      : "#3B82F6"

  }))

  return (

    <div className="
      bg-zinc-900
      rounded-2xl
      p-5
      h-[500px]
    ">

      <h2 className="text-2xl font-bold mb-5">
        Asset Allocation
      </h2>

      <ResponsiveContainer
        width="100%"
        height="90%"
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={140}
            label
          >

            {data.map((entry, index) => (

              <Cell
                key={index}
                fill={entry.color}
              />

            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  )
}

export default PortfolioChart