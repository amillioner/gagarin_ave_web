import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import InquiryForm from "./InquiryForm";
import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";

interface ContactDialogProps {
  trigger: React.ReactNode;
  title?: string;
}

const ContactDialog: React.FC<ContactDialogProps> = ({ trigger, title }) => {
  const { t } = useLanguage();
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            {title || t.nav.contactUs}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <InquiryForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
