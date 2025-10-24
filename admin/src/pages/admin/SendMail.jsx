import { useState } from "react";
import { Mail, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const mockSubscribers = [
  "john@example.com",
  "jane@example.com",
  "bob@example.com",
  "alice@example.com",
  "charlie@example.com",
];

export function SendMail() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showEmails, setShowEmails] = useState(false);

  const handleFetchEmails = () => {
    setShowEmails(true);
    toast.success(`Fetched ${mockSubscribers.length} subscriber emails`);
  };

  const handleSendMail = () => {
    if (!subject || !message) {
      toast.error("Please fill in both subject and message");
      return;
    }

    toast.success(`Newsletter sent to ${mockSubscribers.length} subscribers!`);
    setSubject("");
    setMessage("");
    setShowEmails(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Send Newsletter</h1>
        <p className="text-muted-foreground mt-1">Compose and send emails to all subscribers</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Compose Newsletter
              </CardTitle>
              <CardDescription>Write your message to all newsletter subscribers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Email Subject *</Label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter email subject..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your newsletter content here..."
                  rows={12}
                  className="resize-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button onClick={handleFetchEmails} variant="outline" className="gap-2">
                  <Users className="h-4 w-4" />
                  Fetch Subscriber Emails
                </Button>
                <Button onClick={handleSendMail} className="gap-2">
                  <Mail className="h-4 w-4" />
                  Send Newsletter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                <span className="text-sm font-medium">Total Subscribers</span>
                <span className="text-2xl font-bold text-primary">{mockSubscribers.length}</span>
              </div>
            </CardContent>
          </Card>

          {showEmails && (
            <Card>
              <CardHeader>
                <CardTitle>Recipient List</CardTitle>
                <CardDescription>{mockSubscribers.length} subscribers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {mockSubscribers.map((email, idx) => (
                    <div key={idx} className="text-sm p-2 bg-accent rounded">
                      {email}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
