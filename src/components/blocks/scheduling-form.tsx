import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const vehicleTypes = [
  "Sedan",
  "SUV",
  "Van",
  "Truck",
  "Sports Car",
  "Luxury Vehicle",
  "Other"
];

const ServiceSchedulingForm = () => {
  const [date, setDate] = useState<Date>();
  const [vehicleType, setVehicleType] = useState("");
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ ...formData, vehicleType, date });
    // Reset form
    setFormData({
      make: "",
      model: "",
      year: "",
      name: "",
      email: "",
      phone: "",
    });
    setDate(undefined);
    setVehicleType("");
  };

  return (
    <Card className="p-6 w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Schedule Car Detailing</h2>
          
          {/* Vehicle Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Vehicle Make"
              name="make"
              value={formData.make}
              onChange={handleInputChange}
              required
            />
            <Input
              placeholder="Vehicle Model"
              name="model"
              value={formData.model}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Year"
              name="year"
              type="number"
              min="1900"
              max={new Date().getFullYear() + 1}
              value={formData.year}
              onChange={handleInputChange}
              required
            />
            <Select value={vehicleType} onValueChange={setVehicleType} required>
              <SelectTrigger>
                <SelectValue placeholder="Vehicle Type" />
              </SelectTrigger>
              <SelectContent>
                {vehicleTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <Input
              placeholder="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <Input
            placeholder="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />

          {/* Date Selection */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
              />
            </PopoverContent>
          </Popover>
        </div>

        <Button type="submit" className="w-full">
          Schedule Detailing Service
        </Button>
      </form>
    </Card>
  );
};

export default ServiceSchedulingForm;