import { useState } from "react";
import { Mail, Users, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function SendMail() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showEmails, setShowEmails] = useState(false);
  const [subscribers, setSubscribers] = useState([]);
  const [loadingEmails, setLoadingEmails] = useState(false);
  const [sending, setSending] = useState(false);

  // 📨 Fetch all subscriber emails
  const handleFetchEmails = async () => {
    setLoadingEmails(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/newsletter/get_all_emails`);
      const data = await res.json();

      if (res.ok && data.emailList) {
        setSubscribers(data.emailList);
        setShowEmails(true);
        toast.success(`Fetched ${data.count || data.emailList.length} subscriber emails`);
      } else {
        toast.error("Failed to fetch subscriber emails");
      }
    } catch (error) {
      console.error("Error fetching emails:", error);
      toast.error("Something went wrong while fetching emails");
    } finally {
      setLoadingEmails(false);
    }
  };

  // 📤 Send newsletter
  const handleSendMail = async () => {
    if (!subject || !message) {
      toast.error("Please fill in both subject and message");
      return;
    }

    setSending(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/newsletter/send_newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, content: message }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Newsletter sent successfully!");
        setSubject("");
        setMessage("");
        setShowEmails(false);
      } else {
        toast.error(data.message || "Failed to send newsletter");
      }
    } catch (error) {
      console.error("Error sending newsletter:", error);
      toast.error("Error sending newsletter");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Send Newsletter</h1>
        <p className="text-muted-foreground mt-1">Compose and send emails to all subscribers</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left side - Compose email */}
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
              {/* Subject */}
              <div className="space-y-2">
                <Label htmlFor="subject">Email Subject *</Label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter email subject..."
                  disabled={sending}
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your newsletter content here..."
                  rows={12}
                  className="resize-none"
                  disabled={sending}
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleFetchEmails}
                  variant="outline"
                  className="gap-2"
                  disabled={loadingEmails || sending}
                >
                  {loadingEmails ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Fetching...
                    </>
                  ) : (
                    <>
                      <Users className="h-4 w-4" />
                      Fetch Subscriber Emails
                    </>
                  )}
                </Button>

                <Button onClick={handleSendMail} className="gap-2" disabled={sending || !subscribers.length}>
                  {sending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="h-4 w-4" />
                      Send Newsletter
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right side - Stats & Email list */}
        <div className="space-y-6">
          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                <span className="text-sm font-medium">Total Subscribers</span>
                <span className="text-2xl font-bold text-primary">
                  {subscribers.length || 0}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Email list */}
          {showEmails && (
            <Card>
              <CardHeader>
                <CardTitle>Recipient List</CardTitle>
                <CardDescription>{subscribers.length} subscribers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {subscribers.map((sub, idx) => (
                    <div key={idx} className="text-sm p-2 bg-accent rounded">
                      {sub.email}
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
