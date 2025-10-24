import { useState } from "react";
import { Search, Eye, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";

const mockBookings = [
  {
    id: 1,
    fullName: "Michael Scott",
    email: "michael@dundermifflin.com",
    phone: "+1-555-0100",
    organization: "Dunder Mifflin",
    organizationType: "Paper Company",
    requirement: "Need consultation on digital transformation strategy",
    date: "2025-10-20",
  },
  {
    id: 2,
    fullName: "Pam Beesly",
    email: "pam@dundermifflin.com",
    phone: "+1-555-0101",
    organization: "Beesly Art Studio",
    organizationType: "Creative Agency",
    requirement: "Looking for help with online presence and branding",
    date: "2025-10-19",
  },
  {
    id: 3,
    fullName: "Jim Halpert",
    email: "jim@athleap.com",
    phone: "+1-555-0102",
    organization: "Athleap",
    organizationType: "Sports Marketing",
    requirement: "Need assistance with marketing automation setup",
    date: "2025-10-18",
  },
];

export function Consultancy() {
  const [bookings, setBookings] = useState(mockBookings);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.organization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    setBookings(bookings.filter((b) => b.id !== id));
    toast.success("Booking deleted successfully");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Consultancy Bookings</h1>
        <p className="text-muted-foreground mt-1">Manage consultation requests</p>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, email, or organization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="text-sm text-muted-foreground">
            Total: {filteredBookings.length} bookings
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Full Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Organization</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.fullName}</TableCell>
                  <TableCell>{booking.email}</TableCell>
                  <TableCell>{booking.organization}</TableCell>
                  <TableCell>{booking.organizationType}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setSelectedBooking(booking)}
                        className="hover:bg-primary/10"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      {/* <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(booking.id)}
                        className="hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button> */}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <Dialog open={!!selectedBooking} onOpenChange={() => setSelectedBooking(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Booking Details</DialogTitle>
            <DialogDescription>Full information about this consultation request</DialogDescription>
          </DialogHeader>
          {selectedBooking && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                  <p className="text-base">{selectedBooking.fullName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="text-base">{selectedBooking.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Phone</p>
                  <p className="text-base">{selectedBooking.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Date</p>
                  <p className="text-base">{selectedBooking.date}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Organization</p>
                  <p className="text-base">{selectedBooking.organization}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Organization Type</p>
                  <p className="text-base">{selectedBooking.organizationType}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Requirement</p>
                <p className="text-base bg-accent/50 p-3 rounded-lg">{selectedBooking.requirement}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
