"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const consumptionData = [
  { name: 'Hospital A', aspirin: 4000, ibuprofen: 2400, paracetamol: 2400 },
  { name: 'Hospital B', aspirin: 3000, ibuprofen: 1398, paracetamol: 2210 },
  { name: 'Hospital C', aspirin: 2000, ibuprofen: 9800, paracetamol: 2290 },
  { name: 'Pharmacy X', aspirin: 2780, ibuprofen: 3908, paracetamol: 2000 },
  { name: 'Pharmacy Y', aspirin: 1890, ibuprofen: 4800, paracetamol: 2181 },
]

export default function Consumption() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-blue-600">Drug Consumption Monitoring</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
          <CardHeader>
            <CardTitle>Total Consumption</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">52,340</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-teal-500 text-white">
          <CardHeader>
            <CardTitle>Most Consumed Drug</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">Aspirin</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
          <CardHeader>
            <CardTitle>Least Consumed Drug</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">Ibuprofen</p>
          </CardContent>
        </Card>
      </div>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-blue-600">Consumption by Institution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={consumptionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="aspirin" fill="#3B82F6" />
              <Bar dataKey="ibuprofen" fill="#10B981" />
              <Bar dataKey="paracetamol" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}