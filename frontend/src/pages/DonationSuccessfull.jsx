import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom"; // or `next/router` for Next.js

export default function DonationSuccessfull() {
  const navigate = useNavigate(); // or useRouter() if using Next.js

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
      
      <h1 className="text-3xl font-bold text-primary mb-2">Thank You for Your Donation! 🎉</h1>
      
      <p className="text-muted-foreground max-w-md mb-4">
        Your generosity means the world to us. 💖 A confirmation email has been sent to your inbox.  
        If you don't see it, please check your spam folder.
      </p>

      <Button onClick={() => navigate("/")} className="mt-4">
        Go Back to Home
      </Button>
    </div>
  );
}
