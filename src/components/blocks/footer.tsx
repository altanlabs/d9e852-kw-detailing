const Footer = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">KW Detailing Cork</h3>
            <p className="text-muted-foreground">
              Professional auto detailing services in Cork and surrounding areas.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: info@kwdetailing.ie</li>
              <li>Phone: (021) XXX-XXXX</li>
              <li>Cork, Ireland</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Hours</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday & Sunday: 9:00 AM - 5:00 PM</li>
              <li className="font-semibold text-primary">Open 7 Days a Week!</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} KW Detailing Cork. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;