import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';

export function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'support@agromarket.com',
      subContent: 'We reply within 24 hours',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      subContent: 'Mon-Fri from 8am to 6pm',
    },
    {
      icon: MapPin,
      title: 'Office',
      content: '123 Farm Road',
      subContent: 'San Francisco, CA 94016',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Monday - Friday',
      subContent: '8:00 AM - 6:00 PM PST',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-700 font-medium">{info.content}</p>
                  <p className="text-sm text-gray-500 mt-1">{info.subContent}</p>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <Card className="p-8">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="John" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Doe" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      className="mt-1"
                    />
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-8">
                Quick answers to common questions about AgroMarket.
              </p>

              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">How do I become a seller?</h3>
                  <p className="text-gray-600 text-sm">
                    Click on "Sign Up" and select either "Farmer" or "Merchant" to create your seller account. Once verified, you can start listing products.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">What are the delivery options?</h3>
                  <p className="text-gray-600 text-sm">
                    We offer standard and express delivery options. Delivery times vary based on your location and the seller's availability.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">How does payment work?</h3>
                  <p className="text-gray-600 text-sm">
                    We accept all major credit cards, debit cards, and digital payment methods. Payments are securely processed through our platform.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">What if I have an issue with my order?</h3>
                  <p className="text-gray-600 text-sm">
                    Contact our support team immediately through this form or email us at support@agromarket.com. We're here to help resolve any issues.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Are products organic and verified?</h3>
                  <p className="text-gray-600 text-sm">
                    Products with a "Verified" badge have been checked by our team. Look for organic certifications in product descriptions.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
