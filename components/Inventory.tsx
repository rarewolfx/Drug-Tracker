"use client"

import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AlertTriangle } from "lucide-react";

const inventoryData = [
  { id: 1, name: 'Aspirin', quantity: 5000, expiryDate: '2024-12-31' },
  { id: 2, name: 'Ibuprofen', quantity: 3000, expiryDate: '2025-06-30' },
  { id: 3, name: 'Paracetamol', quantity: 7000, expiryDate: '2024-09-30' },
  { id: 4, name: 'Amoxicillin', quantity: 2000, expiryDate: '2023-12-31' },
  { id: 5, name: 'Omeprazole', quantity: 1500, expiryDate: '2025-03-31' },
];

export default function Component() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [expiringDrugs, setExpiringDrugs] = useState([]);

  useEffect(() => {
    checkExpiringDrugs();
  }, []);

  const checkExpiringDrugs = () => {
    const today = new Date();
    const threeMonthsFromNow = new Date(today.setMonth(today.getMonth() + 3));
    
    const expiring = inventoryData.filter(drug => {
      const expiryDate = new Date(drug.expiryDate);
      return expiryDate <= threeMonthsFromNow;
    });

    if (expiring.length > 0) {
      setExpiringDrugs(expiring);
      setIsAlertOpen(true);
    }
  };

  return (
    <div className="space-y-8 p-8">
      <h2 className="text-3xl font-bold text-blue-600">Drug Inventory</h2>
      <div className="flex justify-between items-center">
        <Input className="w-64 border-blue-300 focus:border-blue-500" placeholder="Search drugs..." />
        <Button className="bg-teal-500 hover:bg-teal-600 text-white">Add New Drug</Button>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-blue-500 to-teal-500">
              <TableHead className="text-white">ID</TableHead>
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white">Quantity</TableHead>
              <TableHead className="text-white">Expiry Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventoryData.map((drug, index) => (
              <TableRow key={drug.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'}>
                <TableCell className="text-gray-800 font-medium">{drug.id}</TableCell>
                <TableCell className="text-gray-900 font-semibold">{drug.name}</TableCell>
                <TableCell className="text-gray-800">{drug.quantity}</TableCell>
                <TableCell className="text-gray-800">{drug.expiryDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center text-red-600">
              <AlertTriangle className="mr-2" />
              Expiring Drugs Alert
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            The following drugs will expire within the next 3 months:
            <ul className="list-disc pl-5 mt-2">
              {expiringDrugs.map(drug => (
                <li key={drug.id} className="text-red-500">
                  {drug.name} - Expires on {drug.expiryDate}
                </li>
              ))}
            </ul>
          </DialogDescription>
          <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white" onClick={() => setIsAlertOpen(false)}>
            Acknowledge
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}