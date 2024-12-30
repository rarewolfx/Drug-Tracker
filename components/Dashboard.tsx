"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', inventory: 4000, orders: 2400, shipments: 2400 },
  { name: 'Feb', inventory: 3000, orders: 1398, shipments: 2210 },
  { name: 'Mar', inventory: 2000, orders: 9800, shipments: 2290 },
  { name: 'Apr', inventory: 2780, orders: 3908, shipments: 2000 },
  { name: 'May', inventory: 1890, orders: 4800, shipments: 2181 },
  { name: 'Jun', inventory: 2390, orders: 3800, shipments: 2500 },
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-blue-600">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-teal-400 text-white">
          <CardHeader>
            <CardTitle>Total Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">15,060</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-teal-500 to-green-400 text-white">
          <CardHeader>
            <CardTitle>Pending Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">237</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-blue-400 text-white">
          <CardHeader>
            <CardTitle>Shipments in Transit</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">42</p>
          </CardContent>
        </Card>
      </div>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-blue-600">Activity Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="inventory" fill="#3B82F6" />
              <Bar dataKey="orders" fill="#10B981" />
              <Bar dataKey="shipments" fill="#14B8A6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}