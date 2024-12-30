"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const vendorData = [
  { id: 1, name: 'Vendor A', orders: 15, shipments: 12, lastActivity: '2023-07-10' },
  { id: 2, name: 'Vendor B', orders: 8, shipments: 7, lastActivity: '2023-07-09' },
  { id: 3, name: 'Vendor C', orders: 20, shipments: 18, lastActivity: '2023-07-11' },
];

export default function Vendors() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-blue-600">Vendor Activity Monitoring</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
          <CardHeader>
            <CardTitle>Total Vendors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">25</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-red-500 to-orange-500 text-white">
          <CardHeader>
            <CardTitle>Active Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">43</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-teal-500 to-green-500 text-white">
          <CardHeader>
            <CardTitle>Completed Shipments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">37</p>
          </CardContent>
        </Card>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-blue-500 to-teal-500">
              <TableHead className="text-white">ID</TableHead>
              <TableHead className="text-white">Vendor Name</TableHead>
              <TableHead className="text-white">Active Orders</TableHead>
              <TableHead className="text-white">Completed Shipments</TableHead>
              <TableHead className="text-white">Last Activity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vendorData.map((vendor, index) => (
              <TableRow key={vendor.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}>
                <TableCell className="text-gray-800 font-medium">{vendor.id}</TableCell>
                <TableCell className="text-gray-900 font-semibold">{vendor.name}</TableCell>
                <TableCell className="text-gray-800">{vendor.orders}</TableCell>
                <TableCell className="text-gray-800">{vendor.shipments}</TableCell>
                <TableCell className="text-gray-800">{vendor.lastActivity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
