export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Address</h3>
                <p className="text-gray-600">123 Moving Street<br />City, State 12345</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700">Email</h3>
                <p className="text-gray-600">info@biazomoves.com</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold text-gray-700 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Facebook</button>
                <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">Twitter</button>
                <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">LinkedIn</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
