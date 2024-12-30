import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface SupplyChainItem {
  id: number;
  drug: string;
  status: 'In Transit' | 'Delivered' | 'Processing';
  origin: string;
  destination: string;
  eta: string;
}

const supplyChainData: SupplyChainItem[] = [
  { id: 1, drug: 'Aspirin', status: 'In Transit', origin: 'Manufacturer A', destination: 'Hospital X', eta: '2023-07-15' },
  { id: 2, drug: 'Ibuprofen', status: 'Delivered', origin: 'Manufacturer B', destination: 'Pharmacy Y', eta: '2023-07-10' },
  { id: 3, drug: 'Paracetamol', status: 'Processing', origin: 'Manufacturer C', destination: 'Hospital Z', eta: '2023-07-20' },
];

export default function SupplyChain() {
  return (
  
    <div className="p-8 space-y-8">
      <h2 className="text-3xl font-bold text-blue-600">Supply Chain Tracking</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
          <CardHeader>
            <CardTitle>In Transit</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">12</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-600 to-teal-600 text-white">
          <CardHeader>
            <CardTitle>Delivered</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">45</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <CardHeader>
            <CardTitle>Processing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">8</p>
          </CardContent>
        </Card>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-blue-600 to-teal-600">
              <TableHead className="text-white">ID</TableHead>
              <TableHead className="text-white">Drug</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white">Origin</TableHead>
              <TableHead className="text-white">Destination</TableHead>
              <TableHead className="text-white">ETA</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {supplyChainData.map((item, index) => (
              <TableRow key={item.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'}>
                <TableCell className="text-gray-700 font-medium">{item.id}</TableCell>
                <TableCell className="text-gray-800 font-semibold">{item.drug}</TableCell>
                <TableCell>
                  <Badge className={
                    item.status === 'In Transit' ? 'bg-yellow-600 text-yellow-100' :
                    item.status === 'Delivered' ? 'bg-green-700 text-green-100' :
                    'bg-blue-700 text-blue-100'
                  }>
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-700">{item.origin}</TableCell>
                <TableCell className="text-gray-700">{item.destination}</TableCell>
                <TableCell className="text-gray-700">{item.eta}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
    
  );
}
