import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail } from "./services/email";

export function registerRoutes(app: Express): Server {
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ 
          error: "Name, email and message are required" 
        });
      }

      const previewUrl = await sendEmail({ name, email, message });

      // In development, we return the Ethereal preview URL
      res.json({ 
        success: true, 
        message: "Email sent successfully",
        previewUrl // This is only for development/testing
      });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ 
        error: "Failed to send email" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}