
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center text-center">
          <div className="bg-amber-200 p-3 rounded-full mb-4">
            <MapPin className="text-amber-600" size={24} />
          </div>
          <h3 className="font-bold mb-2">Address</h3>
          <p className="text-sm text-gray-600">
            Gulshan, Apartment, House-27/Kha,<br />
            Bangladesh-1212
          </p>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center text-center">
          <div className="bg-amber-200 p-3 rounded-full mb-4">
            <Mail className="text-amber-600" size={24} />
          </div>
          <h3 className="font-bold mb-2">Email</h3>
          <p className="text-sm text-gray-600">info4321@gmail.com</p>
          <p className="text-sm text-gray-600">info4321@gmail.com</p>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center text-center">
          <div className="bg-amber-200 p-3 rounded-full mb-4">
            <Phone className="text-amber-600" size={24} />
          </div>
          <h3 className="font-bold mb-2">Call Now</h3>
          <p className="text-sm text-gray-600">+8801234567890</p>
          <p className="text-sm text-gray-600">+8801234567890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;